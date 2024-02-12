import React, {useState} from 'react';
import Container from "../../components/container/container";
import {StyledContainer} from "./styles";
import goodsArray from '../../mocks/goods';
import BuySection from './buyInterface/buyInterface';
import GoodsSlider from './goodsSlider/goodsSlider';

const CatalogueMain = () => {
    const [slideId, setSlideId] = useState(0);

    return (
        <main>
            <Container>
                <StyledContainer>
                    <BuySection goods={goodsArray} setSlideId={setSlideId} />
                    <GoodsSlider goodsArray={goodsArray} slideId={slideId}/>
                </StyledContainer>
            </Container>
        </main>
    )
}

export default CatalogueMain