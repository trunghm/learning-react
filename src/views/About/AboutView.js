import React from "react";
import { Link } from "react-router-dom";
import "../../styles/about-page.css";
import { i18N } from "../../utils/intl";
import { FormattedHTMLMessage } from "react-intl";

// Since this component is simple and static, there's no parent container for it.
const AboutView = () => {
  return (
    <div>
      <h2 className="alt-header">{i18N.t("about.title")}</h2>
      <p><FormattedHTMLMessage id="about.description"/></p>
      <p>
        <Link to="/badlink">{i18N.t("about.click_to_this_bad_link")}</Link>{" "}
        {i18N.t("about.to_see_404")}
      </p>
    </div>
  );
};

export default AboutView;
