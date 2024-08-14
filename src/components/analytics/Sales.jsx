import React from "react";

import { AttachMoney } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Line from "../charts/Line/Line";
import ChartContainer from "./ChartContainer";
// import { useChartContext } from '../../context/chart/ChartContext'

const Sales = ({ chartWidth, boxWidth }) => {
  const {t} = useTranslation();
  //  const {chartValue}= useChartContext()

  const sale = [30, 55, 60, 42, 85, 50, 44, 56, 76, 40, 35, 55];

  const monthChart = [
    t("charts.month.jan"),
    t("charts.month.feb"),
    t("charts.month.mar"),
    t("charts.month.apr"),
    t("charts.month.may"),
    t("charts.month.jun"),
    t("charts.month.jul"),
    t("charts.month.aug"),
    t("charts.month.sep"),
    t("charts.month.oct"),
    t("charts.month.nov"),
    t("charts.month.dec"),
  ];

  const LineChartData = {
    monthChart,
    data: sale,
    // labelChart: "Sales ",
    colorChart: "#8884d8",
    widthChart: chartWidth,
    heightChart: 400,
    area: true,
    showMark: true,
  };

  // useEffect(()=>{
  //   console.log('chartValue', chartValue)
  // },[])
  return (
    <Box width={boxWidth}>
      <ChartContainer icon={<AttachMoney />} title={t("charts.sales")}>
        <Line {...LineChartData} />
      </ChartContainer>
    </Box>
  );
};

export default Sales;
