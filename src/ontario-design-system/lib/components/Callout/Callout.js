import React from "react";
import PropTypes from "prop-types";
import "./Callout.scss";

import { ReactComponent as WarningIcon } from "./warning.svg";
import { ReactComponent as SuccessIcon } from "./success.svg";

/**
 * Should this callout have an icon?
 * warning, alert, and success all have an icon.
 * @param {*} type  type of callout
 */
const shouldShowIcon = (type) => {
  return type === "warning" || type === "alert" || type === "success";
};

/**
 * Return the icon's SVG element
 * @param {*} type  icon type
 */
const icon = (type) => {
  return (
    <span>
      {type === "warning" && (
        <WarningIcon />
        // <use href="#ontario-icon-alert-warning"></use>
      )}
      {type === "alert" && <use xlinkHref="#ontario-icon-alert-error"></use>}
      {type === "success" && <SuccessIcon />}
    </span>
  );
};

export default function Callout({ className, data: { type, title, message } }) {
  return (
    <div
      className={`ontario-callout ontario-callout-${type} ${className || ""}`}
      role="region"
    >
      <div className="ontario-callout-column-holder ontario-align-center">
        {shouldShowIcon(type) && !!title && (
          <div className="ontario-callout-icon ontario-large-display">
            {icon(type)}
          </div>
        )}
        {!!title && (
          <h4>
            {shouldShowIcon(type) && (
              <span className="ontario-callout-icon inline ontario-large-hide">
                {icon(type)}
              </span>
            )}
            {title}
          </h4>
        )}
      </div>
      <div className="ontario-callout-column-holder">
        {shouldShowIcon(type) && !!title && (
          <div className="ontario-callout-icon ontario-large-display hidden">
            {icon(type)}
          </div>
        )}
        {message}
      </div>
    </div>
  );
}

Callout.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    type: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    message: PropTypes.element,
  }),
};
