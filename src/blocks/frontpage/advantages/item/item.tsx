import React from 'react';
import {StyledItem, StyledAdvantageTitle, StyledUpperDiv, StyledUpperTextContainer, StyledText, StyledTag} from "./styles";

interface advantageInterface {
    id: number,
    positive:boolean,
    title:string,
    text: string,
}

const AdvantagesItem = ({positive, id, title, text}:React.PropsWithChildren<advantageInterface>) => {
    return (
        <StyledItem $positive={positive}>
            <StyledUpperDiv>
                <StyledUpperTextContainer>
                    <StyledTag $positive={positive}>
                        {positive ? 'Фермерские продукты': 'Магазинные продукты'}
                    </StyledTag>
                    <StyledAdvantageTitle>{title}</StyledAdvantageTitle>
                </StyledUpperTextContainer>
            </StyledUpperDiv>
            <StyledText>{text}</StyledText>
        </StyledItem>
    )
}

export {AdvantagesItem}
export type {advantageInterface}