import React from "react";
import footerLogo from "../../../../Assets/footer_logo.png";
import "./sideBar.css";

const SideBar = ({
  dashboard,
  buyTft,
  buyAtDiscount,
  buyAtMarket,
  fairInvestment,
  loanVault,
  oneFor10X,
  airDrop,
  setDashboard,
  setBuyTft,
  setBuyAtDiscount,
  setBuyAtMarket,
  setFairInvestment,
  setLoanVault,
  setOneFor10X,
  setAirDrop,
  handleBuyAtDiscountClick,
  handleBuyAtMarketClick,
}) => {
  const handleDashboardClick = () => {
    setDashboard(true);
    setBuyTft(false);
    setBuyAtDiscount(false);
    setBuyAtMarket(false);
    setFairInvestment(false);
    setLoanVault(false);
    setOneFor10X(false);
    setAirDrop(false);
  };
  const handleBuyTftClick = () => {
    setDashboard(false);
    setBuyTft(true);
    setBuyAtDiscount(false);
    setBuyAtMarket(false);
    setFairInvestment(false);
    setLoanVault(false);
    setOneFor10X(false);
    setAirDrop(false);
  };
  const handleFairInvestmentClick = () => {
    setDashboard(false);
    setBuyTft(false);
    setBuyAtDiscount(false);
    setBuyAtMarket(false);
    setFairInvestment(true);
    setLoanVault(false);
    setOneFor10X(false);
    setAirDrop(false);
  };
  const handleLoanVaultClick = () => {
    setDashboard(false);
    setBuyTft(false);
    setBuyAtDiscount(false);
    setBuyAtMarket(false);
    setFairInvestment(false);
    setLoanVault(true);
    setOneFor10X(false);
    setAirDrop(false);
  };
  const handleOneFor10XClick = () => {
    setDashboard(false);
    setBuyTft(false);
    setBuyAtDiscount(false);
    setBuyAtMarket(false);
    setFairInvestment(false);
    setLoanVault(false);
    setOneFor10X(true);
    setAirDrop(false);
  };
  const handleAirDropClick = () => {
    setDashboard(false);
    setBuyTft(false);
    setBuyAtDiscount(false);
    setBuyAtMarket(false);
    setFairInvestment(false);
    setLoanVault(false);
    setOneFor10X(false);
    setAirDrop(true);
  };

  return (
    <div className="sidebar-main-wrapper">
      {/* <div className="sidebar-logo-wrapper">
        <img src={footerLogo} alt="footerLogo" />
      </div> */}
      <div className="sidebar-links-wrapper">
        <ul>
          <li
            style={
              dashboard
                ? {
                    fontWeight: 600,
                  }
                : null
            }
            onClick={() => handleDashboardClick()}
          >
            <i className="ri-dashboard-fill"></i> Dashboard
          </li>
          <li>
            <i className="ri-secure-payment-fill"></i>{" "}
            <span
              onClick={() => handleBuyTftClick()}
              style={
                buyTft
                  ? {
                      fontWeight: 600,
                    }
                  : null
              }
            >
              Buy TFT
            </span>
            <ul className="sub-nav">
              <li
                onClick={() => handleBuyAtDiscountClick()}
                style={
                  buyAtDiscount
                    ? {
                        fontWeight: 600,
                      }
                    : null
                }
              >
                Buy At Discount
              </li>
              <li
                onClick={() => handleBuyAtMarketClick()}
                style={
                  buyAtMarket
                    ? {
                        fontWeight: 600,
                      }
                    : null
                }
              >
                Buy At Market
              </li>
              <li>Add TFT To Wallet</li>
            </ul>
          </li>
          <li
            onClick={() => handleFairInvestmentClick()}
            style={
              fairInvestment
                ? {
                    fontWeight: 600,
                  }
                : null
            }
          >
            <i className="ri-money-cny-circle-fill"></i> The Fair Investment
          </li>
          <li
            onClick={() => handleLoanVaultClick()}
            style={
              loanVault
                ? {
                    fontWeight: 600,
                  }
                : null
            }
          >
            <i className="ri-money-cny-box-line"></i> The Fair Loan
          </li>
          <li>
            <i className="ri-money-cny-circle-fill"></i> The Fair Game
            <ul className="sub-nav">
              <li
                onClick={() => handleOneFor10XClick()}
                style={
                  oneFor10X
                    ? {
                        fontWeight: 600,
                      }
                    : null
                }
              >
                One For 10X
              </li>
              <li>NFT Battle - coming soon</li>
            </ul>
          </li>
          <li
            onClick={() => handleAirDropClick()}
            style={
              airDrop
                ? {
                    fontWeight: 600,
                  }
                : null
            }
          >
            <i className="ri-chat-poll-line"></i>Airdrop
          </li>
          <li>
            <i className="ri-community-line"></i> Community Vote
            <br />
            <span style={{ fontSize: "14px", marginLeft: "35px" }}>
              coming soon
            </span>
          </li>
          <li>
            <i className="ri-bar-chart-grouped-line"></i> Chart
          </li>
          <li>
            <i className="ri-price-tag-2-line"></i> TFT Price
            <br />
            <span style={{ fontSize: "14px", marginLeft: "35px" }}>$25.50</span>
          </li>
        </ul>
      </div>
      <div className="sidebar-socialmedia-wrapper"></div>
    </div>
  );
};

export default SideBar;
