import React from "react";
import "../css/main.css";

// @ts-ignore
import { HomebuyerHelperContent } from "./homebuyer-helper-content/homebuyer-helper-content.tsx";

export const HomebuyerHelper = (): JSX.Element => {
  return (
    <>
      <h1>Homebuyer Helper</h1>
      <HomebuyerHelperContent />
    </>
  );
};
