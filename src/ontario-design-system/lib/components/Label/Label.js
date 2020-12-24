// src/components/Task.js

import React from "react";
import PropTypes from "prop-types";
import "../../../styles/components/labels/labels.scss";

export default function Label({
  data: { id, text, type, flag },
  onClickHandler,
}) {
  return (
    <label
      className={`ontario-label ${type && "ontario-label--" + type}`}
      htmlFor={id}
      onClick={onClickHandler}
    >
      {text}
      {flag && <span className={`ontario-label__flag`}> {flag} </span>}
    </label>
  );
}

Label.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    flag: PropTypes.string,
  }),
};
