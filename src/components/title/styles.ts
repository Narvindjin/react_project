import styled from "styled-components";

const StyledTitle = styled.h1<{margin:number, level:1|2|3|4, center:boolean|undefined}>`
    margin-top: 0;
    margin-bottom: ${(props)=>props.margin}px;
    font-weight: 700;
    line-height: 1.15;
    text-align: ${(props) => {
        if (props.center) {
            return 'center'
        }
        return 'start'
    }};
    font-size: ${(props)=> {
        switch (props.level) {
            case 1:
                return 4.4;
            case 2:
                return 3.6;
            case 3:
                return 3.2;
            case 4:
                return 2.4;
            default:
                return 2.4;
        } 
    }}rem;
    color: ${(props)=>props.theme.colorBlack};
`

export default StyledTitle