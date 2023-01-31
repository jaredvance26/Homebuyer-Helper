import React, { useEffect, useState } from "react";
import { Flex, Input } from "../../components";

export const HomebuyerHelperContent = (): JSX.Element => {
  const [price, setPrice] = useState<number>();
  const [interestRate, setInterestRate] = useState<number>();
  const [loanAmount, setLoanAmount] = useState<number>();
  const [amountDown, setAmountDown] = useState<number | undefined>(
    loanAmount ? loanAmount * 0.2 : undefined
  );
  const [loanPeriod, setLoanPeriod] = useState<number>(30);

  const priceOnChange = (event) => {
    setPrice(event.target.value);
  };

  const rateOnChange = (event) => {
    setInterestRate(event.target.value);
  };

  const amountDownOnChange = (event) => {
    setAmountDown(event.target.value);
  };

  const loanPeriodOnChange = (event) => {
    setLoanPeriod(event.target.value);
  };

  useEffect(() => {
    if (price && amountDown) {
      setLoanAmount(price - amountDown);
    }
  }, [amountDown, price]);

  return (
    <Flex>
      <Input
        key="home-price"
        label="Home Price"
        onChange={priceOnChange}
        value={price}
      />
      <Input
        key="interest-rates"
        label="Interest Rates"
        onChange={rateOnChange}
        value={interestRate}
      />
      <Input
        key="amount-down"
        label="Amount Down"
        onChange={amountDownOnChange}
        value={amountDown}
      />
      <Input
        key="loan-period"
        label="Loan Period (years)"
        onChange={loanPeriodOnChange}
        value={loanPeriod}
      />
      <Input
        key="loan-amount"
        label="Loan Amount"
        readOnly={true}
        value={loanAmount}
      />
    </Flex>
  );
};
