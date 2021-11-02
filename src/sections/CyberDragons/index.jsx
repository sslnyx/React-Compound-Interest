import React from "react";
import { useState, useRef } from "react";

const CyberDragons = ({ data }) => {
  const [reward, rewardCount] = useState(0);
  const [rewardx, rewardxCount] = useState(0);

  const mainStat = useRef();
  const n = useRef();

  //   const {
  //     9891: {
  //       name,
  //       quote: {
  //         USD: { price },
  //       },
  //     },
  //   } = data;

  const getRewards = () => {
    // console.log(mainStat.current.value);

    const curVal = (0.01 + (mainStat.current.value - 85) * 0.005) * 57600;

    rewardCount((preVal) => (preVal = curVal * 15));

    rewardxCount((preVal) => (preVal = curVal * n.current.value * 15));
    // console.log(reward);
  };

  return (
    <div>
      <h3>
        {data[9891].name}: ${data[9891].quote.USD.price.toFixed(2)}
      </h3>

      <h3>
        {data[12082].name}: ${data[12082].quote.USD.price.toFixed(6)}
      </h3>


      <h2>Cyber Dragons</h2>
      <label htmlFor="main">Main Stat: </label>
      <input
        ref={mainStat}
        type="number"
        name="main"
        min="85"
        onChange={getRewards}
      />
      <br />

      <label htmlFor="n">Number of Char: </label>
      <input ref={n} type="number" name="n" onChange={getRewards} />

      <p>{reward} G</p>
      <p>{rewardx} G</p>
      {/* <p>{data[12082].quote.USD.price}</p> */}
      <p>${reward * data[12082].quote.USD.price}</p>

      <p>${rewardx * data[12082].quote.USD.price}</p>
    </div>
  );
};

export default CyberDragons;
