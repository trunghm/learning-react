import { APP_ACTION } from "../../constants/actionTypes";
import {
  showLoading as showLoadingBar,
  hideLoading as hideLoadingBar
} from "react-redux-loading-bar";

export function showLoading() {
  return dispatch => {
    dispatch(showLoadingBar());
    dispatch({
      type: APP_ACTION.SHOW_LOADING
    });
  };
}

export function hideLoading() {
  return dispatch => {
    dispatch({
      type: APP_ACTION.HIDE_LOADING
    });
    dispatch(hideLoadingBar());
  };
}

export function setHeaderText(text) {
  return dispatch => {
    dispatch({
      type: APP_ACTION.SET_HEADER_TEXT,
      headerText: text
    });
  };
}
