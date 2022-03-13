export type tplotOptions = {
    [key: string]: RegExp
}
export const cardIdentificationRegEx: tplotOptions = {
  visa: /^4/,
  master: /^(5[1-5]|677189)|^(222[1-9]|2[3-6]\d{2}|27[0-1]\d|2720)/,
  jcb: /^35/,
  amex: /^3[47]/
}

export const acceptedCreditCards: tplotOptions = {
  visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
  mastercard: /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
  amex: /^3[47][0-9]{13}$/,
  jcb: /^(?:2131|1800|35[0-9]{3})[0-9]{11}$/
};
