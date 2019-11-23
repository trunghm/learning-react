/*eslint-disable*/
import React from "react";
import LoginForm from "./LoginForm";
import PropTypes from "prop-types";

class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginUser: {
        userName: this.props.loginUser.userName,
        password: this.props.loginUser.password
      }
    };
  }

  handleLogin = event => {
    event.preventDefault();
    this.props.loginActions.login(this.state.loginUser);
  };

  handleFieldChange = event => {
    if (event.target.name === "userName") {
      console.log("handleFieldChange", event.target.value);
      this.setState({ loginUser: { username: event.target.value } });
    }
    if (event.target.name === "password") {
      this.setState({ loginUser: { password: event.target.value } });
    }
  };

  render() {
    return (
      <LoginForm
        handleLogin={this.handleLogin}
        handleFieldChange={this.handleFieldChange}
        loginUser={this.state.loginUser}
      />
    );
  }
}

LoginView.propTypes = {
  loginActions: PropTypes.object.isRequired,
  loginUser: PropTypes.object.isRequired
};

LoginView.defaultProps = {
  loginUser: {
    userName: "",
    password: ""
  }
};

export default LoginView;
