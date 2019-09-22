/**
 * Entry point for the reducers that will be used in the component.
 */
import { combineReducers } from 'redux';
import { AppNavigator } from './navigators/Root';
import fetchVideoList from './modules/fetchVideoList';
/**
 *  Simply return the original `state` if `nextState` is null or undefined.
 * @param state
 * @param action
 * @returns {*}
 */
function nav(state, action) {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
}

/**
 * Method contains combineReducer for combining reducers used in the components.
 * @type {Reducer<S>}
 */
const AppReducer = combineReducers({
    nav,
    fetchVideoList
});

export default AppReducer;
