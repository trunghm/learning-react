import React from "react";
import { Link } from "react-router-dom";
import { i18N } from "../../utils/intl";

const HomeView = () => {
  return (
    <div>
      <h1>{i18N.t("home.header")}</h1>

      <h2>{i18N.t("home.get_started")}</h2>
      <ol>
        <li>
          {i18N.t("home.review_the")}
          <Link to="/demo-app">{i18N.t("home.demo_app")}</Link>
        </li>
        <li>
          {i18N.t("home.get_code_at")}
          <a href="https://github.com/nexlesoft/reactjs-template">
            {i18N.t("home.reactjs_template")}
          </a>
        </li>
      </ol>
    </div>
  );
};

export default HomeView;
