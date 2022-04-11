import React from "react";
import LoanInvestment from "./components/loanInvestment";
import LoanTerm from "./components/loanTerm";
import "./loanVault.css";

const LoanVault = () => {
  return (
    <div className="loanVault-main-wrapper">
      <div className="loanTerm-wrapper">
        <LoanTerm
          headingText="30 Days Term"
          interestPaidPercentageValue="0.1"
          busdLoanAvailablePercentageValue="50"
        />
        <LoanTerm
          headingText="45 Days Term"
          interestPaidPercentageValue="0.2"
          busdLoanAvailablePercentageValue="50"
        />
      </div>
      <div className="loanInvestment-wrapper">
        <LoanInvestment
          headingText="30 Days Term"
          interestPaidPercentageValue="0.2"
          busdLoanAvailablePercentageValue="50"
        />
        <LoanInvestment
          headingText="30 Days Term"
          interestPaidPercentageValue="0.2"
          busdLoanAvailablePercentageValue="50"
        />
      </div>
    </div>
  );
};

export default LoanVault;
