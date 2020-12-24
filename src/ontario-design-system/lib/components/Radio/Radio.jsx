import React from "react";
const noop = () => {};
const Radio = ({ val, name, onChange = noop, defaultChecked = false }) => {
  return (
    <div className="ontario-radios__item">
      <input
        className="ontario-radios__input"
        id={val + "-input"}
        name={name}
        type="radio"
        onChange={onChange}
        defaultChecked={defaultChecked}
      />
      <label
        className="ontario-label ontario-radios__label"
        htmlFor={val + "-input"}
      >
        {val}
      </label>
    </div>
  );
};

export default Radio;
