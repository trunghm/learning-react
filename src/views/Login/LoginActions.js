import { common, cookie } from "../../utils";
import { globalKeys } from "../../constants";
import { showLoading, hideLoading } from "../App/AppReducer";
import { loadLoginMemberDetailSuccess } from "./loginReducer";
import MembersService from "../../services/membersService";

export function loginManual(loginInfo) {
  return dispatch => {
    dispatch(showLoading());
    const loginCredential = {
      xmppId: loginInfo.email,
      password: loginInfo.password
    };
    return MembersService.loginManual(loginCredential).then(
      res => {
        if (res.success) {
          dispatch(loadLoginMemberDetailSuccess(res));
        }
        dispatch(hideLoading());
        return res;
      },
      error => {
        throw error;
      }
    );
  };
}

export function loginManualMock(loginInfo) {
  return dispatch => {
    dispatch(showLoading());
    const loginCredential = {
      xmppId: loginInfo.email,
      password: loginInfo.password
    };
    return MembersService.loginManualMock(loginCredential).then(
      res => {
        if (res.success) {
          dispatch(loadLoginMemberDetailSuccess(res));
        }
        dispatch(hideLoading());
        return res;
      },
      error => {
        throw error;
      }
    );
  };
}

export function setMemberDetail(memberDetail, useCookie = true) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      try {
        if (useCookie) {
          cookie.setCookie(
            globalKeys.ACCESS_MEMBER_DETAIL,
            JSON.stringify(memberDetail)
          );
        } else {
          sessionStorage.setItem(
            globalKeys.ACCESS_MEMBER_DETAIL,
            JSON.stringify(memberDetail)
          );
        }
        dispatch(loadLoginMemberDetailSuccess(memberDetail));
        resolve(memberDetail);
      } catch (error) {
        reject(error);
      }
    });
  };
}

export function getMemberDetail() {
  return dispatch => {
    return new Promise((resolve, reject) => {
      try {
        let savedDetail = sessionStorage.getItem(
          globalKeys.ACCESS_MEMBER_DETAIL
        );
        if (common.isEmpty(savedDetail) || savedDetail === "null") {
          savedDetail = cookie.getCookie(globalKeys.ACCESS_MEMBER_DETAIL);
        }
        if (!common.isEmpty(savedDetail)) {
          const memberDetail = JSON.parse(savedDetail);
          dispatch(loadLoginMemberDetailSuccess(memberDetail));
          resolve(memberDetail);
        } else {
          reject(new Error("No Saved detail"));
        }
      } catch (error) {
        reject(error);
      }
    });
  };
}

export function removeMemberDetail() {
  return dispatch => {
    return new Promise((resolve, reject) => {
      try {
        cookie.deleteCookie(globalKeys.ACCESS_MEMBER_DETAIL);
        sessionStorage.setItem(globalKeys.ACCESS_MEMBER_DETAIL, null);
        dispatch(loadLoginMemberDetailSuccess(null));
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };
}

export function logout() {
  return dispatch => {
    dispatch(showLoading());
    return MembersService.logout().then(
      res => {
        dispatch(removeMemberDetail());
        dispatch(hideLoading());
        return res;
      },
      error => {
        throw error;
      }
    );
  };
}
