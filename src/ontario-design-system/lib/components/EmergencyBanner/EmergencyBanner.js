import React from 'react';
import PropTypes from "prop-types";
import './EmergencyBanner.scss';

export default function EmergencyBanner({ data: { message } }) {
  return (
    <aside className={`ontario-emergency-banner`}>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ display: 'none' }} aria-hidden="true">
        <symbol id="ontario-icon-alert-warning-white"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="#fff" /><path d="M11 10h2v4h-2zm0 6h2v2h-2z" fill="#000" /></symbol>
      </svg>
      <div className="ontario-original-row">
        <div className="ontario-original-small-12 ontario-original-columns">
          <p><svg className="ontario-icon ontario-emergency-banner-icon ontario-margin-right-3" alt="" aria-hidden="true" focusable="false" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" >
                <use xlinkHref="#ontario-icon-alert-warning-white"></use>
              </svg>{ message }</p>
        </div>
      </div>
    </aside>
  );
}

EmergencyBanner.propTypes = {
  data: PropTypes.shape({
    message: PropTypes.element
  })
};