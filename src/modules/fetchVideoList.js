import Axios from 'axios';
//import { fetchErrorMessage } from '../utility/helperComponent';
import Config from '../utility/config';
import ActionType from '../utility/actionTypes';
//import Constant from '../utility/constants';

export function fetchVideoList() {
    return (dispatch) => new Promise((resolve, reject) => {
            dispatch({
                error: null,
                videoListPayload: null,
                type: ActionType.REQUEST_TO_GET_VIDEO_LIST
            });
            Axios.get(Config.VIDEO_LIST_URL)
                .then((response) => {
                    console.log('response', response);
                        dispatch({
                            error: null,
                            videoListPayload: response.data.videos,
                            type: ActionType.GET_VIDEO_LIST_SUCCESS
                        });
                })
                .catch((error) => {
                    console.log('error', error);
                    dispatch({
                        error: error,
                        videoListPayload: null,
                        type: ActionType.GET_VIDEO_LIST_ERROR
                    });
                  //  reject(error);
                });
        });
}


export default function reducer(state = {
    fetching: false,
    videoListPayload: []
}, action) {
    switch (action.type) {
        case ActionType.REQUEST_TO_GET_VIDEO_LIST: {
            return {
                ...state,
                fetching: true,
            };
        }
        case ActionType.GET_VIDEO_LIST_SUCCESS: {
            return {
                ...state,
                fetching: false,
                videoListPayload: action.videoListPayload,
            };
        }
        case ActionType.GET_VIDEO_LIST_ERROR: {
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