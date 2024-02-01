import styled from "styled-components";
import {textSmallBold, textSmall} from "../../../mixins";

const StyledDl = styled.dl`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const DescriptionContainer = styled.div`
    display: block;
`

const StyledDt = styled.dt`
    margin: 0;
    display: inline;
    ${textSmallBold};
`

const StyledDd = styled.dd`
    margin: 0;
    display: inline;
    ${textSmall};
`

export {StyledDt, StyledDd, StyledDl, DescriptionContainer}