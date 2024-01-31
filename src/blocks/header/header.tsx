import React from 'react';
import {StyledHeader, StyledContainer} from './styles'
import Container from "../../components/container/container";
import Logo from '../../components/logo/logo';
import Button from "../../components/button/button";

function Header() {
    return (
        <StyledHeader>
            <Container>
                <StyledContainer>
                    <Logo/>
                    <Button as='a'>Купить</Button>
                </StyledContainer>
            </Container>
        </StyledHeader>
    )
}

export default Header