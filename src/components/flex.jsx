import React from "react";
import "../css/components.css";

export const Flex = ({ children, className = "" }) => {
  return <div className={`flex-container ${className}`}>{children}</div>;
};
