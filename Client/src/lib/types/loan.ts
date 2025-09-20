export interface LoanApplication {
  id: string;
  propertyId: string;
  borrowerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    income: number;
    creditScore: number;
  };
  loanDetails: {
    loanAmount: number;
    loanType: 'conventional' | 'fha' | 'va' | 'investment';
    termYears: number;
    downPayment: number;
  };
  status: 'pending' | 'approved' | 'rejected' | 'in-review';
  submittedDate: string;
}

export interface LoanProduct {
  id: string;
  name: string;
  description: string;
  interestRate: number;
  minDownPayment: number;
  maxLoanAmount: number;
  termOptions: number[];
  requirements: string[];
}