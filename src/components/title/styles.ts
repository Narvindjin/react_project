import styled from "styled-components";

const StyledTitle = styled.h1<{margin:number, level:1|2|3|4}>`
    margin-top: 0;
    margin-bottom: ${(props)=>props.margin}px;
    font-weight: 700;
    line-height: 1.15;
    font-size: ${(props)=> {
        switch (props.level) {
            case 1:
                return 44;
            case 2:
                return 36;
            case 3:
                return 32;
            case 4:
                return 24;
            default:
                return 24;
        } 
    }}px
    color: ${(props)=>props.theme.colorBlack};
`

export default StyledTitle