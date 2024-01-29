import styled from "styled-components";
import {textNormal, blockMargin} from "../../../mixins";

const IntroWrapper = styled.div`
    display: flex;
    background-color: ${(props)=>props.theme.colorBlueGray};
    min-height: 600px;
    width: 100%;
    ${blockMargin};
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

export {IntroWrapper, TextContainer, Text}