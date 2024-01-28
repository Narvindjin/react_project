import React from 'react';
import LogoSvg from "./logo-svg";
import StyledDiv from './styles';
import TitleComponent from '../title/title';

function Logo() {
    return (
        <StyledDiv>
            <LogoSvg></LogoSvg>
            <TitleComponent styleLevel={4} markupLevel={false} margin={0}>Фермерские продукты</TitleComponent>
        </StyledDiv>
    )
}

export default Logo