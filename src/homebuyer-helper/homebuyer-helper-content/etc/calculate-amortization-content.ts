// @ts-ignore
import { amortizationData } from "../homebuyer-helper-content.ts";

const currencyConversion = (number) => {
  return number
    ? number.toLocaleString("en-US", { style: "currency", currency: "USD" })
    : number;
};

const convertInt = (stringNumber) => {
  return parseFloat(stringNumber.replace(/[^\d.-]/g, ""));
};

export const calculateAmortizationData = (
  interestRate,
  loanAmount,
  loanPeriod,
  payment
) => {
  let amortizationData: amortizationData[] = [];

  for (let i = 1; i < loanPeriod * 12 + 1; i++) {
    let data: amortizationData;

    const month = i;
    const remainingLoanAmount =
      month === 1
        ? loanAmount
        : convertInt(amortizationData[i - 2].loanAmountAfterPrinciple);
    const interest = ((interestRate * 0.01) / 12) * remainingLoanAmount;
    const principle = payment - interest;
    const loanAmountAfterPrinciple = remainingLoanAmount - principle;

    data = {
      month: month,
      remainingLoanAmount: currencyConversion(remainingLoanAmount),
      payment: currencyConversion(payment),
      interest: currencyConversion(interest),
      principle: currencyConversion(principle),
      loanAmountAfterPrinciple: currencyConversion(loanAmountAfterPrinciple),
    };
    amortizationData.push(data);
  }
  return amortizationData;
};
