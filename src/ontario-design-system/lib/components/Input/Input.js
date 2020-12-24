import React from "react";
import "../../../styles/components/text-inputs/text-inputs.scss";

// import "./Input.scss";

export default function Input({
  data: { id, char, hintId, value, name },
  onChange,
  onBlur,
  className,
  disabled = false,
  style = {},
  defaultValue
}) {
  return (
    <input
      className={`ontario-input ontario-input${
        char && "--" + char + "-char-width"
      } ${className ? className : ""}`}
      aria-describedby={hintId && `ontario-hint-${hintId}`}
      type="text"
      id={id}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
      name={name}
      disabled={disabled}
      style={style}
      defaultValue={defaultValue}
    />
  );
}
