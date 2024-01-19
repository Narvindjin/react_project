import React from 'react';

let Title = ({level, type}) => {
    let titleLevel:number | false;
    if (typeof level === "number") {
        titleLevel = level
    } else {
        titleLevel = false;
    }

    return (
        <StyledTitle>

        </StyledTitle>
    )
}