import React from 'react';
import StyledContainer from './styles'
import Container from "../../components/container/container";
import Logo from '../../components/logo/logo';
import Button from "../../components/button/button";

function Header() {
    return (
        <header>
            <Container>
                <StyledContainer>
                    <Logo>
                    </Logo>
                    <Button as='a'>Купить</Button>
                </StyledContainer>
            </Container>
        </header>
    )
}

export default Header