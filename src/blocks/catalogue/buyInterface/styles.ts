import styled from "styled-components";
import StyledTitle from "../../../components/title/styles"
import {textBold, textSmall} from "../../../mixins";
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

const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const SmallPrice = styled.p`
    margin: 0;
    ${textSmall};
`

const GoodsList = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 0;
    width: 100%;
`



export {StyledForm, StyledFieldset, EmailInput, PriceContainer, SmallPrice, GoodsList}