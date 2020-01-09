import React from "react";
import { useTranslation } from "react-i18next";

const DashboardView = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("dashboard.header")}</h1>
    </div>
  );
};

export default DashboardView;
