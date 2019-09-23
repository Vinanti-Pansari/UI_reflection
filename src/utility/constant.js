import PlaceHolder from '../utility/placeHolder';

export default {
    EMPTY_EMAIL: `Please enter ${PlaceHolder.EMAIL}`,
    INVALID_EMAIL_ADDRESS: `Please enter a valid ${PlaceHolder.EMAIL}`,
    EMPTY_PASSWORD: `Please enter ${PlaceHolder.PASSWORD}`,
    INVALID_PASSWORD_LENGTH: `Please enter ${PlaceHolder.PASSWORD} of minimum 6 characters`,
    PASSWORDS_DONT_MATCH: `Both the ${PlaceHolder.PASSWORD}s don't match`,
    INVALID_PHONE_NUMBER: `Please enter a valid Phone Number`,
    BLANK_INPUT: 'Please enter all details',
    ASYNC_KEYS: {
        USER_EMAIL: 'USER_EMAIL'
    },
    LOGIN_FAILED: 'Please enter valid Email address or Password',
    UNHANDLED_CONDITION: 'Something went wrong. Please try again later',
};
