import styled from "styled-components";


const StyledHeader = styled.header`
    box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04), 0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
`

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
    gap: 40px;
    padding-top: 10px;
    padding-bottom: 10px;
    align-items: center;
`

export {StyledHeader, StyledContainer}