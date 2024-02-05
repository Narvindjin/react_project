import React from 'react';
import Container from "../../components/container/container";
import {StyledContainer} from "./styles";
import goodsArray from '../../mocks/goods';
import BuySection from './buyInterface/buyInterface';
import GoodsSlider from './goodsSlider/goodsSlider';

const CatalogueMain = () => {
    return (
        <main>
            <Container>
                <StyledContainer>
                    <BuySection goods={goodsArray}/>
                    <GoodsSlider/>
                </StyledContainer>
            </Container>
        </main>
    )
}

export default CatalogueMain