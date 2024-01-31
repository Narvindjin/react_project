import styled from "styled-components";
import StyledTitle from "../../../components/title/styles"
import {textBold} from "../../../mixins";
import {StyledInput} from "../../../components/input/styles";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    gap: 18px;
`

const StyledFieldset = styled.fieldset`
    padding: 25px 20px 20px 20px;
    border: 1px solid rgba(0, 0, 0, 0.10);
    box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04), 0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: column;
    ${StyledTitle} {
        display: inline;
        ${textBold};
    }
`

const EmailInput = styled(StyledInput)`
    margin-bottom: 20px;
`

const priceContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const smallPrice = styled.p`
    
`



export {StyledForm, StyledFieldset, EmailInput}