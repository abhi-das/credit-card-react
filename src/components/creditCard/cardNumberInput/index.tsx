import { CardTypes } from "../../../generated/api/creditCard";
import CardImg, { CardImgDefaultProps } from "../cardImg";

export interface CardNumberInputDefaultProps {
    inputLabel: string;
    cardTypes: CardTypes;
    imgMeta: CardImgDefaultProps | undefined,
    defaultValue?: string;
    placeholderText?: string;
    error?: string | null;
    ariaLabel?: string;
    onChangeInputHandler?: (ev: any) => void;
    maxLength?: number;
    formattedValue?: string;
}

const CardNumberInput = (props: CardNumberInputDefaultProps) => {

    const { inputLabel, ariaLabel, placeholderText, imgMeta, 
        onChangeInputHandler, error, maxLength, formattedValue } = props;

    return <>
        <div className="form-group"> 
            <label htmlFor="creditCardNumberField" className="sr-only text-muted">{ inputLabel }</label> 
            <div className="input-group">
                {imgMeta && <div className="input-group-prepend">
                    <div className="input-group-text"><CardImg {...imgMeta} /></div>
                </div>}
                <input type="tel" 
                    className="form-control" 
                    id="creditCardNumberField" 
                    name="cardNumber"
                    aria-label={ariaLabel}
                    maxLength={maxLength}
                    placeholder={placeholderText} required 
                    autoComplete="off"
                    value={formattedValue}
                    onChange={onChangeInputHandler}/>
            </div>
        </div>
        { error && (
            <p className="text-danger text-sm mt-2 fs-6">{error}</p>
        )}
    </>
}
export default CardNumberInput;