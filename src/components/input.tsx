import React from "react";
import { Flex, Tooltip } from ".";
import "../css/components.css";

interface inputInterface {
  className?: string;
  key: string;
  label: string;
  onChange: () => void;
  readOnly?: boolean;
  value: string | number;
  placeholder?: string;
  tooltip?: boolean;
  tooltipContent: string;
}

export const Input = (props: inputInterface): JSX.Element => {
  const {
    className,
    key,
    label,
    onChange,
    readOnly = false,
    value,
    placeholder,
    tooltip,
    tooltipContent,
  } = props;

  return (
    <div className={`input-label ${className}`}>
      <label htmlFor={key}>
        <div className="flex-tooltip">
          {label}
          {tooltip && <Tooltip content={tooltipContent} />}
        </div>
      </label>
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
