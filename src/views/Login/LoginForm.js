import React from "react";
import { func } from "prop-types";
import CustomTextInput from "../../components/CustomTextInput/CustomTextInput";
import { loginUserType } from "../../types";
import { i18N } from "../../utils/intl";

const LoginForm = ({ loginUser, handleLogin, handleFieldChange }) => (
  <div>
    <h2>Login Form</h2>
    <table>
      <tbody>
      <tr>
        <td>
          <label htmlFor="userName">{i18N.t("login.username_label")}</label>
        </td>
        <td>
          <CustomTextInput
            onChange={handleFieldChange}
            name="userName"
            placeholder={i18N.t("login.username_placeholder_text")}
            value={loginUser.userName}
          />
        </td>
      </tr>
      <tr>
        <td>
          <label htmlFor="password">{i18N.t("login.password_label")}</label>
        </td>
        <td>
          <CustomTextInput
            onChange={handleFieldChange}
            name="password"
            placeholder={i18N.t("login.password_placeholder_text")}
            value={loginUser.password}
          />
        </td>
      </tr>
      </tbody>
    </table>

    <hr/>

    <input type="submit" value="Save" onClick={handleLogin}/>
  </div>
);

LoginForm.propTypes = {
  handleLogin: func.isRequired,
  handleFieldChange: func.isRequired,
  loginUser: loginUserType.isRequired
};

export default LoginForm;
