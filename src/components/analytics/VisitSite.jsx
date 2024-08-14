import React from "react";
import ChartContainer from "./ChartContainer";

import { Person } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Bars from "../charts/Bar/Bars";

const VisitSite = ({ chartWidth, boxWidth }) => {

  const {t} = useTranslation();


  const visit =  [{ data: [35, 51, 74, 60, 80, 35, 86] }]; ;

  const days = [
    t("charts.days.sat"),
    t("charts.days.sun"),
    t("charts.days.mon"),
    t("charts.days.tues"),
    t("charts.days.wed"),
    t("charts.days.thurs"),
    t("charts.days.fri"),
  ];

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
