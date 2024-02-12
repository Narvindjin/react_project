import React from 'react';
import StyledTitle from './styles';

interface Title {
    markupLevel: 1 | 2 | 3| 4 | 5 | 6 | 'legend'| 'p'| false,
    styleLevel: 1 | 2 | 3 | 4,
    margin: number,
    center?: boolean|undefined,
    float?: boolean|undefined,
}

const TitleComponent = ({markupLevel, styleLevel, margin, children, center=false, float=false}: React.PropsWithChildren<Title>) => {
    let customTitleTag;
    if (typeof markupLevel === 'string') {
        customTitleTag = markupLevel;
    } else if (markupLevel) {
        customTitleTag = 'h' + markupLevel;
    } else {
        customTitleTag = 'p';
    }

    return (
        <StyledTitle as={customTitleTag} $center={center} $level={styleLevel} $float={float} $margin={margin}>
            {children}
        </StyledTitle>
    )
}

export default TitleComponent;