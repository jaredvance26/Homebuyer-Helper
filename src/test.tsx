import React from "react";

interface TestInterface {
  name: string;
}

export const Test = (props: TestInterface): JSX.Element => {
  const { name } = props;

  return <h1>{`Hello ${name}`}</h1>;
};
