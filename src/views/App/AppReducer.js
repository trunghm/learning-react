import { createReducer } from '@reduxjs/toolkit';
import { APP_ACTION_TYPE, LOCALE_ACTION_TYPE } from "../../constants/actionTypes";
import initialState from "../../utils/redux/initialState";

// IMPORTANT: Note that with @reduxjs/toolkit, you can change state directly.

const appReducer = createReducer(initialState.app, {
  [APP_ACTION_TYPE.SHOW_LOADING]: (state) => { state.loading = true },
  [APP_ACTION_TYPE.HIDE_LOADING]: (state) => { state.loading = false },
  [LOCALE_ACTION_TYPE.CHANGE_LOCATE_SUCCESS]: (state, action) => { state.locale = action.value },
});

export default appReducer;