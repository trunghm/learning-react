import BaseService from "./baseService";
import authApi from "../api/authApi";
import MemberDetail from "../models/MemberDetail";

class MemberService extends BaseService {

  loginManual(loginInfo) {
    return authApi.loginManual(loginInfo).then((response) => {
      console.log("SERVICE LOGIN MANUAL RESULT", response);
      return new MemberDetail(response.data);
    }, this.handleError);
  }

  logout() {
    return authApi.logout().then((response) => {
      return response;
    }, this.handleError);
  }

}

export default new MemberService();
