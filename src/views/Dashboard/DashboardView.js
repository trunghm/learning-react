import React from "react";
import { useTranslation } from "react-i18next";
import { toastr } from "react-redux-toastr";
import { func } from "prop-types";
import { Button } from "@material-ui/core";
import { toastrTypes } from "../../constants";

const DashboardView = props => {
  const { logout } = props;
  const { t } = useTranslation();
  const handleLogOut = () => {
    logout().then(
      resp => {
        console.log("logout ", resp);
      },
      error => {
        toastr.error(toastrTypes.ERROR, error);
        console.warn("LOG OUT ERROR:", error);
      }
    );
  };
  return (
    <div>
      <h1>{t("dashboard.header")}</h1>
      <Button variant="contained" color="primary" onClick={handleLogOut}>
        Logout
      </Button>
    </div>
  );
};

DashboardView.propTypes = {
  logout: func
};

DashboardView.defaultProps = {
  logout: () => {}
};

export default DashboardView;
