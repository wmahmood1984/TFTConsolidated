import React from "react";
import "./customInput.css";

const CustomInput = ({
  lable,
  enterLable,
  placeholder,
  value,
  belowLabel,
  rightButtonText,
}) => {
  return (
    <div className="form-group mb-0">
      <label className="sr-only" htmlFor="inlineFormInputGroupUsername">
        {/* BUSD */}
        {lable}
      </label>
      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            {/* Enter BUSD */}
            {enterLable}
          </div>
        </div>
        <input
          type="value"
          className="form-control"
          id="inlineFormInputGroupUsername"
          //   placeholder="BUSD AMOUNT"
          placeholder={placeholder}
          value={value}
        />
        <div className="max-btn">
          <span>{rightButtonText}</span>
        </div>
      </div>
      <p
        id="busdHelp"
        className="form-text text-muted busd-small-text mb-0"
        style={{ textAlign: "left" }}
      >
        {/* BUSD Available <span className="text-orange">0</span> */}
        {belowLabel} <span className="text-orange">{value}</span>
      </p>
    </div>
  );
};

export default CustomInput;
