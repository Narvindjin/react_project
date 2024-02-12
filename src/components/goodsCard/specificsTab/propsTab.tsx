import React from "react";
import {StyledDl, StyledDd, StyledDt, DescriptionContainer} from "./styles";

import { propsInterface } from "../../../blocks/catalogue/goodsSlider/goodsInterface";

interface tab {
    goodsItemTab: propsInterface
}

const PropsTab = ({goodsItemTab}: React.PropsWithChildren<tab>) => {
    return (
        <StyledDl>
            <DescriptionContainer>
                <StyledDt>Энергетическая ценность: </StyledDt>
                <StyledDd>{goodsItemTab.energy}</StyledDd>
            </DescriptionContainer>
            <DescriptionContainer>
                <StyledDt>Пищевая ценность: </StyledDt>
                <StyledDd>белки - {goodsItemTab.carbs}, жиры - {goodsItemTab.fats}, углеводы - {goodsItemTab.protein} на 100г.</StyledDd>
            </DescriptionContainer>
        </StyledDl>
    )
}

export default PropsTab