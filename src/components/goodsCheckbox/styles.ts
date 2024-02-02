import styled from "styled-components";
import {textNormal} from "../../mixins";

const StyledInputContainer = styled.div`
    display: flex;
    width: 100%;
    position: absolute;
    flex-direction: row;
    padding: 15px 0 15px 0;
    
    label {
        ${textNormal};
        margin-right: 40px;
        
        &::after {
            content: '';
            background: ${(props) => props.theme.colorWhite};
            border: 1px solid rgba(0, 0, 0, 0.1);
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            margin-top: auto;
            margin-bottom: auto;
            width: 24px;
            height: 24px;
        }
        
        &::before {
            content: '';
            display: none;
            position: absolute;
            right: 8px;
            top: 0;
            bottom: 0;
            margin-top: auto;
            margin-bottom: auto;
            width: 16px;
            height: 18px;
            padding-bottom: 2px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3E%3Cg clip-path='url(%23a)'%3E%3Cpath fill='%23fff' d='M15.766 2.36a.8.8 0 0 0-1.132 0L5.05 11.943 1.366 8.26A.8.8 0 0 0 .234 9.39l4.25 4.25a.8.8 0 0 0 1.132 0l10.15-10.15a.8.8 0 0 0 0-1.132Z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 0h16v16H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
        }
    }
    
    input {
        &:checked + label::after {
            background: ${(props) => props.theme.colorOrange};
        }
        
        &:checked + label::before {
            display: block;
        }
    }
`

export {StyledInputContainer}