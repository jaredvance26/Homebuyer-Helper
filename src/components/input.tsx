import React from "react";
import "../css/components.css";

interface TestInterface {
  key: string;
  label: string;
  onChange: () => void;
  value: string | number;
}

export const Input = (props: TestInterface): JSX.Element => {
  const { key, label, onChange, value } = props;

  return (
    <div className="input-label">
      <label htmlFor={key}>{label}</label>
      <input type="text" name={key} onChange={onChange} value={value} />
    </div>
  );
};
