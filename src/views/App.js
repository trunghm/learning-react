import { Route, Switch } from "react-router-dom";
import React from "react";
import { AboutView, HomeView, NotFoundView, DashboardView } from "../views";
import { LoginPage } from "../containers";
import { Header, Loading } from "../components/common";
import { IntlProvider } from "react-intl";
import { messages_en, messages_vi } from "../translations";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { pathKeys } from "../constants";

const messages = {
  en: messages_en,
  vi: messages_vi
};

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
          <Loading loading={this.props.loading}/>
          <Header/>
          <Switch>
            <Route exact path="/" component={HomeView}/>
            <Route path={pathKeys.ABOUT} component={AboutView}/>
            <Route path={pathKeys.LOGIN} component={LoginPage}/>
            <Route path={pathKeys.DASHBOARD} component={DashboardView}/>
            <Route component={NotFoundView}/>
          </Switch>
        </div>
      </IntlProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    locale: state.localeReducer.locale,
    loading: state.loadingReducer.loading
  };
};

App.propTypes = {
  locale: PropTypes.string,
  loading: PropTypes.bool
};

App.defaultProps = {
  locale: "",
  loading: false
};

export default connect(mapStateToProps)(App);
