import { Row, Container, Col } from "react-bootstrap";
import React, { Component } from "react";
// import "../../App.css";
import "./Error.css";
import warning from '../../images/error-exclaim-big.svg';

export default class Error extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <div style={{display: 'flex', flexDirection: 'row'}} >
            <img
              src={warning}
              alt="error-symbol"
              className="error-symbol-sm"
              style={{ marginLeft: "0.2rem" }}
            />
            <p className="error-msg">{this.props.msg}</p>
          </div>
        </React.Fragment>
      </div>
    );
  }
}
