import React, { useState } from "react";
import { object, func } from "prop-types";
import { toastr } from "react-redux-toastr";
import { useTranslation } from "react-i18next";
import { Redirect } from "react-router-dom";
import { pathKeys, toastrTypes } from "../../constants";
import { common } from "../../utils";
import { LoginForm } from "../../components";

const LoginView = ({
  loginUser,
  loginManual,
  loginManualMock,
  setMemberDetail,
  getMemberDetail,
  ...props
}) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { from } = props.location.state || {
    from: { pathname: pathKeys.LOGIN }
  };

  function validateInputs({ cEmail, cPassword }) {
    if (!common.validateEmail(cEmail)) {
      toastr.warning(toastrTypes.INVALID, t("login.validate_invalid_email"));
      return false;
    }
    if (common.isEmpty(cPassword)) {
      toastr.warning(toastrTypes.EMPTY, t("login.validate_missing_password"));
      return false;
    }

    return true;
  }

  function onPressLogin(loginInfo) {
    if (validateInputs(loginInfo)) {
      loginManual(loginInfo).then(
        resp => {
          if (resp.success) {
            setMemberDetail(resp.data).then(
              () => {
                props.history.replace(pathKeys.DASHBOARD);
              },
              error => {
                toastr.error(toastrTypes.ERROR, error.message || error);
              }
            );
          } else {
            toastr.error(toastrTypes.ERROR, resp.message);
          }
        },
        error => {
          toastr.error(toastrTypes.ERROR, error);
          console.warn("LOGIN VIEW ERROR:", error);
        }
      );
    }
  }

  function handleFieldChange(event) {
    event.preventDefault();
    if (event.target.name === "email") {
      setEmail(event.target.value);
    }
    if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  }

  if (loginUser.isLoggedIn && from.pathname !== pathKeys.LOGIN) {
    return <Redirect to={from} />;
  }
  if (loginUser.isLoggedIn) {
    return <Redirect to={{ pathname: pathKeys.ROOT }} />;
  }

  return (
    <LoginForm
      handleLogin={onPressLogin}
      handleFieldChange={handleFieldChange}
      loginInfo={{ email, password }}
    />
  );
};

LoginView.propTypes = {
  loginManualMock: func.isRequired,
  loginManual: func.isRequired,
  setMemberDetail: func.isRequired,
  getMemberDetail: func.isRequired,
  loginUser: object.isRequired
};

export default LoginView;
