import React, { ReactElement } from "react";
import { Flex } from "../../../components";
import "../../../css/custom.css";

import { currencyConversion } from "../etc/calculate-amortization-content";

interface SummarySectionProp {
  payment: number;
  interest: number[];
}

export const SummarySection = (props: SummarySectionProp): ReactElement => {
  const { payment, interest } = props;

  const totalInterest = interest.reduce(
    (acc, currentValue) => acc + currentValue,
    0
  );

  return (
    <div>
      <Flex className="summary">
        <div>{`Monthly Payment ${currencyConversion(payment)}`}</div>
        <div>{`Total Interest Paid: ${currencyConversion(totalInterest)}`}</div>
      </Flex>
    </div>
  );
};
