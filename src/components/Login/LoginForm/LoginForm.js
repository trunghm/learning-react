import React from "react";
import { CustomTextInput } from "../../common";
import { loginUserType } from "../../../types";
import { i18N } from "../../../utils/intl";
import PropTypes from "prop-types";

const LoginForm = ({ loginInfo, handleLogin, handleFieldChange }) => {
  const onSubmit = () => {
    if (handleLogin) {
      handleLogin(loginInfo);
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      <table>
        <tbody>
        <tr>
          <td>
            <label htmlFor="email">{i18N.t("login.email_label")}</label>
          </td>
          <td>
            <CustomTextInput
              onChange={handleFieldChange}
              name="email"
              placeholder={i18N.t("login.email_placeholder_text")}
              value={loginInfo.email}
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
              value={loginInfo.password}
            />
          </td>
        </tr>
        </tbody>
      </table>

      <hr/>

      <input type="submit" value="Login" onClick={onSubmit}/>
    </div>
  );
};

const { func } = PropTypes;

LoginForm.propTypes = {
  handleLogin: func.isRequired,
  handleFieldChange: func.isRequired,
  loginInfo: loginUserType.isRequired
};

export default LoginForm;
