import styled from "styled-components";
import {textNormal} from "../../mixins";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 40px;
    padding-top: 18px;
    padding-bottom: 18px;
    align-items: center;
`

const StyledDisclaimer = styled.p`
    display: block;
    ${textNormal};
`

export {StyledDisclaimer, StyledContainer}

