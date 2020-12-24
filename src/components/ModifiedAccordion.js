import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { GoChevronDown } from "react-icons/go";
import "./ModifiedAccordion.scss";

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
    <div className={"modified-ontario-accordion"} style={{ marginBottom: '1rem', marginTop: '-1rem' }}>
      <button
        id={"modified-ontario-accordion-wrapper-label-" + id}
        aria-expanded={opened}
        aria-controls={"modified-ontario-accordion-wrapper-" + id}
        className={`modified-ontario-accordion-button ${!opened ? "collapsed" : ""}`}
        style={{ border: 'none' }}
        onClick={() => {
          setOpened(!opened);
        }}
      >
        <span className="flex ">
          {/* <span className="flex-no-resize"> */}

          {/* </span>{" "} */}
          <span className="flex-resize">
            <GoChevronDown
              className={`modified-ontario-icon modified-ontario-icon-chevron-down ${opened ? "rotate" : ""
                }`}
              style={{ display: "inline-block", color: "#0066cc", marginRight: '0.5rem' }}
            />
            {title}
          </span>
        </span>
      </button>
      <div
        id={"modified-ontario-accordion-wrapper-" + id}
        role="region"
        aria-labelledby={"modified-ontario-accordion-wrapper-label-" + id}
        aria-hidden={!opened}
        className={`modified-ontario-accordion-wrapper ${!opened ? "collapsed" : ""}`}
      >
        <div className={"modified-ontario-accordion-content"}>{content}</div>
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
