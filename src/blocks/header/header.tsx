import React from 'react';
import StyledHeader from './styles'
import Container from "../../components/container/container";

function Header() {
    return (
        <StyledHeader>
            <Container>
                <Logo>

                </Logo>
                <Button>Купить</Button>
            </Container>
        </StyledHeader>
    )
}

export default {Header}