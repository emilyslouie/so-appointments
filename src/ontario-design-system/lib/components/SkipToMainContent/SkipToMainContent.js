import React from "react";
import PropTypes from "prop-types";

import './SkipToMainContent.scss';

export default function SkipToMainContent({ data: { language, mainContentId } }) {
  return <div className="ontario-skip-to-main-content text-center">
    <a href={"#" + mainContentId} className="show-on-focus">
      {language === "fr" ? `Passer directement au contenu principal` : `Skip to main content`}
    </a>
  </div>
}

SkipToMainContent.propTypes = {
  data: PropTypes.shape({
    language: PropTypes.string,
    mainContentId: PropTypes.string
  })
};