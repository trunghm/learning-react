import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./views/App";
import { Provider as ReduxProvider } from "react-redux";

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <ReduxProvider store={store}>
        <Router>
          <App/>
        </Router>
      </ReduxProvider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};
