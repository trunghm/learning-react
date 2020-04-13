import React from "react";
import PropTypes, { bool } from "prop-types";
import "./Loading.scss";
import cn from "classnames";
import images from "../../../images";

const Loading = ({ msg, className, loading }) => {
  const customOverlayClass = cn({
    "webim-loading": !className,
    [className]: className
  });
  return loading ? (
    <div className={customOverlayClass}>
      <img src={images.icLoadingGrey} alt="loading" />
      <span>{msg}</span>
    </div>
  ) : null;
};

const { string } = PropTypes;

Loading.propTypes = {
  msg: string,
  className: string,
  loading: bool
};

Loading.defaultProps = {
  msg: "",
  className: "",
  loading: false
};

export default Loading;
