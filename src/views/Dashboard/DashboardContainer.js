import { connect } from "react-redux";
import { DashboardView } from "..";
import { logout } from "../Login/LoginActions";

const mapStateToProps = state => {
  return {
    loginUser: state.loginReducer
  };
};

const mapDispatchToProps = {
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView);
