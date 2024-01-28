import React from 'react';
import StyledTitle from './styles';

interface Title {
    markupLevel: number | false,
    styleLevel: 1 | 2 | 3 | 4,
    margin: number,
    children: string,
}

const TitleComponent = ({markupLevel, styleLevel, margin}: Title) => {
    let customTitleTag:string;
    if (markupLevel) {
        customTitleTag = 'h' + markupLevel;
    } else {
        customTitleTag = 'p';
    }

    return (
        <StyledTitle as={customTitleTag} level={styleLevel} margin={margin}>

        </StyledTitle>
    )
}

export default TitleComponent;