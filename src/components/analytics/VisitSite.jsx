import React from "react";
import ChartContainer from "./ChartContainer";

import { Person } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Bars from "../charts/Bar/Bars";
import ChartData from "../charts/ChartData";


const VisitSite = ({ chartWidth, boxWidth }) => {

  const {visit, days} = ChartData();
  const {t} = useTranslation();


 

  const barsChartData = {
    chartData : visit,
    xLable: days,
    widthChart: chartWidth,
    heightChart: 400,
    marginChart: { top: 50, bottom: 20, left: 10, right: 10 },
    //  layout: false
  };
  return (
    <Box width={boxWidth}>
      <ChartContainer icon={<Person />} title={t("charts.visitSite")}>
        <Bars {...barsChartData} />
      </ChartContainer>
    </Box>
  );
};

export default VisitSite;
