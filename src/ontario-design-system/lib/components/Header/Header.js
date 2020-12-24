import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./Header.scss";
import logo from "./static/images/logo-ontario@2x.png";
import logoPrint from "./static/images/logo-ontario@2x-print.png";

export default function Header({
  data: { language, alternateLanguageRoute },
  noMenu = true,
}) {
  const WORDING = {
    en: {
      homepage: "https://www.ontario.ca/page/government-ontario",
      primaryNavigation: "Primary navigation",
      governmentOfOntario: "Government of Ontario",

      menuItems: [
        { title: "Arts and culture", link: "/page/arts-and-culture" },
        { title: "Business and economy", link: "/page/business-and-economy" },
        { title: "Driving and roads", link: "/page/driving-and-roads" },
        {
          title: "Education and training",
          link: "/page/education-and-training",
        },
        {
          title: "Environment and energy",
          link: "/page/environment-and-energy",
        },
        { title: "Government", link: "/page/government" },
        { title: "Health and wellness", link: "/page/health-care-ontario" },
        { title: "Home and community", link: "/page/home-and-community" },
        { title: "Jobs and employment", link: "/page/jobs-and-employment" },
        { title: "Law and safety", link: "/page/law-and-safety" },
        { title: "Rural and north", link: "/page/rural-and-north" },
        { title: "Taxes and benefits", link: "/page/taxes-and-benefits" },
        { title: "Travel and recreation", link: "/page/travel-and-recreation" },
      ],
    },
    fr: {
      homepage: "https://www.ontario.ca/fr/page/gouvernement-de-lontario",
      primaryNavigation: "Navigation principale",
      governmentOfOntario: "Gouvernement de l’Ontario",

      menuItems: [
        {
          title: "Affaires et économie",
          link: "/fr/page/affaires-et-economie",
        },
        { title: "Arts et culture", link: "/fr/page/arts-et-culture" },
        { title: "Conduite et routes", link: "/fr/page/conduite-et-routes" },
        {
          title: "Domicile et communauté",
          link: "/fr/page/domicile-et-communaute",
        },
        {
          title: "Éducation et formation",
          link: "/fr/page/education-et-formation",
        },
        {
          title: "Environnement et énergie",
          link: "/fr/page/environnement-et-energie",
        },
        { title: "Gouvernement", link: "/fr/page/gouvernement" },
        {
          title: "Impôts et avantages fiscaux",
          link: "/fr/page/impots-et-avantages-fiscaux",
        },
        { title: "Lois et sécurité", link: "/fr/page/lois-et-securite" },
        {
          title: "Régions rurales et du Nord",
          link: "/fr/page/regions-rurales-et-du-nord",
        },
        {
          title: "Santé et bien-être",
          link: "/fr/page/les-soins-de-sante-en-ontario",
        },
        { title: "Travail et emploi", link: "/fr/page/travail-et-emploi" },
        { title: "Voyage et loisirs", link: "/fr/page/voyage-et-loisirs" },
      ],
    },
  };

  const [navOpened, setNavOpened] = useState(false);

  const navContainer = useRef();
  const firstNavLink = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (
        navOpened &&
        e.target !== navContainer.current &&
        !navContainer.current.contains(e.target)
      ) {
        setNavOpened(false);
      }
    };

    document.addEventListener("mousedown", handleClick, false);

    if (navOpened) {
      firstNavLink.current.focus();
    }

    return () => document.removeEventListener("mousedown", handleClick, false);
  }, [navOpened]);

  const toggleNav = (e) => {
    setNavOpened(!navOpened);
  };

  return (() => {
    if (!language) {
      language = "en";
    }
    return (
      <header style={{ position: "sticky" }}>
        <div className="ontario-row">
          <div className="ontario-small-5 ontario-medium-4 ontario-large-3 ontario-columns print-show">
            <div className="flex">
              <div className="flex-no-resize">
                <a href={WORDING[language].homepage} className="logo-link">
                  <img
                    className="site-logo"
                    src={logo}
                    alt={WORDING[language]["governmentOfOntario"]}
                  />
                  <img
                    className="site-logo-print"
                    src={logoPrint}
                    alt={WORDING[language]["governmentOfOntario"]}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="ontario-medium-5 ontario-large-6 show-for-medium-up ontario-columns"></div>
          <div className="ontario-small-7 ontario-medium-3 ontario-large-3 ontario-columns text-right">
            <div className="flex align-center">
              <div className="flex-resize"></div>
              {alternateLanguageRoute && (
                <a
                  href={alternateLanguageRoute}
                  className="language-link flex-no-resize"
                >
                  <span className="large-hide">
                    <abbr title={language === "en" ? "français" : "english"}>
                      {language === "en" ? "FR" : "EN"}
                    </abbr>
                  </span>
                  <span className="large-show">
                    {language === "en" ? "français" : "english"}
                  </span>
                </a>
              )}
              {!noMenu && (
                <nav
                  role="navigation"
                  ref={navContainer}
                  aria-label={WORDING[language]["primaryNavigation"]}
                  className="inline-block"
                >
                  <button
                    className="flex-no-resize header-button header-button--menu"
                    aria-haspopup="true"
                    aria-controls="drop-menu"
                    aria-expanded={navOpened}
                    onClick={toggleNav}
                  >
                    <div className="flex align-center">
                      <span>{language === "en" ? "Menu" : "Sujets"}</span>
                    </div>
                  </button>
                  <div
                    className="content top-margin f-dropdown open right"
                    id="drop-menu"
                    style={{
                      position: "absolute",
                      left: "auto",
                      right: "calc(2rem / 2)",
                      top: "38px",
                      ...(!navOpened && { display: "none" }),
                    }}
                  >
                    <ul className="no-left-margin" lang={language}>
                      {WORDING[language].menuItems.map((item, index) => (
                        <li key={item.link}>
                          <a
                            ref={index === 0 ? firstNavLink : null}
                            href={item.link}
                            target="_self"
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
              )}
            </div>
          </div>
        </div>
      </header>
    );
  })();
}

Header.propTypes = {
  data: PropTypes.shape({
    language: PropTypes.string,
    alternateLanguageRoute: PropTypes.string,
  }),
};
