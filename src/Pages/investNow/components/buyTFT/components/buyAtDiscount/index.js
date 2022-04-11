import React from "react";
import "./buyAtDiscount.css";
import bnbIcon from "../../../../../../Assets/bnbIcon.png";
import BondDiscount from "./components/bondDiscount";

const BuyAtDiscount = () => {
  return (
    <div>
      <BondDiscount headingIcon={bnbIcon} currency="BUSD" />
      <BondDiscount headingIcon={bnbIcon} currency="BNB" />
      <BondDiscount headingIcon={bnbIcon} currency="USDT" />
    </div>
  );
};

export default BuyAtDiscount;
