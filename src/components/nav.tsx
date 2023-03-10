import React, { ReactElement } from "react";

interface navBarProps {
  items: string[];
}

export const NavBar = (props: navBarProps): ReactElement | null => {
  const { items } = props;

  return (
    <nav>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </nav>
  );
};
