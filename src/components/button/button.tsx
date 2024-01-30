import React from 'react';
import StyledButton from './styles'

interface Button {
    as: any
}

function Button({as, children}:React.PropsWithChildren<Button>) {
    return (
        <StyledButton as={as}>
            {children}
        </StyledButton>
    )
}

export default Button