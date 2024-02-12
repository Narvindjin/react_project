import React from "react";
import {StyledDl, StyledDd, StyledDt, DescriptionContainer} from "./styles";
import { charInterface } from "../../../blocks/catalogue/goodsSlider/goodsInterface";

interface tab {
    goodsItemTab: charInterface
}

const SpecsTab = ({goodsItemTab}: React.PropsWithChildren<tab>) => {
    const constructTab = (tab:charInterface) => {
        for (const key in tab) {
            let name;
            switch (key) {
                case 'mass': 
                    name = "Масса: "
                    break
                case 'expiration':
                    name = "Срок годности: "
                    break
                case 'type':
                    name = "Порода "
                    break
                case 'fromAddress':
                    name = "Место происхождения "
            }
            return (<DescriptionContainer>
                <StyledDt>{name}</StyledDt>
                <StyledDd>{tab[key as keyof charInterface]}</StyledDd>
    </DescriptionContainer>)
        }
    }
    return (
        <StyledDl>
            {constructTab(goodsItemTab)}
        </StyledDl>
    )
}

export default SpecsTab