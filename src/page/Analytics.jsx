import { Favorite, Person } from "@mui/icons-material";
import { Box, Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

import { useThemeContext } from "../context/theme/ThemeContext";
import UserCount from "../components/analytics/UserCount";
import VisitSite from "../components/analytics/VisitSite";
import Sales from "../components/analytics/Sales";
import PopularCourses from "../components/analytics/PopularCourses";

const Analytics = () => {
  const { theme } = useThemeContext();

  const bgColor = theme.palette.mode.boxBg;
  const typography = theme.palette.mode.typography;

  const numberOfUser = [20, 45, 35, 15, 60, 80];
  const monthChart = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور"];

  const LineChartData = {
    monthChart,
    numberOfUser,
    labelChart: "User ",
    colorChart: "#8884d8",
    widthChart: 800,
    heightChart: 550,
  };

  const coursesData = [
    { data: [35, 44, 24, 34], label: "frontEnd" },
    { data: [51, 6, 49, 30], label: "backEnd" },
    { data: [15, 25, 30, 50], label: "AI" },
    { data: [60, 50, 15, 25], label: "security" },
  ];

  const years = ["2021", "2022", "2023", "2024"];

  const barsChartData = {
    coursesData,
    years,
    widthChart: 700,
    heightChart: 550,
    marginChart: { top: 50, bottom: 20, left: 10, right: 10 },
  };
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  // const Charts = [
  //   {
  //     chart: <Pie />,
  //     icon: <Favorite />,
  //     title: "popular Course from past years",
  //   },
  //   {
  //     chart: <Bars {...barsChartData} />,
  //     icon:<Person />,
  //     title: "popular Course from past years",
  //   },
  //   {
  //     chart: <Line {...LineChartData} />,
  //     icon: <Person />,
  //     title: "popular Course from past years",
  //   },
  // ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 3,
      }}
    >
      {/* <Box component={Paper} elevation={2}  display="flex" flexDirection="column" justifyContent="center" alignItems="center" mx="auto" p={2} width="80%" mt={6} gap={7}>
  <Stack direction="row" width="90%" spacing={1} justifyContent="flex-start" alignItems="center">
  <Favorite/>
<Typography  variant="h6" sx={{fontWeight:"bold" }} >
  popular Course from past years
</Typography>
  </Stack>
<Bars {...barsChartData}/>
        
        </Box>
       
        <Box component={Paper} elevation={2}  display="flex" flexDirection="column" justifyContent="center" alignItems="center" mx="auto" p={2} width="80%" mt={6} gap={7}>
  <Stack direction="row" width="90%" spacing={1} justifyContent="flex-start" alignItems="center">
  <Person/>
<Typography  variant="h6" sx={{fontWeight:"bold" }} >
  count Users from past month
</Typography>
  </Stack>
  <Line {...LineChartData}/>
        </Box>
         */}

<Stack

    width="90%"
        direction={{ xs: "column", md: "row" }}
        // mt={2}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >

     
         <UserCount chartWidth={800} boxWidth="60%"/>
         <VisitSite chartWidth={450} boxWidth="40%"/>

    </Stack>

<Stack
   width="90%"
   direction={{ xs: "column", md: "column" }}
        
           mt={10}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
 
      <Sales chartWidth={1200} boxWidth="100%"/>
      <PopularCourses  chartWidth={1200}  boxWidth="100%"/>

    </Stack>
    </Box>
  );
};

export default Analytics;
