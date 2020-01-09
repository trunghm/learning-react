import { Route, Switch } from "react-router-dom";
import React from "react";
import { AboutView, HomeView, NotFoundView, DashboardView } from "../views";
import { LoginPage } from "../containers";
import { Header, Loading, ProtectedRoute } from "../components/common";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { pathKeys } from "../constants";
import { loginActions } from "../redux/actions";
import { isEmpty } from "../utils/common";
import { globalKeys } from "../constants";
import { I18nextProvider } from "react-i18next";
import i18next from "../translations/i18next";

class App extends React.PureComponent {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      checked: false,
      isLoggedIn: false
    };

    const language = this.props.locale || navigator.language.split(/[-_]/)[0];
    i18next.changeLanguage(language);
    this.checkLogin();
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  setRender(isLoggedIn = false) {
    this.setState({ isLoggedIn: isLoggedIn, checked: true });
  }

  checkLogin() {
    console.log("checkLogin");
    debugger;
    this.props.getMemberDetail().then(
      result => {
        if (isEmpty(result) || isEmpty(result.token)) {
          this.setRender(false);
        } else {
          global[globalKeys.AUTH_TOKEN] = result.token;
          this.setRender(true);
        }
      },
      () => {
        this.setRender(false);
      }
    );
  }

  render() {
    console.log("render");
    return (
      <I18nextProvider i18n={i18next}>
        <div>
          <Loading loading={this.props.loading}/>
          <Header/>
          <Switch>
            <Route exact path="/" component={HomeView}/>
            <Route path={pathKeys.ABOUT} component={AboutView}/>
            <Route path={pathKeys.LOGIN} component={LoginPage}/>
            <ProtectedRoute
              path={pathKeys.DASHBOARD}
              component={DashboardView}
              isAuthenticated={this.state.isLoggedIn}
            />
            <Route component={NotFoundView}/>
          </Switch>
        </div>
      </I18nextProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    locale: state.localeReducer.locale,
    loading: state.loadingReducer.loading
  };
};

const mapDispatchToProps = {
  getMemberDetail: loginActions.getMemberDetail
};

App.propTypes = {
  locale: PropTypes.string,
  loading: PropTypes.bool,
  getMemberDetail: PropTypes.func.isRequired
};

App.defaultProps = {
  locale: "",
  loading: false,
  getMemberDetail: () => {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
