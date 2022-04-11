import React from "react";
import CustomInput from "../../../../Components/customInput";
import InvesNowContentBox from "../../../../Components/invesNowContentBox";
import Investment from "./components/investment";
import "./fairInvestment.css";

const FairInvestment = () => {
  return (
    <>
      <InvesNowContentBox>
        <h5 className="df jcsb">
          <span>TFT Price: $35</span> <span>TFT Stake Holders:30%</span>
        </h5>
        <div className="investNow-btn-wrapper">
          <h4 className="investNow-heading mt30">INVEST NOW</h4>
        </div>
        <div className="mt30">
          <CustomInput
            lable="BUSD"
            enterLable={`Enter TFT`}
            placeholder={`TFT AMOUNT`}
            value="0"
            belowLabel={`TFT Available`}
          />
        </div>
        <div className="invest-approve-btn-wrapper">
          <div className="invest-approve-btn">
            <span>INVEST</span>
          </div>
        </div>
        <div className="p0 tal m0" style={{ marginTop: "20px" }}>
          <span>Total TFT Invested: 135 TFT</span>
        </div>
        <div className="m0 df jcsb aic">
          <span>Total Daily Returns To Claim: 20 TFT</span>
          <div className="customOrangeBtn">CLAIM ALL</div>
        </div>
      </InvesNowContentBox>
      <InvesNowContentBox>
        <Investment index={1} />
      </InvesNowContentBox>
      <InvesNowContentBox>
        <Investment index={2} />
      </InvesNowContentBox>
      <InvesNowContentBox>
        <Investment index={3} />
      </InvesNowContentBox>
    </>
  );
};

export default FairInvestment;
