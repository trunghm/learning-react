import React from "react";
import { i18N } from "../../utils/intl";

const DashboardView = () => {
  return (
    <div>
      <h1>{i18N.t("dashboard.header")}</h1>
    </div>
  );
};

export default DashboardView;
