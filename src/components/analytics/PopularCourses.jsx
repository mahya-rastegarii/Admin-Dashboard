import { Favorite } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import Bars from "../charts/Bar/Bars";

import ChartContainer from "./ChartContainer";
import ChartData from "../charts/ChartData";

const PopularCourses = ({ chartWidth, boxWidth }) => {

  const {coursesData, monthChart} = ChartData();
  const { t } = useTranslation();

  const barsChartData = {
    chartData: coursesData,
    xLable: monthChart,
    widthChart: chartWidth,
    heightChart: 400,
    marginChart: { top: 50, bottom: 20, left: 10, right: 10 },
    //  layout:true
  };

  return (
    <Box width={boxWidth}>
      <ChartContainer icon={<Favorite />} title={t("charts.popularCourse")}>
        <Bars {...barsChartData} />
      </ChartContainer>
    </Box>
  );
};

export default PopularCourses;
