import React from "react";
import {AttrsText, PriceWeightContainer} from "./styles";
import { mainInterface } from "../../../blocks/catalogue/goodsSlider/goodsInterface";

interface goodsProp {
    goodsItem: mainInterface,
}

const AttrsTab = ({goodsItem}:React.PropsWithChildren<goodsProp>) => {
    return (
        <>
            <AttrsText>{goodsItem.description}</AttrsText>
            <PriceWeightContainer><span>{goodsItem.price}/{goodsItem.weightGram}</span></PriceWeightContainer>
        </>
    )
}

export default AttrsTab