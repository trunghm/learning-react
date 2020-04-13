import login, {
  loginSuccess,
  loginFieldChangeSuccess,
  loadLoginMemberDetailSuccess
} from "./loginReducer";
import initialState from "../../configs/redux/initialState";

it("should handle inital state", () => {
  expect(login(initialState.loginReducer, {})).toEqual({
    userName: "",
    password: "",
    rememberMe: "",
    necessaryDataIsProvidedToSubmitLogin: false,
    isLoggedIn: false
  });
});
