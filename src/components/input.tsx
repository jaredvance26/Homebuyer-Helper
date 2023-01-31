import React from "react";
import "../css/components.css";

interface inputInterface {
  key: string;
  label: string;
  onChange: () => void;
  readOnly?: boolean;
  value: string | number;
  placeholder?: string;
}

export const Input = (props: inputInterface): JSX.Element => {
  const { key, label, onChange, readOnly = false, value, placeholder } = props;

  return (
    <div className="input-label">
      <label htmlFor={key}>{label}</label>
      <input
        type="text"
        name={key}
        onChange={onChange}
        value={value}
        readOnly={readOnly}
        placeholder={placeholder}
      />
    </div>
  );
};
