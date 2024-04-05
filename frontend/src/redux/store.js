import {
    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore,
  } from 'redux';
  import thunk from 'redux-thunk';
  import { authReducer } from './authentication/reducer';
  const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const rootReducer = combineReducers({
    authReducer,
  });
  export const store = legacy_createStore(
    rootReducer,
    enhancer(applyMiddleware(thunk)),
  );