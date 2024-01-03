import React, { useState } from "react";
import "../Style/tippage.css";

function Tippage() {
  const [bill, setBill] = useState(null);
  const [tips, setTip] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [maz, setMaz] = useState(false);
  const [buttn, setbuttn] = useState(false);
  function billAmountHandler(e) {
    setBill(parseFloat(e.target.value) || null);
    setMaz(true);
    setbuttn(true);
    setDirection(e.target);
  }

  function tipAmountHandler(num) {
    let tip = (bill * num) / 100;
    setTip(tip);
  }

  function numberOfPeopleHandler(e) {
    setNumberOfPeople(parseInt(e.target.value, 10) || 0);
    setMaz(false);
  }
  function resethndle() {
    setBill("");
    setTip(0);
    setbuttn(false);
    setNumberOfPeople("");
    document.querySelector(".bill__inputbox").value = "";
    document.querySelector(".customtip").value = "";
    document.querySelector(".peoplecount").value = "";
  }
  function setDirection(input) {
    if (/\d/.test(input.value)) {
      input.style.direction = "ltr";
    } else {
      input.style.direction = "rtl";
    }
  }

  const tipPerPerson = tips / numberOfPeople || 0;
  const totalPerPerson = (bill + tips) / numberOfPeople || 0;

  return (
    <div className="cotainer">
      <div className="main__container">
        <div className="bill__div">
          <label className="billtext">Bill</label>
          <br />

          <span className="dollericon">$</span>
          <input
            onInput={(e) => setDirection(e.target)}
            type="text"
            placeholder="0"
            onChange={(e) => billAmountHandler(e)}
            className="bill__inputbox"
          />
          <br />
          <label className="option__tip">Select Tip %</label>
          <br />
          <div className="tip__buttons">
            <button className="tipbutton" onClick={() => tipAmountHandler(5)}>
              5%
            </button>
            <button className="tipbutton" onClick={() => tipAmountHandler(10)}>
              10%
            </button>
            <button className="tipbutton" onClick={() => tipAmountHandler(15)}>
              15%
            </button>
            <button className="tipbutton" onClick={() => tipAmountHandler(20)}>
              20%
            </button>
            <button className="tipbutton" onClick={() => tipAmountHandler(50)}>
              50%
            </button>
            <input
              type="text"
              className="customtip"
              placeholder="Custom"
              onChange={(e) =>
                tipAmountHandler(parseFloat(e.target.value) || 0)
              }
            />
          </div>
          <label className="labal__peoplenumber">
            Number of People{" "}
            {maz === true ? (
              <span className="zeromassage">Can,t be zero</span>
            ) : (
              ""
            )}{" "}
          </label>
          <br />
          <span className="dollericone">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M4.91113 22C4.91113 19.8783 5.75327 17.8434 7.25228 16.3431C8.75129 14.8429 10.7844 14 12.9043 14C15.0242 14 17.0573 14.8429 18.5563 16.3431C20.0553 17.8434 20.8975 19.8783 20.8975 22H4.91113ZM12.9043 13C9.59213 13 6.90942 10.315 6.90942 7C6.90942 3.685 9.59213 1 12.9043 1C16.2165 1 18.8992 3.685 18.8992 7C18.8992 10.315 16.2165 13 12.9043 13Z"
                fill="#A9C3C6"
              />
            </svg>
          </span>
          <input
            type="text"
            className={maz === true ? "peoplecountone" : "peoplecount"}
            placeholder="0"
            onChange={(e) => numberOfPeopleHandler(e)}
          />
        </div>
        <div className="calculator__div">
          <div className="tip__perperson">
            <span>
              Tip Amount
              <br />
              <span className="person">/Person</span>
            </span>
            <span className="price">${tipPerPerson.toFixed(2)}</span>
          </div>
          <div className="Total__perperson">
            <span>
              Total
              <br />
              <span className="person">/Person</span>
            </span>
            <span className="price">${totalPerPerson.toFixed(2)}</span>
          </div>
          <button
            className={buttn === true ? "resetbuttonn" : "resetbutton"}
            onClick={resethndle}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tippage;
