import { useState } from "react";
import ReactApexChart from "react-apexcharts";

import { stocksArray } from "../../../data/stocks";

const ApexChart = () => {
  console.log(stocksArray[0].values);

  const data = stocksArray[0].values.map((item) => {
    return {
      x: new Date(item.datetime),
      y: [item.open, item.high, item.low, item.close],
    };
  });

  const [state, setState] = useState({
    series: [
      {
        data,
      },
    ],
  });

  console.log(setState);

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "candlestick",
      height: 300,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    title: {
      text: "",
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="w-full">
      <div id="chart">
        <ReactApexChart
          options={options}
          series={state.series}
          type="candlestick"
          height={300}
          width={"98%"}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
