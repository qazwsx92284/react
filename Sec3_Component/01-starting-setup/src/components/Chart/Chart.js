import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    // map dataPoint (obj) -> dataPoint.value (number) . this will return array of number
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    // .max(1,2,3,4) : .max() takes numbers(=list of arguments). not obj, arr..
    // so use ... spread operator to extract values in the array
    const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
