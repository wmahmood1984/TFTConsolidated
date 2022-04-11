import React from "react";
import CustomInput from "../../../../../../../../Components/customInput";
import TftConversionReadOnlyInput from "../../../../../../../../Components/tftConversionReadOnlyInput";
import "./bondDiscount.css";

const BondDiscount = ({ headingIcon, currency }) => {
  return (
    <div className="bondDiscount-wraooer">
      <h4 className="bondDiscount-heading">
        <img src={headingIcon} alt="bnbIcon" />
        &nbsp;&nbsp;
        {currency}
      </h4>
      <h5 className="bondDiscountOnTFT">
        <span>Discount On TFT</span> <span>2%</span>
      </h5>
      <h5 className="bondDiscountOnTFT1">
        <span>TFT Price</span> <span>33%</span>
      </h5>

      <div className="mt30">
        <CustomInput
          lable="BUSD"
          enterLable={`Enter ${currency}`}
          placeholder={`${currency} AMOUNT`}
          value="0"
          belowLabel={`${currency} Available`}
          rightButtonText="Max"
        />

        <br />
        {/* Tft Conversion Start */}
        <div className="tft-conversion-wrapper">
          <div className="left">
            <TftConversionReadOnlyInput />
          </div>
          <div className="right">
            <div className="buyButton">
              <span>Buy tft</span>
            </div>
          </div>
        </div>
      </div>
      {/* Tft Conversion End */}
    </div>
  );
};

export default BondDiscount;
