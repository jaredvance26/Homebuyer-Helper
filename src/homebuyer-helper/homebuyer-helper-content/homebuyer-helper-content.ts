export interface amortizationData {
  [x: string]: any;
  id: number;
  month: number;
  remainingLoanAmount: number;
  payment: number;
  interest: number;
  principle: number;
  loanAmountAfterPrinciple: number;
}

export interface Column {
  key: string;
  title: string;
}
