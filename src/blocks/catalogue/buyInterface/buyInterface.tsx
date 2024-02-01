import {StyledFieldset, StyledForm, EmailInput, SmallPrice, PriceContainer, GoodsList} from "./styles";
import TitleComponent from "../../../components/title/title";
import {StyledButtonFullWidth} from "../../../components/button/styles";
import GoodsCheckbox from "../../../components/goodsCheckbox/goodsCheckbox";

const BuyInterface = () => {
    return (
        <StyledForm>
            <StyledFieldset>
                <TitleComponent as={'legend'} margin={12} styleLevel={1} markupLevel={false}>Выберите продукты</TitleComponent>
                <GoodsList>
                    <li>
                        <GoodsCheckbox id={'1'} name={'123'}>
                            пример
                        </GoodsCheckbox>
                    </li>
                </GoodsList>
            </StyledFieldset>
            <StyledFieldset>
                <TitleComponent as={'legend'} margin={24} styleLevel={1} markupLevel={false}>Сделать заказ</TitleComponent>
                <EmailInput placeholder={'Введите адрес доставки'} required={true} type={"email"}></EmailInput>
                <PriceContainer>
                    <SmallPrice>Цена:</SmallPrice>
                    <TitleComponent as{'p'} margin={32} markupLevel={false} styleLevel={4}>*</TitleComponent>
                </PriceContainer>
                <StyledButtonFullWidth type={'submit'}>Купить</StyledButtonFullWidth>
            </StyledFieldset>
        </StyledForm>
    )
}

export default BuyInterface