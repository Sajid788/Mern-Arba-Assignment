import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from "./authentication/reducer";
import { productReducer } from './Product/reducer';
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  userReducer,
  productReducer
});
export const store = legacy_createStore(
  rootReducer,
  enhancer(applyMiddleware(thunk)),
);