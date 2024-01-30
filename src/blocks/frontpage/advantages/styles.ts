import styled from "styled-components";

const AdvantagesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-bottom: 65px;
`

const AdvantagesColumn = styled.ul`
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    padding-left: 0;
    list-style-type: none;
    margin: 0;
    width: 100%;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export {AdvantagesColumn, AdvantagesWrapper, ButtonContainer}