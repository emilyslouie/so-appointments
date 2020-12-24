import React from 'react';
import PropTypes from "prop-types";
import './SmallFooter.scss';

export default function SmallFooter({ data: { language, links } }) {
  const DEFAULT_LINKS = {
    en: [
      { text: "about Ontario", link: "https://www.ontario.ca/page/about-ontario" },
      { text: "accessibility", link: "https://www.ontario.ca/page/accessibility" },
      { text: "news", link: "http://news.ontario.ca/newsroom/en" },
      { text: "privacy", link: "https://www.ontario.ca/page/privacy-statement" },
      { text: "terms of use", link: "https://www.ontario.ca/page/terms-use" }
    ],
    fr: [
      { text: "l’Ontario en bref", link: "https://www.ontario.ca/fr/page/lontario-en-bref" },
      { text: "accessibilité", link: "https://www.ontario.ca/fr/page/accessibilite" },
      { text: "nouvelles", link: "https://news.ontario.ca/newsroom/fr" },
      { text: "confidentialité", link: "https://www.ontario.ca/fr/page/declaration-concernant-la-protection-de-la-vie-privee" },
      { text: "conditions d’utilisation", link: "https://www.ontario.ca/fr/page/conditions-dutilisation" },
    ]
  };

  const WORDING = {
    en: {
      footerCopyright: "\u00A9 Queen’s Printer for Ontario, 2012–20",
      footerCopyrightLink:
        "https://www.ontario.ca/page/copyright-information-c-queens-printer-ontario",
      footerSecondaryNavigation: "Secondary navigation"
    },
    fr: {
      footerCopyright: "\u00A9 Imprimeur de la Reine pour l’Ontario, 2012‑20",
      footerCopyrightLink:
        "https://www.ontario.ca/fr/page/droits-dauteur-imprimeur-de-la-reine-pour-lontarioc",
      footerSecondaryNavigation: "Navigation secondaire"
    }
  }
  return (
    <footer>
      {language && <div className="ontario-grid-container">
        <div className="ontario-row ontario-row--collapse">
          <div className="ontario-small-12 ontario-columns">
            <ul className="ontario-footer__list ontario-list--inline" aria-label={WORDING[language]['footerSecondaryNavigation']}>
              {(links || DEFAULT_LINKS)[language].map((item, index) => <li key={item.link}>
                <a href={item.link} target="_self">{item.text}</a>
              </li>)}
            </ul>
          </div>
        </div>
        <div className="ontario-row ontario-row--collapse">
          <div className="ontario-small-12 ontario-columns">
            <p className="ontario-footer__copyright">
              <small>
                <a href={WORDING[language]['footerCopyrightLink']}>
                  {WORDING[language]['footerCopyright']}
                </a>
              </small>
            </p>
          </div>
        </div>
      </div>}
    </footer>
  );
}

SmallFooter.propTypes = {
  data: PropTypes.shape({
    language: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
      link: PropTypes.string,
      text: PropTypes.string
    }))
  })
};