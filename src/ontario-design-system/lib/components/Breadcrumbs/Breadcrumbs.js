import React from 'react';
import PropTypes from "prop-types";
import './Breadcrumbs.scss';

export default function Breadcrumbs({ data: { items } }) {
  return (
    <ul className="ontario-breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, index) => <li key={item.text}>
        {index !== 0 && <svg className="ontario-icon" alt="" aria-hidden="true" focusable="false" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" ><use xlinkHref="#ontario-icon-chevron-right"></use></svg>}
        <a href={item.link}>{item.text}</a>
      </li>)}
    </ul>
  );
}

Breadcrumbs.propTypes = {
  data: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      link: PropTypes.string,
      text: PropTypes.string
    }))
  })
};