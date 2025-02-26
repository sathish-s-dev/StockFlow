import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import { mockApi, useGetCandlestickDataQuery } from "@/services/mockApi";

// const ChartComponent = () => {
//   const data = [
//     ["2000-06-05", 116],
//     ["2000-06-06", 129],
//     ["2000-06-07", 135],
//     ["2000-06-08", 86],
//     ["2000-06-09", 73],
//     ["2000-06-10", 85],
//     ["2000-06-11", 73],
//     ["2000-06-12", 68],
//     ["2000-06-13", 92],
//     ["2000-06-14", 130],
//     ["2000-06-15", 245],
//     ["2000-06-16", 139],
//     ["2000-06-17", 115],
//     ["2000-06-18", 111],
//     ["2000-06-19", 309],
//     ["2000-06-20", 206],
//     ["2000-06-21", 137],
//     ["2000-06-22", 128],
//     ["2000-06-23", 85],
//     ["2000-06-24", 94],
//     ["2000-06-25", 71],
//     ["2000-06-26", 106],
//     ["2000-06-27", 84],
//     ["2000-06-28", 93],
//     ["2000-06-29", 85],
//     ["2000-06-30", 73],
//     ["2000-07-01", 83],
//     ["2000-07-02", 125],
//     ["2000-07-03", 107],
//     ["2000-07-04", 82],
//     ["2000-07-05", 44],
//     ["2000-07-06", 72],
//     ["2000-07-07", 106],
//     ["2000-07-08", 107],
//     ["2000-07-09", 66],
//     ["2000-07-10", 91],
//     ["2000-07-11", 92],
//     ["2000-07-12", 113],
//     ["2000-07-13", 107],
//     ["2000-07-14", 131],
//     ["2000-07-15", 111],
//     ["2000-07-16", 64],
//     ["2000-07-17", 69],
//     ["2000-07-18", 88],
//     ["2000-07-19", 77],
//     ["2000-07-20", 83],
//     ["2000-07-21", 111],
//     ["2000-07-22", 57],
//     ["2000-07-23", 55],
//     ["2000-07-24", 60],
//   ];
//   const dateList = data.map(function (item) {
//     return item[0];
//   });
//   const valueList = data.map(function (item) {
//     return item[1];
//   });
//   const option = {
//     // Make gradient line here
//     visualMap: [
//       {
//         show: true,
//         type: "continuous",
//         seriesIndex: 0,
//         min: 0,
//         max: 400,
//       },
//     ],
//     title: [
//       {
//         left: "center",
//         text: "Gradient along the y axis",
//       },

//     ],
//     tooltip: {
//       trigger: "axis",
//     },
//     xAxis: [
//       {
//         data: dateList,
//         top: "0%",
//       },

//     ],
//     yAxis: [
//       {},

//     ],
//     grid: [
//       {
//         bottom: "10%",
//         top: "20%",
//       },

//     ],
//     series: [
//       {
//         type: "line",
//         showSymbol: true,
//         data: valueList,
//       },

//     ],
//   };
//   return (
//     <div className="min-h-[500px] max-w-screen-lg">
//       <ReactEcharts option={option} className="w-full h-full" />
//     </div>
//   );
// };

const ChartComponent = () => {
  const upColor = "#ec0000";
  const upBorderColor = "#8A0000";
  const downColor = "#00da3c";
  const downBorderColor = "#008F28";

  const dataCount = 1000;
  // const data = generateOHLC(dataCount);

  const { data: candlestick } = useGetCandlestickDataQuery();

  function getSign(
    data: DataItem[],
    dataIndex: number,
    openVal: number,
    closeVal: number,
    closeDimIdx: number
  ) {
    let sign;
    if (openVal > closeVal) {
      sign = -1;
    } else if (openVal < closeVal) {
      sign = 1;
    } else {
      sign =
        dataIndex > 0
          ? // If close === open, compare with close of last record
            +data[dataIndex - 1][closeDimIdx] <= closeVal
            ? 1
            : -1
          : // No record of previous, set to be positive
            1;
    }

    return sign;
  }

  const data = candlestick?.map((item) => {
    return [
      echarts.format.formatTime("yyyy-MM-dd\nhh:mm:ss", item.date),
      item.open,
      item.close,
      item.high,
      item.low,
      item.volume,
      -1,
    ];
  });

  const option = {
    dataset: { source: data },
    title: {
      text: "Data Amount: " + echarts.format.addCommas(dataCount),
    },
    tooltip: {
      trigger: "axis",
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: false,
        },
      },
    },
    grid: [
      {
        left: "5%",
        right: "10%",
        height: 250,
        bottom: 100,
      },
    ],
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        // inverse: true,
        axisLine: { onZero: false },
        splitLine: { show: false },
        min: "dataMin",
        max: "dataMax",
      },
    ],
    yAxis: [
      {
        scale: true,
      },
    ],
    dataZoom: [
      {
        type: "inside",
        xAxisIndex: [0, 1],
        start: 10,
        end: 100,
      },
    ],
    visualMap: {
      show: false,
      seriesIndex: 1,
    },
    series: [
      {
        type: "candlestick",
        itemStyle: {
          color: upColor,
          color0: downColor,
          borderColor: upBorderColor,
          borderColor0: downBorderColor,
        },
      },
    ],
  };

  type DataItem = [string, number, number, number, number, number, number];

  function generateOHLC(count: number) {
    const data: DataItem[] = [];

    let xValue = +new Date(2011, 0, 1);
    const minute = 60 * 1000;
    let baseValue = Math.random() * 100;
    const boxVals = new Array(4);
    const dayRange = 12;

    for (let i = 0; i < count; i++) {
      baseValue = baseValue + Math.random() * 20 - 10;

      for (let j = 0; j < 4; j++) {
        boxVals[j] = (Math.random() - 0.5) * dayRange + baseValue;
      }
      boxVals.sort();

      const openIdx = Math.round(Math.random() * 3);
      let closeIdx = Math.round(Math.random() * 2);
      if (closeIdx === openIdx) {
        closeIdx++;
      }
      const volumn = boxVals[3] * (1000 + Math.random() * 500);

      // ["date", 'open', 'close', 'lowest', 'highest', 'volumn', 'sign']
      // [1, 4, 3, 2]
      data[i] = [
        echarts.format.formatTime("yyyy-MM-dd\nhh:mm:ss", (xValue += minute)),
        +boxVals[openIdx].toFixed(2), // open
        +boxVals[3].toFixed(2), // highest
        +boxVals[0].toFixed(2), // lowest
        +boxVals[closeIdx].toFixed(2), // close
        +volumn.toFixed(0),
        getSign(data, i, +boxVals[openIdx], +boxVals[closeIdx], 4), // sign
      ];
    }

    console.log(data);

    return data;

    function getSign(
      data: DataItem[],
      dataIndex: number,
      openVal: number,
      closeVal: number,
      closeDimIdx: number
    ) {
      let sign;
      if (openVal > closeVal) {
        sign = -1;
      } else if (openVal < closeVal) {
        sign = 1;
      } else {
        sign =
          dataIndex > 0
            ? // If close === open, compare with close of last record
              +data[dataIndex - 1][closeDimIdx] <= closeVal
              ? 1
              : -1
            : // No record of previous, set to be positive
              1;
      }

      return sign;
    }
  }

  return (
    <div className="min-h-[500px] max-w-screen-lg">
      <ReactEcharts option={option} className="w-full h-full" />
    </div>
  );
};

export default ChartComponent;
