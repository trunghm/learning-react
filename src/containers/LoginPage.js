import { connect } from "react-redux";
import LoginView from "../views/Login/LoginView";
import { bindActionCreators } from "redux";
import * as loginActions from "../redux/actions/loginActions";

const mapStateToProps = (state) => {
  return {
    loginUser: state.loginReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginActions: bindActionCreators(loginActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView);