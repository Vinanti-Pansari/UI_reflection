import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import combineReducers from './reducer';
import { middlewareNavigator } from './navigators/Root';

const middleware = [thunkMiddleware];

// export const store = createStore(combineReducers,
//     applyMiddleware(...middleware, middlewareNavigator)
// );


export const store = createStore(combineReducers, applyMiddleware(...middleware));