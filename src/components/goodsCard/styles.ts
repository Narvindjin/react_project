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
    width: fit-content;
    padding: 7px 11px 7px 11px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    ${textSmall};
    
    &.current {
        background-color: ${(props) => props.theme.colorDarkGreen};
        color: ${(props) => props.theme.colorWhite}
    }
`

export {CardContainer, TabItem, TabList, TextZone}

