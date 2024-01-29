import React from 'react';
import StyledButton from './styles'

interface Button {
    as
}

function Button({as}:React.PropsWithChildren<Button>) {
    return (
        <StyledButton as={as}>
        </StyledButton>
    )
}

export default Button