import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 0;
    padding: 0;
    list-style-type: none;
    height: 100%;
    width: 100%;

    & swiper-container {
        height: 768px;
    }
`

export {StyledContainer}