import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
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

ProtectedRoute.propTypes = {
  component: PropTypes.element,
  isAuthenticated: PropTypes.bool,
  location: PropTypes.object
};

ProtectedRoute.defaultProps = {
  component: null,
  isAuthenticated: false,
  location: {}
};

export default ProtectedRoute;
