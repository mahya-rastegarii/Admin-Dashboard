import React from "react";
import { pieArcLabelClasses, PieChart } from "@mui/x-charts";

import { useAppContext } from "../../../context/app/app-context";
import "../chartStyle.css";

const Pie = ({ data, size }) => {
  const { themeColor, mode } = useAppContext();

  const typography = mode.palette.typography;

  return (
    //   <PieChart
    //   series={[
    //     {
    //       data: [
    //         { id: 0, value: 10, label: 'series A' },
    //         { id: 1, value: 15, label: 'series B' },
    //         { id: 2, value: 20, label: 'series C' },
    //       ],
    //     },
    //   ]}
    //   width={400}
    //   height={200}
    // />

    <PieChart
      // sx={{
      //   "& .css-1u0lry5-MuiChartsLegend-root ": {
      //     fill: "red"
      //   }
      // }}
      sx={{
        color: typography,
        fill: typography,
        [`& .${pieArcLabelClasses.root}`]: {
          fill: "white",
          fontWeight: "bold",
        },
      }}
      // fill="red"
      series={[
        {
          arcLabel: (item) => `${item.label} (${item.value})`,
          arcLabelMinAngle: 45,
          data,
        },
      ]}
      {...size}
    />
  );
};

export default Pie;
