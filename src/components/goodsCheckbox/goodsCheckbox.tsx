import React, {ChangeEvent} from 'react';
import {StyledInputContainer} from "./styles";



interface Checkbox {
    id: string | number,
    name: string,
    required?: boolean,
    onChange?: (evt: (null|ChangeEvent))=>void,
    price: number,
}
const GoodsCheckbox = ({id, onChange, name, required, children}:React.PropsWithChildren<Checkbox>) => {
    const stringId = '' + id;
    return (
        <StyledInputContainer>
            <input type={"checkbox"} name={name} id={stringId} required={required? required: false} className={'visually-hidden'} onChange={onChange}/>
            <label htmlFor={stringId}>{children}</label>
        </StyledInputContainer>
    )
}

export default GoodsCheckbox