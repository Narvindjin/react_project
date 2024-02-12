import React from 'react';
import {StyledInputContainer} from "./styles";

interface Required {
    required?: boolean
}

interface Checkbox {
    id: string | number,
    name: string,
    required?: Required,
    onChange?: (arg0:number)=>void,
    price: number,
}
const GoodsCheckbox = ({id, onChange, name, required, price, children}:React.PropsWithChildren<Checkbox>) => {
    const stringId = '' + id;
    return (
        <StyledInputContainer>
            <input type={"checkbox"} name={name} id={stringId} {...required} className={'visually-hidden'} onChange={(evt) => {
                if (onChange) {
                    if (evt.target.checked) {
                        onChange(price);
                    } else {
                        onChange(-price);
                    }
                }
            }}/>
            <label htmlFor={stringId}>{children}</label>
        </StyledInputContainer>
    )
}

export default GoodsCheckbox