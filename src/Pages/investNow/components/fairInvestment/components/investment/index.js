import React from "react";
import "./investment.css";

const Investment = ({ index }) => {
  return (
    <>
      <h5 className="df jcsb">INVESTMENT{index}</h5>
      <h6 className="df jcsb mt30">
        <span>TFT Invested: $35</span> <span>TFT Price:30%</span>
      </h6>
      <div className="m0 df jcsb aic mb5">
        <span>Daily Returns (0.16%): 6 TFT</span>
        <div className="customOrangeBtn">CLAIM ALL</div>
      </div>
      <div className="m0 df jcsb aic mb5">
        <span>Monthly Bonus (5%): 2 TFT</span>
        <div className="appOrangeColor">DAYS LEFT:&nbsp;12</div>
      </div>
      <div className="m0 df jcsb aic">
        <span>Quarterly Dividend (10%):160 BUSD</span>
        <div className="appOrangeColor">DAYS LEFT:&nbsp;05</div>
      </div>
      <div className="mt20">
        <div className="withdraw-btn">
          <span>WITHDRAW INVESTMENT</span>
        </div>
      </div>
    </>
  );
};

export default Investment;
