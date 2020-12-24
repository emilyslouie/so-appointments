import React from "react";

const RadioGroup = (props) => {
  return (
    // <div className="ontario-form-group">
    <fieldset className="ontario-fieldset">
      <div className="ontario-radios">{props.children}</div>
    </fieldset>
    // </div>
  );
};

export default RadioGroup;
