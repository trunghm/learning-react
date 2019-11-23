import { MEMBER_ACTION } from "../../constants/actionTypes";

export function login(loginUser) {
  return function(dispatch) {
    return dispatch({
      type: MEMBER_ACTION.LOGIN_SUCCESS,
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
