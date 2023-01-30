import React, { useState } from "react";

import { Flex, Input } from "../components";

export const HomebuyerHelper = (): JSX.Element => {
  const [rate, setRate] = useState<number>();

  const onChange = (event) => {
    setRate(event.target.value);
  };

  console.log({ rate });
  return (
    <Flex>
      <Input
        key="interest-rates"
        label="Interest Rates"
        onChange={onChange}
        value={rate}
      />
    </Flex>
  );
};
