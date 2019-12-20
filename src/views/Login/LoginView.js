import React, { useState } from "react";
import { LoginForm } from "../../components";
import { object, func } from "prop-types";
import { common } from "../../utils";
import { toastr } from "react-redux-toastr";
import { pathKeys, toastrTypes } from "../../constants";

const LoginView = ({ loginUserReducer, loginManual, setMemberDetail, ...props }) => {
  const [email, setEmail] = useState(loginUserReducer.email);
  const [password, setPassword] = useState(loginUserReducer.password);

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
          console.warn("=== LOGIN VIEW ERROR:", error);
        }
      );
    }
  }

  function validateInputs({ email, password }) {
    if (!common.validateEmail(email)) {
      toastr.warning(toastrTypes.INVALID, "Please input a valid email!");
      return false;
    }
    if (common.isEmpty(password)) {
      toastr.warning(toastrTypes.EMPTY, "Please input a password to login!");
      return false;
    }

    return true;
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

  return (
    <LoginForm
      handleLogin={onPressLogin}
      handleFieldChange={handleFieldChange}
      loginInfo={{ email, password }}
    />
  );
};

LoginView.propTypes = {
  loginManual: func.isRequired,
  setMemberDetail: func.isRequired,
  loginUserReducer: object.isRequired
};

LoginView.defaultProps = {
  loginUserReducer: {
    userName: "",
    password: ""
  },
  loginManual: () => {
  },
  setMemberDetail: () => {
  }
};

export default LoginView;
