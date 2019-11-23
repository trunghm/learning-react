import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import localeReducer from "./localeReducer";
import { connectRouter } from "connected-react-router";

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    loginReducer,
    localeReducer
  });

export default rootReducer;
