import React from 'react';
import {StyledInputContainer} from "./styles";

interface Checkbox {
    id: string,
    name: string,
    required? : boolean
}
const GoodsCheckbox = ({id, name, required, children}:React.PropsWithChildren<Checkbox>) => {
    return (
        <StyledInputContainer>
            <input type={"checkbox"} name={name} id={id} {required?'required':null} className={'visually-hidden'} ></input>
            <label htmlFor={id}>{children}</label>
        </StyledInputContainer>
    )
}

export default GoodsCheckbox