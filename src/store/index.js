import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import thunk from "redux-thunk";
import { ALLOW_REDUX_DEVTOOLS_EXTENSION } from "../constants/env";
import { history } from "../routes/history";
import { createRootReducer } from "./root-reducer";

const reduxMiddleware = applyMiddleware(thunk, routerMiddleware(history));
const enhancers = ALLOW_REDUX_DEVTOOLS_EXTENSION
  ? composeWithDevTools(reduxMiddleware)
  : reduxMiddleware;

const configureStore = (preloadedState = {}) => {
  return createStore(createRootReducer(history), preloadedState, enhancers);
};

const store = configureStore();

export { store };
