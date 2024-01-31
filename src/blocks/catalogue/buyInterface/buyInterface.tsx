import {StyledFieldset, StyledForm, EmailInput} from "./styles";
import TitleComponent from "../../../components/title/title";

const BuyInterface = () => {
    return (
        <StyledForm>
            <StyledFieldset>
                <TitleComponent as={'legend'} margin={12} styleLevel={1} markupLevel={false}>Выберите продукты</TitleComponent>
            </StyledFieldset>
            <StyledFieldset>
                <TitleComponent as={'legend'} margin={24} styleLevel={1} markupLevel={false}>Сделать заказ</TitleComponent>
                <EmailInput placeholder={'Введите адрес доставки'} required={true} type={"email"}></EmailInput>
            </StyledFieldset>
        </StyledForm>
    )
}

export default BuyInterface