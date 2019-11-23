import { APP_ACTION_TYPE } from "../../constants/actionTypes";
import {
  showLoading as showLoadingBar,
  hideLoading as hideLoadingBar
} from "react-redux-loading-bar";

export function showLoading() {
  return dispatch => {
    dispatch(showLoadingBar());
    dispatch({
      type: APP_ACTION_TYPE.SHOW_LOADING
    });
  };
}

export function hideLoading() {
  return dispatch => {
    dispatch({
      type: APP_ACTION_TYPE.HIDE_LOADING
    });
    dispatch(hideLoadingBar());
  };
}

export function setHeaderText(text) {
  return dispatch => {
    dispatch({
      type: APP_ACTION_TYPE.SET_HEADER_TEXT,
      headerText: text
    });
  };
}
