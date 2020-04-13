import React, { Component } from "react";
import PropTypes from "prop-types";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import ReduxToastr from "react-redux-toastr";
import App from "./views/App";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <ReduxProvider store={store}>
        <BrowserRouter>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles />
            <App />
          </MuiThemeProvider>
        </BrowserRouter>

        <ReduxToastr
          timeOut={2000}
          newestOnTop={false}
          preventDuplicates
          position="bottom-right"
          getState={state => state.toastr} // This is the default
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar={false}
          closeOnToastrClick
        />
      </ReduxProvider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};
