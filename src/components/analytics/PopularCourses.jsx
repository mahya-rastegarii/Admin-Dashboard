import { Favorite } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import Bars from "../charts/Bar/Bars";
import { useTranslation } from "react-i18next";
import ChartContainer from "./ChartContainer";

const PopularCourses = ({ chartWidth, boxWidth }) => {
  const {t} = useTranslation();
  const coursesData = [
    { data: [35, 46, 22, 32, 54, 66, 87, 49, 55, 87, 90, 43], label: "frontEnd" },
    { data: [33, 52, 15, 34, 56, 88, 76, 51, 40, 76, 89, 23], label: "backEnd" },
    { data: [25, 67, 39, 45, 37, 78, 98, 43, 40, 56, 80 ,90], label: "AI" },
    { data: [15, 88, 44, 25, 67, 14, 33, 42, 44, 55, 67, 87], label: "security" },
  ];

  //   const years = ["2021", "2022", "2023", "2024"];

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

  const barsChartData = {
    chartData : coursesData,
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
