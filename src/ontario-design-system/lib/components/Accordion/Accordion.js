import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { GoChevronDown } from "react-icons/go";
import "./Accordion.scss";

export default function Accordion({
  data: { id, title, openedByDefault = false, content },
}) {
  const [opened, setOpened] = useState(openedByDefault);
  const [defaultOpened, setDefaultOpened] = useState(openedByDefault);

  useEffect(() => {
    if (openedByDefault !== defaultOpened) {
      setDefaultOpened(openedByDefault);
      setOpened(openedByDefault);
    }
  }, [openedByDefault, defaultOpened]);

  return (
    <div className={"ontario-accordion"}>
      <button
        id={"ontario-accordion-wrapper-label-" + id}
        aria-expanded={opened}
        aria-controls={"ontario-accordion-wrapper-" + id}
        className={`ontario-accordion-button ${!opened ? "collapsed" : ""}`}
        onClick={() => {
          setOpened(!opened);
        }}
      >
        <span className="flex align-center">
          {/* <span className="flex-no-resize"> */}

          {/* </span>{" "} */}
          <span className="flex-resize">
            <GoChevronDown
              className={`ontario-icon ontario-icon-chevron-down ${
                opened ? "rotate" : ""
                }`}
              style={{ display: "inline-block", color: "#06c" }}
            />{" "}
            {title}
          </span>
        </span>
      </button>
      <div
        id={"ontario-accordion-wrapper-" + id}
        role="region"
        aria-labelledby={"ontario-accordion-wrapper-label-" + id}
        aria-hidden={!opened}
        className={`ontario-accordion-wrapper ${!opened ? "collapsed" : ""}`}
      >
        <div className={"ontario-accordion-content"}>{content}</div>
      </div>
    </div>
  );
}

Accordion.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    openedByDefault: PropTypes.bool,
    content: PropTypes.element,
  }),
};
