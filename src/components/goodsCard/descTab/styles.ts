import styled from "styled-components";
import {textSmall, textSmallBold} from "../../../mixins";

const AttrsText = styled.div`
    margin-bottom: 14px;
    ${textSmall};
    
    & p {
        &:first-of-type {
            margin-top: 0;
        }
        &:last-of-type {
            margin-bottom: 0;
        }
    }
`

const PriceWeightContainer = styled.div`
    width: fit-content;
    display: flex;
    padding: 4px 8px 4px 8px;
    background-color: ${(props) => props.theme.colorBlueGray};
    
    & span {
        ${textSmallBold};
    }
`

export {AttrsText, PriceWeightContainer}