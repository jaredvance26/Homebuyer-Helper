export const calculateMonthlyPayment = (
  interestRate: number,
  loanPeriod: number,
  loanAmount: number
) => {
  const pvif = Math.pow(1 + interestRate, loanPeriod);
  const pmt = (-interestRate * (loanAmount * pvif)) / (pvif - 1);

  return pmt.toFixed(2);
};
