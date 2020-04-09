import { connect } from "react-redux";
import LoginView from "./LoginView";
import {
  loginManual,
  loginManualMock,
  setMemberDetail,
  getMemberDetail
} from "./LoginActions";

const mapStateToProps = state => {
  return {
    loginUser: state.loginReducer
  };
};

const mapDispatchToProps = {
  loginManual,
  loginManualMock,
  setMemberDetail,
  getMemberDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
