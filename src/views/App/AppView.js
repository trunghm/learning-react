import { Route, Switch } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { I18nextProvider } from "react-i18next";
import styled from "styled-components";
import { Header, Loading, ProtectedRoute } from "../../components/common";
import { pathKeys, globalKeys } from "../../constants";
import { getMemberDetail, logout } from "../Login/LoginActions";
import { isEmpty } from "../../utils/common";

import i18next from "../../translations/i18next";
import { DrawerLeft } from "../../components";
import { LAYOUT } from "../../constants/common";
import LoginPage from "../Login";
import DashboardPage from "../Dashboard";

import HomeView from "../Home/HomeView";
import AboutView from "../About";
import NotFoundView from "../NotFound";

const AppWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

const Layout = ({ layout, props = null, children }) => {
  switch (layout) {
    case LAYOUT.FULLPAGE: {
      return React.createElement(AppWrapper, null, children);
    }
    case LAYOUT.DRAWERLEFT: {
      return React.createElement(DrawerLeft, props, children);
    }
    default: {
      return React.createElement(AppWrapper, null, children);
    }
  }
};

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };

    const language = this.props.locale || navigator.language.split(/[-_]/)[0];
    i18next.changeLanguage(language);
    this.checkLogin();
  }

  setRender(isLoggedIn = false) {
    this.setState({ isLoggedIn });
  }

  checkLogin() {
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
    const { isLoggedIn } = this.state;
    const layout = isLoggedIn ? LAYOUT.DRAWERLEFT : LAYOUT.FULLPAGE;
    const { onLogout } = this.props;
    return (
      <I18nextProvider i18n={i18next}>
        <div>
          <Loading loading={this.props.loading} />
          <Layout layout={layout} props={{ logout: onLogout }}>
            {!isLoggedIn && <Header />}
            <Switch>
              <Route exact path="/" component={HomeView} />
              <Route path={pathKeys.ABOUT} component={AboutView} />
              <Route path={pathKeys.LOGIN} component={LoginPage} />
              <ProtectedRoute
                path={pathKeys.DASHBOARD}
                component={DashboardPage}
                isAuthenticated={isLoggedIn}
              />
              <Route component={NotFoundView} />
            </Switch>
          </Layout>
        </div>
      </I18nextProvider>
    );
  }
}

const mapStateToProps = state => ({
  locale: state.appReducer.locale,
  loading: state.appReducer.loading,
  loginState: state.loginReducer
});

const mapDispatchToProps = {
  getMemberDetail,
  onLogout: logout
};

App.propTypes = {
  locale: PropTypes.string,
  loading: PropTypes.bool,
  getMemberDetail: PropTypes.func,
  onLogout: PropTypes.func
};

App.defaultProps = {
  locale: "",
  loading: false,
  getMemberDetail: () => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
