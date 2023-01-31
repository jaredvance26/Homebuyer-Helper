import React from "react";
import "../css/components.css";

interface inputInterface {
  key: string;
  label: string;
  onChange: () => void;
  readOnly?: boolean;
  value: string | number;
}

export const Input = (props: inputInterface): JSX.Element => {
  const { key, label, onChange, readOnly = false, value } = props;

  return (
    <div className="input-label">
      <label htmlFor={key}>{label}</label>
      <input
        type="text"
        name={key}
        onChange={onChange}
        value={value}
        readOnly={readOnly}
      />
    </div>
  );
};
