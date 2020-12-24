import React from "react";
import Input from "../Input/Input";
import Label from "../Label/Label";
import Hint from "../Hint/Hint";
import { idGenerator } from "../../utils/idGenerator";

const defaultId = idGenerator();

export default function TextInput({
  data: {
    id = defaultId,
    labelText,
    labelType,
    labelFlag,
    inputChar,
    hintText,
    hintId,
    error,
    value,
    name
  },
  onChange,
  onBlur
}) {
  return (
    <div
      className={`ontario-form-group ${error ? "ontario-TextInput-error" : ""}`}
    >
      <Label data={{ id, text: labelText, type: labelType, flag: labelFlag }} />
      {hintText && <Hint data={{ hintId, hintText }} />}
      {error && <div className="ontario-TextInput-errorText">{error}</div>}
      <Input
        data={{ char: inputChar, id: id, hintId: hintId, value, name }}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}
