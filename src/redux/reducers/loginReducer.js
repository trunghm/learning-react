import { MEMBER_ACTION } from "../../constants/actionTypes";
import { necessaryDataIsProvidedToSubmitLogin } from "../../utils/loginSubmit";
import objectAssign from "object-assign";
import initialState from "./initialState";

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.

export default function loginReducer(state = initialState.loginUser, action) {
  let newState;

  switch (action.type) {
    case MEMBER_ACTION.LOGIN_SUCCESS:
      return objectAssign({}, state, { isLoggedIn: true });

    case MEMBER_ACTION.LOGIN_FIELD_CHANGE_SUCCESS:
      newState = objectAssign({}, state);
      newState[action.fieldName] = action.value;
      newState.necessaryDataIsProvidedToSubmitLogin = necessaryDataIsProvidedToSubmitLogin(
        newState
      );
      newState.dateModified = action.dateModified;

      if (newState.necessaryDataIsProvidedToSubmitLogin) {
        newState.canLogin = true;
      }

      return newState;
    default:
      return state;
  }
}
