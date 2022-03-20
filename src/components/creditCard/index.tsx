import { ChangeEvent, useState } from 'react';
import { CardTypes } from '../../generated/api/creditCard';
import {
    cardFormatNumbers,
    cardValidation,
    getCardTypeByValue,
    getImageMeta,
    INVALID_CARD_ICON,
    removeSpaces,
    UNKNOWN_CARD_ICON,
} from '../../utils/card';
import useFetchData from '../../utils/hooks/useFetchData';
import { CardImgDefaultProps } from './cardImg';
import CardNumberInput from './cardNumberInput';

export interface CreditCardDefaultProps {
    cardTypes: CardTypes;
    cardNumberAriaLabel?: string;
    cvvAriaLabel?: string;
    submitButtonLabel?: string;
}

export interface CreditCardFormData {
    cardNumber: string;
    cvv?: string;
}
const CreditCard = (props: CreditCardDefaultProps) => {
    const { apiData, isApiDataLoading, apiError } = useFetchData(
        'https://sumup-op-hiring-test.s3.eu-west-1.amazonaws.com/api-mock/cards-dictionary.json?request_id=1645556315'
    );
    // Form Values
    const [creditCardForm, setCreditCardForm] = useState({ cardNumber: '' });
    const [formatCardNumber, setFormatCardNumber] = useState<string>('');

    // Update Card Icon on user input
    const updateImgMeta = (cardInfo?: any) => {
        if (cardInfo) {
            setImgMeta(getImageMeta(undefined, cardInfo.icon, cardInfo.id));
        } else {
            // Set Default Card Icon and clear field errors
            setImgMeta(getImageMeta())
            setFormErrors(null)
        }
    };

    // Form Errors
    const [formErrors, setFormErrors] = useState<CreditCardFormData | null>();

    const [imgMeta, setImgMeta] = useState<CardImgDefaultProps>(getImageMeta());

    // Labels
    const buttonLabel = props.submitButtonLabel || 'save credit card';
    const cardNumberAriaLabel =
        props.cardNumberAriaLabel || 'Credit card number';

    const validateCard = (ccNumber: string) => {
        let errors = {} as CreditCardFormData;

        if (!ccNumber) {
            return false;
        }

        const { valid, accepted } = cardValidation(ccNumber, imgMeta?.id);

        if (!valid) {
            errors.cardNumber = 'Not a valid card number!';
            setImgMeta(getImageMeta(INVALID_CARD_ICON));
        }
        if (!accepted) {
            errors.cardNumber = 'Card number not accepted!';
            setImgMeta(getImageMeta(UNKNOWN_CARD_ICON));
        }
        setFormErrors(errors);
        return valid && accepted;
    };

    const onChangeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
        setCreditCardForm((values) => ({
            ...values,
            [ev.target.name]: removeSpaces(ev.target.value),
        }));

        updateImgMeta(getCardTypeByValue(ev.target.value, apiData));
        setFormatCardNumber(cardFormatNumbers(ev.target.value));
    };

    const onFormSubmitHandler = (ev: any) => {
        ev.preventDefault();
        //  call validation handler
        validateCard(creditCardForm.cardNumber);
    };

    return (
        <>
            {isApiDataLoading && <p>Loading Payment Channels...</p>}
            {!isApiDataLoading && (
                <form noValidate onSubmit={onFormSubmitHandler}>
                    <CardNumberInput
                        inputLabel="Card number"
                        placeholderText="0000 0000 0000 0000"
                        cardTypes={props.cardTypes}
                        imgMeta={imgMeta}
                        error={formErrors && formErrors.cardNumber}
                        onChangeInputHandler={onChangeHandler}
                        ariaLabel={cardNumberAriaLabel}
                        maxLength={19}
                        formattedValue={formatCardNumber}
                    />
                    <div className="form-group mt-4">
                        <input
                            value={buttonLabel}
                            type="submit"
                            className="btn btn-success btn-sm form-control text-uppercase"
                        />
                    </div>
                </form>
            )}
            {apiError && <p>{apiError}</p>}
        </>
    );
};

export default CreditCard;
