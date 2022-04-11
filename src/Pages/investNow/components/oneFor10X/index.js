import React, { useState } from "react";
import CustomInput from "../../../../Components/customInput";
import HistoryTable from "./components/historyTable";
import "./theFairWin.css";

const OneFor10X = () => {
  const [allHistory, setAllHistory] = useState(true);
  const [yourHistory, setYourHistory] = useState(false);

  const handleAllHistoryClick = () => {
    setAllHistory(true);
    setYourHistory(false);
  };
  const handleYourHistoryClick = () => {
    setAllHistory(false);
    setYourHistory(true);
  };

  return (
    <div className="theFairWin-main-wrapper">
      <div className="theFairWin-section-wrapper">
        <h5>One For 10X</h5>
        <p>Pick a Number From 0-9, the least bet wins. </p>
        <h5>IF YOU WIN, YOU GET 10X</h5>
        <p>Cost per Ticket: 0.1 TFT</p>
        <p className="tbl-top-p">
          <span>Draw Number: 427</span>
          <span>Date: DD-MM-yy</span>
          <span>Time: hh:mm:ss</span>
        </p>
        <table className="buyTickets-table">
          <tr className="tbl-row1-border">
            <td>Number</td>
            <td className="td2-border-right">No. Of Tickets</td>
            <td>Number</td>
            <td>No. of Tickets</td>
          </tr>
          <tr>
            <td>0</td>
            <td className="td2-border-right">
              <input type="number" />
            </td>
            <td>5</td>
            <td>
              <input type="number" />
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td className="td2-border-right">
              <input type="number" />
            </td>
            <td>6</td>
            <td>
              <input type="number" />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td className="td2-border-right">
              <input type="number" />
            </td>
            <td>7</td>
            <td>
              <input type="number" />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td className="td2-border-right">
              <input type="number" />
            </td>
            <td>8</td>
            <td>
              <input type="number" />
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td className="td2-border-right">
              <input type="number" />
            </td>
            <td>9</td>
            <td>
              <input type="number" />
            </td>
          </tr>
        </table>
        <p className="tbl-bottom-p">
          <span>NUMBER OF TICKETS: 9</span>
        </p>
        <div className="buyTickets-wrapper">
          <CustomInput
            lable="BUSD"
            enterLable={`Total TFT`}
            placeholder={`TFT AMOUNT`}
            value="0.9"
            belowLabel={`TFT Available In Wallet`}
            rightButtonText="Buy Tickets"
          />
        </div>
      </div>
      <div className="theFairWin-section-wrapper">
        <h5>Your Current Play</h5>
        <h5>Draw # 427</h5>
        <p>#1 x 3 Tickets =&gt; 0.27 TFT Positive Win</p>
        <p>#8 x 4 Tickets =&gt; 0.36 TFT Positive Win</p>
        <p>#3 x 2 Tickets =&gt; 0.18 TFT Positive Win</p>
      </div>
      <div className="theFairWin-section-wrapper">
        <h5>Are You A Winner</h5>
        <div className="checkNow-btn-wrapper">
          <div className="checkNow-btn">
            <span>CHECK NOW</span>
          </div>
        </div>
      </div>
      <div className="theFairWin-section-wrapper">
        <h5>FINISHED DRAWS</h5>
        <div className="history-buttons-wrapper">
          <div
            className="history-button"
            style={
              allHistory
                ? { paddingRight: "10px", backgroundColor: "#ECECEC" }
                : { paddingRight: "10px" }
            }
            onClick={() => handleAllHistoryClick()}
          >
            <span>ALL HISTORY</span>
          </div>
          <div
            className="history-button"
            style={
              yourHistory
                ? {
                    paddingRight: "10px",
                    borderLeft: "none",
                    backgroundColor: "#ECECEC",
                  }
                : { paddingRight: "10px", borderLeft: "none" }
            }
            onClick={() => handleYourHistoryClick()}
          >
            <span>YOUR HISTORY</span>
          </div>
        </div>
        {/* All and your History table */}
        {allHistory ? <HistoryTable tab="AllHistory" /> : null}
        {yourHistory ? <HistoryTable tab="yourHistory" /> : null}
      </div>
    </div>
  );
};

export default OneFor10X;
