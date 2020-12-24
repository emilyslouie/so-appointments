import React from "react";
import "../css/SOHeader.css";
import logo from "../images/serviceontariologo.png";
import logoPrint from "../images/serviceontariologo.png";

function ServiceOntarioHeader({ inABS }) {

  let withoutBranding = (
    <div className="ontario-small-5 ontario-medium-4 ontario-large-3 ontario-columns print-show">
      <div className="flex">
        <div className="flex-no-resize">
          <a href="/" className="logo-link">
            <img
              className="site-sologo"
              src={logo}
              alt=""
            />
            <img
              className="site-logo-print"
              src={logoPrint}
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );

  let withBranding = (
    <div className="ontario-columns abs">
      <div>
        <a href="/" className="logo-link">
          <img
            className="site-sologo"
            src={logo}
            alt=""
          />
          <img
            className="site-logo-print"
            src={logoPrint}
            alt=""
          />
        </a>
      </div>
      <div>
        <p className="sublogo">Appointment booking</p>
      </div>
    </div>
  );

  let green = <div></div>;
  if (inABS) {
    green = withBranding;
  }
  else {
    green = withoutBranding;
  }

  return (
    <header className="so" style={{ position: "sticky" }}>
      <div className="ontario-row">
        {green}
      </div>
    </header>
  );
}

export default ServiceOntarioHeader;

