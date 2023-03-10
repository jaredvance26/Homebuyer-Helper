import React from "react";
import { Flex, Input } from "../../../components";
import "../../../css/custom.css";
interface HelperInputsProps {
  priceOnChange: (event: any) => void;
  price: number | undefined;
  rateOnChange: (event: any) => void;
  interestRate: number | undefined;
  amountDownOnChange: (event: any) => void;
  amountDown: number | undefined;
  loanPeriodOnChange: (event: any) => void;
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
    <Flex className="helper-inputs-container">
      <Input
        className="helper-input"
        key="home-price"
        label="Home Price"
        onChange={priceOnChange}
        value={price}
        placeholder="$500,000"
        tooltip={true}
        tooltipContent="The purchase price of the home"
      />

      <Input
        className="helper-input"
        key="interest-rates"
        label="Interest Rates"
        onChange={rateOnChange}
        value={interestRate}
        placeholder="4.5%"
        tooltip={true}
        tooltipContent="The interest you are paying on the loan"
      />
      <Input
        className="helper-input"
        key="amount-down"
        label="Amount Down"
        onChange={amountDownOnChange}
        value={amountDown}
        placeholder="$100,000"
        tooltip={true}
        tooltipContent="Money you pay upfront on the house"
      />
      <Input
        className="helper-input"
        key="loan-period"
        label="Loan Period (years)"
        onChange={loanPeriodOnChange}
        value={loanPeriod}
        placeholder="30"
        tooltip={true}
        tooltipContent="Amount of years until loan is paid back"
      />
      <Input
        className="helper-input"
        key="loan-amount"
        label="Loan Amount"
        readOnly={true}
        value={loanAmount}
        placeholder="$400,000"
        tooltip={true}
        tooltipContent="Actual amount to pay back to loaner"
      />
    </Flex>
  );
};
