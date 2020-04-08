import { combineReducers } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";
import { reducer as toastrReducer } from "react-redux-toastr";
import appReducer from "../../views/App/AppReducer";
import loginReducer from "../../views/Login/loginReducer";

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    toastr: toastrReducer,
    appReducer,
    loginReducer, 
  });

export default rootReducer;
