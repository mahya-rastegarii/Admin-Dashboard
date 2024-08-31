import React from "react";

import { LineChart } from "@mui/x-charts";
import { useAppContext } from "../../../context/app/app-context";

import "../chartStyle.css";

const Line = ({
  data,
  monthChart,
  labelChart,
  colorChart,
  widthChart,
  heightChart,
  area,
  showMark,
}) => {
  const { themeColor, mode } = useAppContext();

  const typography = mode.palette.typography;
  const borderColor = mode.palette.borderColor;

  return (
    <LineChart
      sx={{
        fill: typography,

        direction: "ltr",
        "& .MuiChartsAxis-line": {
          stroke: typography,
        },


      }}
      xAxis={[{ data: monthChart, scaleType: "point" }]}
      series={[
        {
          data: data,
          // label:labelChart,
          color: colorChart,
          showMark: showMark,
          area: area,
        },
      ]}
      width={widthChart}
      height={heightChart}
    />
  );
};

export default Line;
