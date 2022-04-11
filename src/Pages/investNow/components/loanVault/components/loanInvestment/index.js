import React from "react";
import CustomInput from "../../../../../../Components/customInput";
import LinearTimer from "../../../../../../Components/linearTimer";
import "./loanInvestment.css";

const LoanInvestment = ({
  headingText,
  interestPaidPercentageValue,
  busdLoanAvailablePercentageValue,
}) => {
  return (
    <div className="loanTerm-main-wrapper">
      <div className="term-title-wrapper">
        {/* <h5>30 Days Term</h5> */}
        <h5>{headingText}</h5>
      </div>
      <div className="linearTimer-wrapper">
        <LinearTimer />
      </div>
      <div className="tftDeposited-wrapper">
        <p>
          TFT Deposited: 100 TFT
          <br />
          0.1% Daily Investment Earned: 3 TFT
        </p>
        <p>
          To Withdraw TFT, Repay BUSD Loan:{" "}
          <span className="orange-color">30 BUSD</span>
        </p>
      </div>
      <div className="depositApprove-btn-wrapper">
        <div className="deposit-Approve-btn">
          <span>REPAY</span>
        </div>
      </div>
    </div>
  );
};

export default LoanInvestment;
