import React from 'react';
import { useHistory } from "react-router-dom";
import { Button } from "../ontario-design-system/lib/index";
import "../ontario-design-system/styles/ds-theme.css";

function Landing() {
  const history = useHistory();

  return (
    <div className="container">
      <div className="ontario-row">
        <div className="ontario-columns ontario-margin-bottom-24-!">
          <h1>Book an appointment scenarios</h1>
        </div>
      </div>
      <div className="ontario-row">
        <span className="ontario-columns ontario-large-3">
          <Button data={{
            id: "location-first",
            text: "Search \"777 bay street serviceontario\"",
            skin: "primary",
          }}
            onClickHandler={() => {
              history.push("/google-location");
            }}
          />
        </span>
        <span className="ontario-columns ontario-large-3">
          <Button data={{
            id: "service-first",
            text: "Search \"renew driver's licence\"",
            skin: "primary",
          }}
            onClickHandler={() => {
              history.push("/google-service");
            }}
          />
        </span>
        <span className="ontario-columns ontario-large-3">
          <Button data={{
            id: "location-general",
            text: "Search \"service ontario locations\"",
            skin: "primary",
          }}
            onClickHandler={() => {
              history.push("/google-locations");
            }}
          />
        </span>
        <span className="ontario-columns ontario-large-3">
          <Button data={{
            id: "service-general",
            text: "Search \"service ontario\"",
            skin: "primary",
          }}
            onClickHandler={() => {
              history.push("/google-services");
            }}
          />
        </span>
      </div>

    </div>
  );
}

export default Landing;
