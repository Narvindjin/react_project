import React from 'react';
import {TabList, TabItem, TextZone, CardContainer} from "./styles";
import TitleComponent from "../title/title";
import SpecsTab from "./specificsTab/specsTab";
import AttrsTab from "./descTab/attrsTab";

const GoodsCard = () => {
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
                    <AttrsTab></AttrsTab>
                    <SpecsTab></SpecsTab>
                    <SpecsTab></SpecsTab>
                </div>
            </TextZone>
        </CardContainer>
    )
}

export default GoodsCard