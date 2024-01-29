import React from 'react';
import {StyledItem, StyledAdvantageTitle, StyledUpperDiv, StyledUpperTextContainer, StyledText, StyledTag} from "./styles";

interface Advantage {
    positive:boolean
}

const AdvantagesItem = ({positive}:React.PropsWithChildren<Advantage>) => {
    return (
        <StyledItem positive={positive}>
            <StyledUpperDiv>
                <StyledUpperTextContainer>
                    <StyledTag positive={positive}>
                        {positive ? 'Фермерские продукты': 'Магазинные продукты'}
                    </StyledTag>
                    <StyledAdvantageTitle></StyledAdvantageTitle>
                </StyledUpperTextContainer>
            </StyledUpperDiv>
            <StyledText></StyledText>
        </StyledItem>
    )
}

export default AdvantagesItem