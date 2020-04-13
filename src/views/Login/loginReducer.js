import { createSlice } from "@reduxjs/toolkit";
import initialState from "../../configs/redux/initialState";
import { loginSubmit } from "../../utils";

const loginReducer = createSlice({
  name: "login",
  initialState: initialState.loginReducer,
  reducers: {
    loginSuccess: state => {
      state.isLoggedIn = true;
    },
    loginFieldChangeSuccess: (state, action) => {
      const { fieldName, value, dateModified } = action.payload;
      state[fieldName] = value;
      state.dateModified = dateModified;
      state.necessaryDataIsProvidedToSubmitLogin = loginSubmit.necessaryDataIsProvidedToSubmitLogin(
        state
      );
      if (state.necessaryDataIsProvidedToSubmitLogin) {
        state.canLogin = true;
      }
    },
    loadLoginMemberDetailSuccess: (state, action) => {
      const { detail } = action.payload;
      if (detail === null) {
        state.isLoggedIn = false;
      } else {
        state.isLoggedIn = true;
      }
    }
  }
});

export const {
  loginSuccess,
  loginFieldChangeSuccess,
  loadLoginMemberDetailSuccess
} = loginReducer.actions;

export default loginReducer.reducer;
