import ActionType from '../utility/actionTypes';


export function errorHandler(error, title) {
    return dispatch => {
        if (error) {
            dispatch({
                type: ActionType.ADD_ERROR_MESSAGE,
                title,
                error
            });
        } else {
            dispatch({
                type: ActionType.CLEAR_ERROR_MESSAGE,
            });
        }
    };
}

export default function reducer(state = {
    error: null
}, action) {
    switch (action.type) {
        case ActionType.ADD_ERROR_MESSAGE: {
            return {
                ...state,
                error: action.error,
                title: action.title
            };
        }
        case ActionType.CLEAR_ERROR_MESSAGE: {
            return {
                ...state,
                error: null,
                title: null
            };
        }
        default: {
            return state;
        }
    }
}
