import styled from "styled-components";
import {textSmall} from "../../mixins";

const StyledInput = styled.input`
    border: 1px solid rgba(0, 0, 0, 0.10);
    background: ${(props) => props.theme.colorWhite};
    padding: 12px;
    width: 100%;
    ${textSmall};
    
    &::placeholder {
        opacity: 0.5;
    }
`

export {StyledInput}