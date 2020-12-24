// src/components/Task.js
import React from "react";
import "../../../styles/components/buttons/buttons.scss";

export default function Button({
  data: { id, text, skin },
  onClickHandler,
  disabled,
  type,
  className,
}) {
  return (
    <button
      id={id}
      className={`ontario-button ontario-button--${skin} ${
        className ? className : ""
      }`}
      onClick={onClickHandler}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
}
