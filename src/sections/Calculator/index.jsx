import React from "react";
import { useState, useRef, useEffect } from "react";
import "./index.scss";
// import fetchData from "./api";

// fetchData();
const Calculator = ({ data }) => {
  const inputRef = useRef({});

  const {
    6783: {
      name,
      quote: {
        USD: { price },
      },
    },
  } = data;

  // console.log(name);

  // fetchData();
  // const {
  //   id,
  //   quote: {
  //     USD: { price },
  //   },
  // } = AXS;

  // console.log(price.toFixed(2));

  const [res, getRes] = useState(0);
  const [resUSD, getResUSD] = useState(0);
  const [resDel, getResDel] = useState(0);
  const [intrest, getIntrest] = useState(0);

  // const [resDel, getResDel] = useState(() => inputRef.current["p"]?.value);

  const r = 1.24 / 365;

  const compountFn = (ev) => {
    const inputDays = inputRef.current["t"].value;
    const inputVal = inputRef.current["p"].value;
    const res = (inputRef.current["p"].value * (r + 1) ** inputDays).toFixed(3);
    const intrest = (res - inputVal).toFixed(3);

    getRes((preVal) => (preVal = res));
    getResUSD(() => getUSD(res));
    getResDel(() => intrest);
    getIntrest(() => getUSD(intrest));
    // getResDel((prevRes) => (prevRes = res - prevRes));
  };

  const getUSD = (val) => {
    // Create our number formatter.
    var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return formatter.format(val * price.toFixed(2)); /* $2,500.00 */
  };

  return (
    <div className="cal">
      <h3>
        {name}: ${price.toFixed(2)}
      </h3>
      <h2>Compound Daily</h2>
      <label htmlFor="p">Prince AXS </label>
      <input
        ref={(el) => (inputRef.current["p"] = el)}
        type="number"
        name="p"
        onChange={compountFn}
      />
      <br />
      <label htmlFor="t">Staking Days </label>
      <input
        ref={(el) => (inputRef.current["t"] = el)}
        type="number"
        name="t"
        defaultValue="1"
        max="365"
        min="1"
        onChange={compountFn}
      />

      <p>
        Return AXS Total: <span style={{ color: "tomato" }}>{res}</span> AXS
      </p>
      <p>
        Return Total USD: <span style={{ color: "tomato" }}>{resUSD}</span>
      </p>
      <p>Intrest AXS: {resDel}</p>

      <p>Intrest USD: {intrest}</p>
    </div>
  );
};

export default Calculator;
