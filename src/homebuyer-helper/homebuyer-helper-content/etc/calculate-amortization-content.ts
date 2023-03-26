// @ts-ignore
import { amortizationData } from "../homebuyer-helper-content.ts";

export const currencyConversion = (number: number) => {
  return number
    ? number.toLocaleString("en-US", { style: "currency", currency: "USD" })
    : number;
};

export const convertInt = (stringNumber: string) => {
  return parseFloat(stringNumber.replace(/[^\d.-]/g, ""));
};

export const calculateAmortizationData = (
  interestRate: number,
  loanAmount: number,
  loanPeriod: number,
  payment: number
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
