import styled from "styled-components";
import {textSmall, textBold, textNormal} from "../../../../mixins";

const StyledItem = styled.li<{$positive:boolean}>`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    background-color: ${(props) => {
        if (props.$positive) {
            return props.theme.colorLightGreen;
        }
        return  props.theme.colorPink;
    }};
`

const StyledUpperDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    gap: 20px;
    align-items: center;
`

const StyledUpperTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const StyledTag = styled.div<{$positive:boolean}>`
    display: flex;
    padding: 4px 10px 4px 10px;
    ${textSmall};
    color: ${(props) => props.theme.colorWhite};
    background-color: ${(props) => {
        if (props.$positive) {
            return props.theme.colorDarkGreen;
        }
        return  props.theme.colorOrange;
    }};
`

const StyledAdvantageTitle = styled.h3`
    ${textBold};
    margin-top: 0;
    margin-bottom: 0;
`

const StyledText = styled.p`
    ${textNormal};
    margin: 0;
`

export {StyledText, StyledItem, StyledTag, StyledUpperDiv, StyledUpperTextContainer, StyledAdvantageTitle}