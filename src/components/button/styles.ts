import styled from "styled-components";
import {textBold} from "../../mixins";

const StyledButton = styled.button`
    display: flex;
    flex-direction: row;
    min-width: 260px;
    min-height: 60px;
    padding-left: 24px;
    padding-right: 24px;
    ${textBold};
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colorYellow};
    color: ${(props) => props.theme.colorWhite};
`

export default StyledButton