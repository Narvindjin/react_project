import React from 'react';
import Title from "../../../components/title/title";
import MarginContainer from "../../../components/container/margin-container";
import AdvantagesItem from "./item/item";
import {AdvantagesColumn, AdvantagesWrapper, ButtonContainer} from "./styles";
import Button from "../../../components/button/button";

const Advantages = () => {
    return (
        <MarginContainer>
            <Title markupLevel={2} styleLevel={2} margin={64} center={true}>Почему фермерские продукты лучше?</Title>
            <AdvantagesWrapper>
                <AdvantagesColumn>
                    <AdvantagesItem positive={true}></AdvantagesItem>
                </AdvantagesColumn>
                <AdvantagesColumn>
                    <AdvantagesItem positive={false}></AdvantagesItem>
                </AdvantagesColumn>
            </AdvantagesWrapper>
            <ButtonContainer>
                <Button as={'a'}>Купить</Button>
            </ButtonContainer>
        </MarginContainer>
    )
}

export default Advantages