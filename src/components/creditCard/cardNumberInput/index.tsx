import { CardTypes } from '../../../generated/api/creditCard';
import CardImg, { CardImgDefaultProps } from '../cardImg';

export interface CardNumberInputDefaultProps {
    inputLabel: string;
    cardTypes: CardTypes;
    imgMeta: CardImgDefaultProps | undefined;
    defaultValue?: string;
    placeholderText?: string;
    error?: string | null;
    ariaLabel?: string;
    onChangeInputHandler?: (ev: any) => void;
    maxLength?: number;
    formattedValue?: string;
}

const CardNumberInput = (props: CardNumberInputDefaultProps) => {
    const {
        inputLabel,
        ariaLabel,
        placeholderText,
        imgMeta,
        onChangeInputHandler,
        error,
        maxLength,
        formattedValue,
    } = props;

    return (
        <>
            <div className="form-group">
                <label
                    htmlFor="creditCardNumberField"
                    className="sr-only text-success"
                >
                    {inputLabel}
                </label>
                <div className="input-group cc-field-container">
                    {imgMeta && (
                        <div className="input-group-prepend">
                            <div className="input-group-text border-0 bg-transparent">
                                <CardImg {...imgMeta} />
                            </div>
                        </div>
                    )}
                    <input
                        type="tel"
                        className="form-control border-0"
                        id="creditCardNumberField"
                        name="cardNumber"
                        aria-label={ariaLabel}
                        maxLength={maxLength}
                        placeholder={placeholderText}
                        required
                        autoComplete="off"
                        value={formattedValue}
                        onChange={onChangeInputHandler}
                    />
                </div>
            </div>
            {error && <p className="text-danger text-sm mt-2 fs-6 field-error">{error}</p>}
        </>
    );
};
export default CardNumberInput;
