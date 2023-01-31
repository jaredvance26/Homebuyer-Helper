import React from "react";
import { Flex, Input } from "../../../components";

interface HelperInputsProps {
  priceOnChange: (event) => void;
  price: number | undefined;
  rateOnChange: (event) => void;
  interestRate: number | undefined;
  amountDownOnChange: (event) => void;
  amountDown: number | undefined;
  loanPeriodOnChange: (event) => void;
  loanPeriod: number | undefined;
  loanAmount: number | undefined;
}

export const HelperInputs = (props: HelperInputsProps): JSX.Element => {
  const {
    priceOnChange,
    price,
    rateOnChange,
    interestRate,
    amountDownOnChange,
    amountDown,
    loanPeriodOnChange,
    loanPeriod,
    loanAmount,
  } = props;

  return (
    <Flex>
      <Input
        key="home-price"
        label="Home Price"
        onChange={priceOnChange}
        value={price}
        placeholder="$500,000"
      />
      <Input
        key="interest-rates"
        label="Interest Rates"
        onChange={rateOnChange}
        value={interestRate}
        placeholder="4.5%"
      />
      <Input
        key="amount-down"
        label="Amount Down"
        onChange={amountDownOnChange}
        value={amountDown}
        placeholder="$100,000"
      />
      <Input
        key="loan-period"
        label="Loan Period (years)"
        onChange={loanPeriodOnChange}
        value={loanPeriod}
        placeholder="30"
      />
      <Input
        key="loan-amount"
        label="Loan Amount"
        readOnly={true}
        value={loanAmount}
        placeholder="$400,000"
      />
    </Flex>
  );
};
