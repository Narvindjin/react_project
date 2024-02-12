import styled from "styled-components";
import {textSmall} from "../../mixins";

const CardContainer = styled.article`
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 20px;
    min-height: 288px;
`

const TextZone = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const TabList = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 0;
    margin-bottom: 16px;
    padding: 0;
    list-style-type: none;
`

const TabItem = styled.li`
    display: flex;
`

const TabButton = styled.button<{$state:string}>`
    display: flex;
    width: fit-content;
    padding: 7px 11px 7px 11px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    ${textSmall};
    transition: background-color ${(props) => props.theme.transDefault}, color ${(props) => props.theme.transDefault};
    background-color: ${(props) => {
        if (props.$state === 'current') {
            return props.theme.colorDarkGreen;
        }
        return 'transparent'
    }};
    
    color: ${(props) => {
        if (props.$state === 'current') {
            return props.theme.colorWhite;
        }
        return props.theme.colorBlack;
    }};
`

const TabContent = styled.div<{$state:string}>`
    display: ${(props) => {
        if (props.$state === 'd-none') {
            return 'none';
        }
        return 'block'
    }};
    opacity: ${(props) => {
        if (props.$state !== 'current') {
            return 0;
        }
        return 1;
    }};
    transition: opacity 0.15s ease;
`

export {CardContainer, TabItem, TabList, TextZone, TabContent, TabButton}

