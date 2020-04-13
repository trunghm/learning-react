import React from "react";
import { Route, Redirect } from "react-router-dom";
import { pathKeys } from "../../../constants";

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: pathKeys.LOGIN,
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
