import React from 'react';
import {TextContainer, Text, IntroWrapper, TextAreaContainer} from "./styles";
import Title from "../../../components/title/title";
import Container from "../../../components/container/container";

const Intro = () => {
    return (
        <IntroWrapper>
            <Container>
                <TextAreaContainer>
                    <TextContainer>
                        <Title margin={24} markupLevel={1} styleLevel={1}>Магазин фермерских продуктов с доставкой</Title>
                        <Text>Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.</Text>
                    </TextContainer>
                </TextAreaContainer>
            </Container>
        </IntroWrapper>
    )
}

export default Intro