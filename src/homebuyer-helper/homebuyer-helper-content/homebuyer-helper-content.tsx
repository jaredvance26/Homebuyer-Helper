import React, { useEffect, useState } from "react";
// @ts-ignore
import { HelperInputs } from "./helper-inputs/helper-inputs.tsx";
// @ts-ignore
import { calculateMonthlyPayment } from "./etc/calculate-payment.ts";

export const HomebuyerHelperContent = (): JSX.Element => {
  const [price, setPrice] = useState<number>();
  const [interestRate, setInterestRate] = useState<number>();
  const [loanAmount, setLoanAmount] = useState<number>();
  const [amountDown, setAmountDown] = useState<number | undefined>(
    loanAmount ? loanAmount * 0.2 : undefined
  );
  const [loanPeriod, setLoanPeriod] = useState<number>();
  const [payment, setPayment] = useState<number | null>();

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

  useEffect(() => {
    if (interestRate && loanPeriod && loanAmount) {
      const pmt = parseFloat(
        calculateMonthlyPayment(
          (interestRate * 0.01) / 12,
          loanPeriod * 12,
          -loanAmount
        )
      );
      setPayment(pmt);
    } else {
      setPayment(null);
    }
  }, [interestRate, loanAmount, loanPeriod]);

  return (
    <>
      <HelperInputs
        priceOnChange={priceOnChange}
        price={price}
        rateOnChange={rateOnChange}
        interestRate={interestRate}
        amountDownOnChange={amountDownOnChange}
        amountDown={amountDown}
        loanPeriodOnChange={loanPeriodOnChange}
        loanPeriod={loanPeriod}
        loanAmount={loanAmount}
      />
      {Boolean(payment) && `Payment: ${payment}`}
    </>
  );
};
