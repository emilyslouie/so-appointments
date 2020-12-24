import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import './BackToTop.scss';
import { useScroll } from "./utils/useScroll";

export default function BackToTop({ data: { language } }) {
  const { scrollY } = useScroll();

  const [showBackToTop, setShowBackToTop] = useState(false);

  const WORDING = { 
    en: {
      backToTop: "Back to top"
    },
    fr: {
      backToTop: "Retour en haut"
    }
  }

  useEffect(() => {
    setShowBackToTop(scrollY > window.innerHeight);
  }, [scrollY])

  const goBackToTop = e => {
    e.currentTarget.blur();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button className={`ontario-back-to-top link ${showBackToTop ? '' : 'sr-only'}`} onClick={goBackToTop}>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ 'display': 'none' }} aria-hidden="true">
        <symbol id="ontario-icon-back-to-top">
          <circle cx="18" cy="19" r="16" fill="#666666" />
          <path d="M7.33325 18.9999L9.21325 20.8799L16.6666 13.4399V29.6666H19.3333V13.4399L26.7733 20.8933L28.6666 18.9999L17.9999 8.33325L7.33325 18.9999Z" fill="white" />
        </symbol>
      </svg>
      <span>
        <svg width="37" height="38" className="ontario-icon" alt="" aria-hidden="true" focusable="false" viewBox="0 0 37 38" preserveAspectRatio="xMidYMid meet" >
          <use xlinkHref="#ontario-icon-back-to-top"></use>
        </svg>
        <span className="sr-only">{WORDING[language]['backToTop']}</span>
      </span>
    </button>
  );
}

BackToTop.propTypes = {
  data: PropTypes.shape({
    language: PropTypes.string
  })
};