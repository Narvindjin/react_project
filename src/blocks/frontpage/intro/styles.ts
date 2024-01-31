import styled from "styled-components";
import {textNormal, blockMargin} from "../../../mixins";

const IntroWrapper = styled.div`
    display: flex;
    background-color: ${(props)=>props.theme.colorBlueGray};
    min-height: 600px;
    width: 100%;
    ${blockMargin};
`

const TextAreaContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
`

const TextContainer = styled.div`
    display: block;
    margin: auto auto auto 0;
    max-width: 540px;
`

const Text = styled.p`
    margin-bottom: 0;
    ${textNormal};
`

export {IntroWrapper, TextContainer, Text, TextAreaContainer}