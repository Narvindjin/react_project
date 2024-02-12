import React, {useState, ChangeEvent} from "react";
import {StyledFieldset, StyledForm, EmailInput, SmallPrice, PriceContainer, GoodsList} from "./styles";
import TitleComponent from "../../../components/title/title";
import {StyledButtonFullWidth} from "../../../components/button/styles";
import GoodsCheckbox from "../../../components/goodsCheckbox/goodsCheckbox";
import { goodsInterface } from "../goodsSlider/goodsInterface";

interface buySection {
    goods: goodsInterface[];
    setSlideId: React.Dispatch<React.SetStateAction<number>>;
}

const BuySection = ({goods, setSlideId}:React.PropsWithChildren<buySection>) => {
    const [fullPrice, setFullPrice] = useState(0)
    const [submitDisabled, setSubmitDisabled] = useState(false)

    const handlePriceChange = (goodsObject:goodsInterface, evt: null|ChangeEvent = null) => {
        let newFullPrice = fullPrice;
        if (evt) {
            const eventTarget = evt.target as HTMLInputElement;
            if (eventTarget.checked) {
                newFullPrice+=goodsObject.price;
            } else {
                newFullPrice-=goodsObject.price;
            }
        }
        setSlideId(goodsObject.id);
        setFullPrice(newFullPrice);
        enableSubmitButtonCheck();
    }

    let emailValidity = false;

    const submitEnableChecker = () => {
        if (fullPrice > 0 && emailValidity) {
            return true
        } else {
            return false
        }
    }

    const enableSubmitButtonCheck = (evt:null|ChangeEvent = null) => {
        if (evt) {
            const target = evt.target as HTMLInputElement
            if (target && target.checkValidity()) {
                emailValidity = true;
            } else {
                emailValidity = false;
            }
        }
        if (fullPrice > 0 && submitEnableChecker()) {
            setSubmitDisabled(false);
        } else {
            setSubmitDisabled(true);
        }
    }

    return (
        <StyledForm>
            <StyledFieldset>
                <TitleComponent float={true} margin={12} styleLevel={1} markupLevel={'legend'}>Выберите продукты</TitleComponent>
                <GoodsList>
                    {goods.map((goodsItem) => {
                        return (
                            <li key={goodsItem.id}>
                                <GoodsCheckbox onChange={(evt) => handlePriceChange(goodsItem, evt)} price={goodsItem.price} name={goodsItem.name} id={goodsItem.id}>{goodsItem.name}</GoodsCheckbox>
                            </li>
                        )
                    })}
                </GoodsList>
            </StyledFieldset>
            <StyledFieldset>
                <TitleComponent float={true} margin={24} styleLevel={1} markupLevel={'legend'}>Сделать заказ</TitleComponent>
                <EmailInput onChange={(evt) => enableSubmitButtonCheck(evt)} placeholder={'Введите адрес доставки'} required={true} type={"email"}></EmailInput>
                <PriceContainer>
                    <SmallPrice>Цена:</SmallPrice>
                    <TitleComponent margin={32} markupLevel={'p'} styleLevel={4}>{fullPrice} руб.</TitleComponent>
                </PriceContainer>
                <StyledButtonFullWidth disabled={submitDisabled} type={'submit'}>Купить</StyledButtonFullWidth>
            </StyledFieldset>
        </StyledForm>
    )
}

export default BuySection