import React from "react";
import Label from "../Label/Label";
import Hint from "../Hint/Hint";
import PropTypes from "prop-types";
import "./Dropdown.scss";

// onBlur={(e) => onBlur(e)}
// onFocus={(e) => onFocus(e)}

export default function Dropdown({
  data: {
    id,
    name,
    placeholder,
    options,
    labelText,
    labelType,
    labelFlag,
    inputChar,
    hintText,
    hintId,
    selected,
  },
  onChange,
  onBlur,
  onFocus,
}) {
  return (
    <div className="ontario-form-group">
      <Label
        data={{ id, name, text: labelText, type: labelType, flag: labelFlag }}
      />
      {hintText && <Hint data={{ hintId, hintText }} />}

      <select
        className={`ontario-input${
          inputChar && "--" + inputChar + "-char-width"
          } ontario-dropdown`}
        id={id}
        name={name}
        onChange={(e) => onChange(e)}

        defaultValue={selected}
      >
        {options &&
          options.map((item, idx) => (
            <option key={idx} value={item.id}>
              {item.value}
            </option>
          ))}
      </select>
    </div>
  );
}

Dropdown.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.array,
    labelText: PropTypes.string,
    labelType: PropTypes.string,
    labelFlag: PropTypes.string,
    inputChar: PropTypes.string,
    hintText: PropTypes.string,
    hintId: PropTypes.string,
    selected: PropTypes.string,
  }),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
};
