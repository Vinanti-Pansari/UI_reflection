import AsyncStorage from '@react-native-community/async-storage';
import Constant from '../utility/constant';
import { resetStack } from '../utility/handleNavigation';
import ActionType from '../utility/actionTypes';



export function authorization() {
    return async (dispatch) => {
        AsyncStorage.getItem(Constant.ASYNC_KEYS.USER_EMAIL)
            .then (data => {
            console.log('data', data)
            if (data !== null) {
                dispatch({
                    type: ActionType.USER_LOGGED_IN,
                    loggedInPayload: data
                });
                resetStack('TabNavigator')
            } else {
                dispatch({
                    type: ActionType.USER_LOGGED_OUT
                });
                resetStack('LoginScreen')
            }
        })
    }
};

export default function reducer(state = {
    fetching: false,
    loggedInPayload: null,
}, action) {
    switch (action.type) {
        case ActionType.USER_LOGGED_IN: {
            return {
                ...state,
                loggedInPayload: action.loggedInPayload
            };
        }
        case ActionType.USER_LOGGED_OUT: {
            return {
                ...state,
            };
        }
        default: {
            return state;
        }
    }
}
