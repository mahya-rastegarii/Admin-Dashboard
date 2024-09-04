import { Person2 } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import Line from "../charts/Line/Line";
import ChartContainer from "./ChartContainer";
import ChartData from "../charts/ChartData";


const UserCount = ({ chartWidth, boxWidth }) => {

  const {numberOfUser, monthChart} = ChartData();
  const { t } = useTranslation();
 
 

  const LineChartData = {
    monthChart,
    data: numberOfUser,
    labelChart: "User ",
    colorChart: "#9c27b0",
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
