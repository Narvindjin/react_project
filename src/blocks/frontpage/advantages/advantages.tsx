import React from 'react';
import Title from "../../../components/title/title";
import MarginContainer from "../../../components/container/margin-container";
import {AdvantagesItem} from "./item/item";
import type {advantageInterface} from "./item/item";
import {AdvantagesColumn, AdvantagesWrapper, ButtonContainer} from "./styles";
import Button from "../../../components/button/button";
import advantagesArray from "../../../mocks/advantages";

const Advantages = () => {
    const positiveArray:advantageInterface[] = [];
    const negativeArray:advantageInterface[] = [];
    advantagesArray.forEach((advantage) => {
        if (advantage.positive) {
            positiveArray.push(advantage);
        } else {
            negativeArray.push(advantage);
        }
    })
    const createList = (array:advantageInterface[]) => {
        if (array.length) {
            const list = array.map((advantage) => {
                return (
                    <AdvantagesItem positive={advantage.positive} key={advantage.id} id={advantage.id} text={advantage.text} title={advantage.title}>
                    </AdvantagesItem>
                )
            })
            return list
        }
        return null
    }

    return (
        <MarginContainer>
            <Title markupLevel={2} styleLevel={2} margin={64} center={true}>Почему фермерские продукты лучше?</Title>
            <AdvantagesWrapper>
                {positiveArray.length?
                    <AdvantagesColumn>
                        {createList(positiveArray)}
                    </AdvantagesColumn>:null
                }
                {negativeArray.length?
                    <AdvantagesColumn>
                        {createList(negativeArray)}
                    </AdvantagesColumn>:null
                }
            </AdvantagesWrapper>
            <ButtonContainer>
                <Button as={'a'}>Купить</Button>
            </ButtonContainer>
        </MarginContainer>
    )
}

export default Advantages