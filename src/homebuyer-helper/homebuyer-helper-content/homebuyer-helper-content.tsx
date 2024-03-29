import React, { useEffect, useState } from "react";

// @ts-ignore
import { HelperInputs } from "./helper-inputs/helper-inputs.tsx";
// @ts-ignore
import { calculateMonthlyPayment } from "./etc/calculate-payment.ts";
// @ts-ignore
import { amortizationData } from "./homebuyer-helper-content.ts";
// @ts-ignore
import { calculateAmortizationData } from "./etc/calculate-amortization-content.ts";
import { Table } from "../../components";
// @ts-ignore
import { columns } from "../constants.ts";
// @ts-ignore
import { SummarySection } from "./summary-section/summary-section.tsx";

import { downloadCSV } from "./etc/download-as-csv.js";

import "../../css/custom.css";

export const HomebuyerHelperContent = (): JSX.Element => {
  const [price, setPrice] = useState<number>();
  const [interestRate, setInterestRate] = useState<number>();
  const [loanAmount, setLoanAmount] = useState<number>();
  const [amountDown, setAmountDown] = useState<number | undefined>(
    loanAmount ? loanAmount * 0.2 : undefined
  );
  const [loanPeriod, setLoanPeriod] = useState<number>();
  const [payment, setPayment] = useState<number | null>();
  const [amortizationData, setAmortizationData] = useState<amortizationData[]>(
    []
  );

  const interestPayments = amortizationData.map((data) =>
    Number(data.interest.replace(/[^0-9.-]+/g, ""))
  );

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
      const amortization = calculateAmortizationData(
        interestRate,
        loanAmount,
        loanPeriod,
        payment
      );
      setAmortizationData(amortization);
    } else {
      setPayment(null);
      setAmortizationData([]);
    }
  }, [interestRate, loanAmount, loanPeriod, payment]);

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
      {Boolean(payment) && (
        <SummarySection payment={payment} interest={interestPayments} />
      )}
      {Boolean(payment) && Boolean(amortizationData) && (
        <>
          <button className="download" onClick={downloadCSV}>
            Download as CSV
          </button>
          <Table columns={columns} data={amortizationData} />
        </>
      )}
    </>
  );
};
