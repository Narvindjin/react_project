import React from 'react';
import {TabList, TabItem, TextZone, CardContainer, TabContent, TabButton} from "./styles";
import TitleComponent from "../title/title";
import SpecsTab from "./specificsTab/specsTab";
import PropsTab from './specificsTab/propsTab';
import AttrsTab from "./descTab/attrsTab";
import {goodsInterface} from "../../blocks/catalogue/goodsSlider/goodsInterface";
import {createTabSwitch} from "../tabHandler/tabHandler";

interface goodsProp {
    goodsItem: goodsInterface
}

const GoodsCard = ({goodsItem}:React.PropsWithChildren<goodsProp>) => {
    const tabSwitchObject = createTabSwitch();
    const tabsKeys = Object.keys(goodsItem.tabs);
    const tabsNames = ['Описание', 'Характеристики', 'Свойства'];
    let tabCounter = -1;
    return (
        <CardContainer>
            <TextZone>
                <TitleComponent margin={16} styleLevel={4} markupLevel={2}>{goodsItem.name}</TitleComponent>
                <TabList>
                    {
                        tabsKeys.map(() => {
                            tabCounter++;
                            const currentCounter = tabCounter
                            return (
                                <TabItem key={tabCounter}>
                                    <TabButton $state={tabSwitchObject.tabIndexForButton === tabCounter? 'current': 'not-current'} onClick={(() => tabSwitchObject.switchToTab(currentCounter))} disabled={tabSwitchObject.disabled}>{tabsNames[tabCounter]}</TabButton>
                                </TabItem>
                            )
                        })
                    }
                </TabList>
                <div>
                    <TabContent $state={tabSwitchObject.tabIndex === 0? tabSwitchObject.currentState: 'd-none'}>
                        <AttrsTab goodsItem={goodsItem.tabs.mainObject}></AttrsTab>
                    </TabContent>
                    <TabContent $state={tabSwitchObject.tabIndex === 1? tabSwitchObject.currentState: 'd-none'}>
                        <SpecsTab goodsItemTab={goodsItem.tabs.charsObject}></SpecsTab>
                    </TabContent>
                    <TabContent $state={tabSwitchObject.tabIndex === 2? tabSwitchObject.currentState: 'd-none'} >
                        <PropsTab goodsItemTab={goodsItem.tabs.propsObject}></PropsTab>
                    </TabContent>
                </div>
            </TextZone>
        </CardContainer>
    )
}

export default GoodsCard