import Constants from '../utility/constant';
import ActionType from '../utility/actionTypes';
import DataOptions from '../utility/dataOptions';

export function signIn(data) {
    return (dispatch) => new Promise((resolve, reject) => {
        console.log('data', data, data.email.trim() === DataOptions.VALID_EMAIL && data.password === DataOptions.VALID_PASSWORD)
        dispatch({
            error: null,
            signInPayload: null,
            type: ActionType.SIGN_IN_REQUEST
        });
        if(data.email.trim() === DataOptions.VALID_EMAIL && data.password === DataOptions.VALID_PASSWORD){
                dispatch({
                    error: null,
                    signInPayload: data.email,
                    type: ActionType.SIGN_IN_SUCCESS
                });
            }
            else {
                dispatch({
                    error: Constants.LOGIN_FAILED,
                    signInPayload: null,
                    type: ActionType.SIGN_IN_FAIL
                });
            }
    });
}


export default function reducer(state = {
    fetching: false,
    signInPayload: null
}, action) {
    console.log('action', action);
    switch (action.type) {
        case ActionType.SIGN_IN_REQUEST: {
            return {
                ...state,
                fetching: true,
            };
        }
        case ActionType.SIGN_IN_SUCCESS: {
            return {
                ...state,
                fetching: false,
                signInPayload: action.signInPayload,
            };
        }
        case ActionType.SIGN_IN_FAIL: {
            return {
                ...state,
                fetching: false,
                //error: action.error,
            };
        }
        default: {
            return state;
        }
    }
}