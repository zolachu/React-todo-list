import React, { useState } from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  //   const maxVal = props.dataPoints
  //     .map((data) => data.value)
  //     .reduce((prevVal, currVal) => Math.max(prevVal, currVal), 0);
  const maxVal = Math.max(...props.dataPoints.map((data) => data.value));
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          data={dataPoint.value}
          maxVal={maxVal}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
