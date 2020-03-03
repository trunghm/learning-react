import React, { useState, useEffect } from "react";
import { LoginForm } from "../../components";
import { object, func } from "prop-types";
import { common } from "../../utils";
import { toastr } from "react-redux-toastr";
import { globalKeys, pathKeys, toastrTypes } from "../../constants";
import { useTranslation } from "react-i18next";
import { isEmpty } from "../../utils/common";
import { Redirect } from "react-router-dom";

const LoginView = ({
                     loginUserReducer,
                     loginManual,
                     setMemberDetail,
                     getMemberDetail,
                     ...props
                   }) => {
  useEffect(() => {
    checkLoggedIn();
  });

  const { t } = useTranslation();
  const [email, setEmail] = useState(loginUserReducer.email);
  const [password, setPassword] = useState(loginUserReducer.password);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkedAuth, setCheckedAuth] = useState(false);
  const { from } = props.location.state || { from: { pathname: pathKeys.LOGIN } };

  function checkLoggedIn() {
    getMemberDetail().then(
      result => {
        if (isEmpty(result) || isEmpty(result.token)) {
          setIsLoggedIn(false);
        } else {
          global[globalKeys.AUTH_TOKEN] = result.token;
          setIsLoggedIn(true);
          setCheckedAuth(true);
        }
      },
      () => {
        setIsLoggedIn(false);
      }
    );
  }

  function onPressLogin(loginInfo) {
    if (validateInputs(loginInfo)) {
      loginManual(loginInfo).then(
        resp => {
          if (resp.success) {
            debugger;
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

  function validateInputs({ email, password }) {
    if (!common.validateEmail(email)) {
      toastr.warning(toastrTypes.INVALID, t("login.validate_invalid_email"));
      return false;
    }
    if (common.isEmpty(password)) {
      toastr.warning(toastrTypes.EMPTY, t("login.validate_missing_password"));
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

  console.log("isLoggedIn", checkedAuth, isLoggedIn, from);
  if (checkedAuth && from.pathname !== pathKeys.LOGIN) {

    return <Redirect to={from}/>;
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
  getMemberDetail: func.isRequired,
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
  },
  getMemberDetail: () => {
  }
};

export default LoginView;
