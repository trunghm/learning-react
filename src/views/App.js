/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";
import React from "react";
import AboutView from "./About/AboutView";
import HomeView from "./Home/HomeView";
import LoginPage from "../containers/LoginPage";
import NotFoundView from "./NotFound/NotFoundView";
import Header from "../components/Header/Header";
import { IntlProvider } from "react-intl";
import messages_en from "../translations/en";
import messages_vi from "../translations/vi";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const messages = {
  en: messages_en,
  vi: messages_vi
};

//const language = navigator.language.split(/[-_]/)[0];

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.PureComponent {
  render() {
    console.log("this.props.locale", this.props.locale);
    const language = this.props.locale || navigator.language.split(/[-_]/)[0];
    return (
      <IntlProvider
        key={language}
        locale={language}
        messages={messages[language]}
      >
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={HomeView}/>
            <Route path="/about" component={AboutView}/>
            <Route path="/login" component={LoginPage}/>
            <Route component={NotFoundView}/>
          </Switch>
        </div>
      </IntlProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    locale: state.localeReducer.locale
  };
};

App.propTypes = {
  locale: PropTypes.string
};

App.defaultProps = {
  locale: ""
};

export default connect(
  mapStateToProps
)(App);
