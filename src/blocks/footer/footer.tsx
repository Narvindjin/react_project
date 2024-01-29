import React from 'react';
import {StyledContainer, StyledDisclaimer} from './styles'
import Container from "../../components/container/container";
import Logo from '../../components/logo/logo';

function Footer() {
    return (
        <footer>
            <Container>
                <StyledContainer>
                    <Logo/>
                    <StyledDisclaimer>Создано 2021</StyledDisclaimer>
                </StyledContainer>
            </Container>
        </footer>
    )
}

export default Footer