import { acceptedCreditCards } from "./validation-rules";

// Card Icons
export const DEFAULT_CARD_ICON = 'no-match';
export const INVALID_CARD_ICON = 'card-invalid';
export const UNKNOWN_CARD_ICON = 'card-unknown';

export const getCardTypeByValue = (userInput: string, apiData: any) => {
    return apiData.filter((ctype: any) => ctype.regExFormat?.test(userInput))[0];
}

export const cardFormatNumbers = (cardValue: string) => {
    return cardValue.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
}

export const removeSpaces = (value: string) => {
    return value.split(' ').join('');
}

export const cardPatternValidation = (cardNumber: string, cardType?: string ) => {
    switch(cardType) {
        case 'visa':
            return !!acceptedCreditCards['visa'].test(removeSpaces(cardNumber))
        case 'mastercard': 
            return !!acceptedCreditCards['mastercard'].test(removeSpaces(cardNumber))
        case 'jcb': 
            return !!acceptedCreditCards['jcb'].test(removeSpaces(cardNumber))
        case 'amex':
            return !!acceptedCreditCards['amex'].test(removeSpaces(cardNumber))
        default: 
            return false;
    }
}

export const cardValidation = (ccNumber: string, cardType?: string) => {

    let valid = false;
    const accepted = cardPatternValidation(ccNumber, cardType);

    // remove all non digit characters
    const value = ccNumber.replace(/\D/g, '');
    let sum = 0;
    let shouldDouble = false;
    // loop through values starting at the rightmost side
    for (let i = value.length - 1; i >= 0; i--) {
        var digit = parseInt(value.charAt(i));

        if (shouldDouble) {
        if ((digit *= 2) > 9) digit -= 9;
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }
    
    valid = (sum % 10) === 0;
    
    return {valid, accepted};
}

export const getImageMeta = (icon: string = DEFAULT_CARD_ICON, imgPath?: string, id?: string) => {
    const iconSrc = imgPath ? imgPath : `./assets/images/${icon}.svg`;
    return {
        src: iconSrc,
        id,
        alt: `${icon}`,
        classes: 'height-2',
        icon: imgPath ? false : true
    };
}