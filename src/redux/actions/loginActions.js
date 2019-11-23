import { MEMBER_ACTION_TYPE } from "../../constants/actionTypes";

export function login(loginUser) {
  return function(dispatch) {
    return dispatch({
      type: MEMBER_ACTION_TYPE.LOGIN_SUCCESS,
      loginUser
    });
  };
}

export function onFieldChange(loginUser, fieldName, value) {
  return {
    loginUser,
    fieldName,
    value
  };
}
