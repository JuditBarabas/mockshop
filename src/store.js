import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";

const logger = createLogger();
const composedEnhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware, logger)
);

const store = createStore(rootReducer, composedEnhancer);

export default store;
