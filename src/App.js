import React from "react";
import "./styles.css";
import { Light } from "./Light";
import snowflake from "./snowflake.png";

export default function App() {
  return (
    <>
      <div className="snow-container">
        <img src={snowflake} alt="snowflake" />
        <img src={snowflake} alt="snowflake" />
        <img src={snowflake} alt="snowflake" />
        <img src={snowflake} alt="snowflake" />
        <img src={snowflake} alt="snowflake" />
        <img src={snowflake} alt="snowflake" />
        <img src={snowflake} alt="snowflake" />
        <img src={snowflake} alt="snowflake" />
        <img src={snowflake} alt="snowflake" />
      </div>
      <div className="App">
        <Light />

        <h1 className="text">MERRY CHRISTMAS!</h1>
        <h3 className="caption">AND HAPPY NEW YEAR</h3>
        <img src={snowflake} alt="snowflake" />
        <img src={snowflake} alt="snowflake" />
        <img src={snowflake} alt="snowflake" />
      </div>
    </>
  );
}
