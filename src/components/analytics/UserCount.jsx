import { Person2 } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import Line from "../charts/Line/Line";
import ChartContainer from "./ChartContainer";

const UserCount = ({ chartWidth, boxWidth }) => {
  const { t } = useTranslation();
  const numberOfUser = [30, 35, 40, 55, 60, 65, 60, 55, 50, 45, 40, 50];
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
  //   const monthChart = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور"];

  const LineChartData = {
    monthChart,
    data: numberOfUser,
    labelChart: "User ",
    colorChart: "#8884d8",
    widthChart: chartWidth,
    heightChart: 400,
    area: false,
    showMark: false,
  };

  return (
    <Box width={boxWidth}>
      <ChartContainer icon={<Person2 />} title={t("charts.userCount")}>
        <Line {...LineChartData} />
      </ChartContainer>
    </Box>
  );
};

export default UserCount;
