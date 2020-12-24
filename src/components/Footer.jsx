import React from "react";
import SmallFooter from "../ontario-design-system/lib/components/SmallFooter/SmallFooter";
const Data = {
  language: "en",
  links: {
    en: [
      {
        text: "about Ontario",
        link: "https://www.ontario.ca/page/about-ontario",
      },
      {
        text: "accessibility",
        link: "https://www.ontario.ca/page/accessibility",
      },
      {
        text: "privacy",
        link: "https://www.ontario.ca/page/privacy-statement",
      },
      { text: "terms of use", link: "https://www.ontario.ca/page/terms-use" },
      {
        text: "contact us",
        link: "https://www.ontario.ca/feedback/contact-us?id=7476&nid=53662",
      },
    ],
    fr: [
      {
        text: "l’Ontario en bref",
        link: "https://www.ontario.ca/fr/page/lontario-en-bref",
      },
      {
        text: "accessibilité",
        link: "https://www.ontario.ca/fr/page/accessibilite",
      },
      {
        text: "confidentialité",
        link:
          "https://www.ontario.ca/fr/page/declaration-concernant-la-protection-de-la-vie-privee",
      },
      {
        text: "conditions d’utilisation",
        link: "https://www.ontario.ca/fr/page/conditions-dutilisation",
      },
      {
        text: "contactez-nous",
        link:
          "https://www.ontario.ca/fr/commentaires/pour-nous-joindre?id=8804&nid=53968",
      },
    ],
  },
};
const Footer = (props) => {
  return <SmallFooter data={{ language: "en" }} />;
};

export default Footer;
