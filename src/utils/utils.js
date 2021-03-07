const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
const percentRegex = /^\d+(\.\d+)?%$/;

export const isPercentage = input => percentRegex.test(input);
export const isEmailValid = email => emailRegex.test(email);
export const isValueEmpty = value => !value;