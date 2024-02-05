import React from 'react';
import {StyledInputContainer} from "./styles";

interface Required {
    required?: boolean
}

interface Checkbox {
    id: string,
    name: string,
    required?: Required,
    onChange?: (arg0:number)=>void,
    price: number,
}
const GoodsCheckbox = ({id, onChange, name, required, price, children}:React.PropsWithChildren<Checkbox>) => {
    return (
        <StyledInputContainer>
            <input type={"checkbox"} name={name} id={id} {...required} className={'visually-hidden'} onChange={(evt) => {
                if (onChange) {
                    if (evt.target.checked) {
                        onChange(price);
                    } else {
                        onChange(-price);
                    }
                }
            }}/>
            <label htmlFor={id}>{children}</label>
        </StyledInputContainer>
    )
}

export default GoodsCheckbox