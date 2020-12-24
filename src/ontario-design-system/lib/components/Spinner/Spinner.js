import React from "react"
import PropTypes from "prop-types";

import './Spinner.scss';

export default function Spinner({ className, data: { show = true } = {} }){
  return show ? <div className={`ontario-spinner ${className || ""}`}></div> : null;
}

Spinner.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    show: PropTypes.bool
  })
};