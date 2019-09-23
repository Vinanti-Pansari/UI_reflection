const validation = require("validate.js");
import Constant from './constant';

export function validate(fieldName, value) {
    const constraints = {
        email: {
            presence: {
                allowEmpty: false,
                message: `^${Constant.EMPTY_EMAIL}`
            }, format: {
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: `^${Constant.INVALID_EMAIL_ADDRESS}`,
            }
        },
        password: {
            presence: {
                allowEmpty: false,
                message: `^${Constant.EMPTY_PASSWORD}`
            },
            length: {
                minimum: 6,
                message: `^${Constant.INVALID_PASSWORD_LENGTH}`,
            }
        },
        checkEmpty: {
            presence: {
                allowEmpty: false,
                value:{value},
                message: `${Constant.BLANK_INPUT}`
            },
        },
        phoneNumber: {
            presence: {
                allowEmpty: false,
                message: `^${Constant.EMPTY_PHONE_NUMBER}`
            },
        },
    };


    const formValues = {};
    formValues[fieldName] = value;
    const formFields = {};
    formFields[fieldName] = constraints[fieldName];


    const result = validation(value, formFields);

    if (result) {
        const data = result[fieldName][0];
        return data;
    }
    return null;
}

