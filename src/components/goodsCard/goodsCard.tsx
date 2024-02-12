import React from 'react';
import {TabList, TabItem, TextZone, CardContainer} from "./styles";
import TitleComponent from "../title/title";
import SpecsTab from "./specificsTab/specsTab";
import PropsTab from './specificsTab/propsTab';
import AttrsTab from "./descTab/attrsTab";
import {goodsInterface} from "../../blocks/catalogue/goodsSlider/goodsInterface";

interface goodsProp {
    goodsItem: goodsInterface
}

const GoodsCard = ({goodsItem}:React.PropsWithChildren<goodsProp>) => {
    return (
        <CardContainer>
            <image></image>
            <TextZone>
                <TitleComponent margin={16} styleLevel={4} markupLevel={2}>Филе</TitleComponent>
                <TabList>
                    <TabItem>
                    </TabItem>
                </TabList>
                <div>
                    <AttrsTab goodsItem={goodsItem}></AttrsTab>
                    <SpecsTab goodsItemTab={goodsItem.charsObject}></SpecsTab>
                    <PropsTab goodsItemTab={goodsItem.propsObject}></PropsTab>
                </div>
            </TextZone>
        </CardContainer>
    )
}

export default GoodsCard