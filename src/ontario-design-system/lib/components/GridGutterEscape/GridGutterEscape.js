import React from "react";
import PropTypes from "prop-types";

import './GridGutterEscape.scss';

export default function GridGutterEscape({ children, data: { size = "large" } }) {
  return <div className={`ontario-grid-spacing-escape lt-${size}`}>
    {children}
  </div>
}

GridGutterEscape.propTypes = {
  children: PropTypes.element,
  data: PropTypes.shape({
    size: PropTypes.string
  })
};