import React from "react";

import { AttachMoney } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Line from "../charts/Line/Line";
import ChartContainer from "./ChartContainer";
import ChartData from "../charts/ChartData";


const Sales = ({ chartWidth, boxWidth }) => {

  const {sale, monthChart} = ChartData();

  const {t} = useTranslation();
  

 

 

  const LineChartData = {
    monthChart,
    data: sale,
    // labelChart: "Sales ",
    colorChart: "#00bcd4",
    widthChart: chartWidth,
    heightChart: 400,
    area: true,
    showMark: true,
  };

  
  return (
    <Box width={boxWidth}>
      <ChartContainer icon={<AttachMoney />} title={t("charts.sales")}>
        <Line {...LineChartData} />
      </ChartContainer>
    </Box>
  );
};

export default Sales;
