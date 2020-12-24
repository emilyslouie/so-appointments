// src/components/Task.js

import React from "react";
import "../../../styles/components/hint-text/hint-text.scss";

// import "./Hint.scss";
import PropTypes from "prop-types";

export default function Hint({ data: { hintId, hintText }, onClickHandler }) {
  return (
    <p
      id={`ontario-hint-${hintId}`}
      className="ontario-hint"
      onClick={onClickHandler}
    >
      {hintText}
    </p>
  );
}

Hint.propTypes = {
  data: PropTypes.shape({
    hintId: PropTypes.string.isRequired,
    hintText: PropTypes.string.isRequired,
  }),
};
