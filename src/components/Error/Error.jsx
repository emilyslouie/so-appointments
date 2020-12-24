import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./Error.css";
import warning from '../../images/error-exclaim-big.svg';

export default class Error extends Component {
  render() {
    return (
      <div className="error-container" key={this.props.key}>
        <div style={{display: 'flex', flexDirection: 'row'}} >
          <img
            className="error-symbol"
            src={warning}
            alt="error symbol"
          />
          <div className="error-header">There is a problem</div>
        </div>
        <Row>
          <Col>
            <p className="check-entries">
             {this.props.message}
            </p>
          </Col>
        </Row>
        <Row>
          <ul>
            {this.props.fields.map(field => 
              { 
                return (!field.valid ? <li key={field.valid}><a href={"#" + field.id} style={{fontWeight: 600, color: 'red'}} >{field.label}</a></li> : "")}
            )}
          </ul>
        </Row>
      </div>
    );
  }
}
