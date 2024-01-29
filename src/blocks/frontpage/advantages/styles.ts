import styled from "styled-components";

const AdvantagesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-bottom: 65px;
`

const AdvantagesColumn = styled.ul`
    display: grid;
    grid-auto-flow: column;
    gap: 20px;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export {AdvantagesColumn, AdvantagesWrapper, ButtonContainer}