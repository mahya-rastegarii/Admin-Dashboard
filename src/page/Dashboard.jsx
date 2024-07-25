import {
  ArrowForward,
  Favorite,
  People,
  PeopleAlt,
  School,
} from "@mui/icons-material";
import { Box, Button, Paper, Stack, styled, Typography } from "@mui/material";
import React from "react";
import Counter from "../components/Counter";

import {
  LineChart,
  lineElementClasses,
  markElementClasses,
} from "@mui/x-charts";
import { Link } from "react-router-dom";
import DashboardBox from "../components/box/DashboardBox";
import Line from "../components/charts/Line";
import NewCourse from "../components/course/NewCourse";
import NewUser from "../components/user/NewUser";
import { useThemeContext } from "../context/theme/ThemeContext";

const Dashboard = () => {
  const { theme } = useThemeContext();
  // const iconColor = theme.palette.mode.typography;
  const iconColor = theme.palette.primary.dark;
  const boxBgColor = theme.palette.mode.boxBg;
  const typography = theme.palette.mode.typography;
  const linkColor = theme.palette.primary.dark;

  const CustomChart = styled(LineChart)(() => ({
    [`& .${lineElementClasses.root}`]: {
      stroke: "#8884d8",
      strokeWidth: 2,
    },
    [`& .${markElementClasses.root}`]: {
      stroke: "#8884d8",
      scale: "0.6",
      fill: "#fff",
      strokeWidth: 0,
    },
  }));

  const BoxContent = [
    {
      id: 1,
      title: " course ",
      count: 11,
      num: 1,

      icon: <School sx={{ fontSize: 50, color: iconColor }} />,
    },
    {
      id: 2,
      title: " user",
      count: 64,
      num: 1,
      icon: <PeopleAlt sx={{ fontSize: 50, color: iconColor }} />,
    },
    {
      id: 3,
      title: "enjoy ",
      count: 70,
      percent: "%",
      num: 10,
      icon: <Favorite sx={{ fontSize: 50, color: iconColor }} />,
    },

    // {
    //     id: 4,
    //     title:"میزان فروش",
    //     count: 350,
    //     num:10,
    //     icon: <MonetizationOn sx={{ fontSize: 50 }}/>
    // }
  ];

  const numberOfUser = [20, 45, 35, 15, 60, 80];
  const monthChart = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور"];

  const chartData = {
    monthChart,
    numberOfUser,
    labelChart: "number Of User added",
    colorChart: theme.palette.primary.main,
    widthChart: 900,
    heightChart: 400,
  };

  const componentData = [
    {
      id: 1,
      title: "New user",
      data: <NewUser />,
      width: { xs: "100%", md: "30%" },
      icon: <People />,
      link: "/user",
    },

    {
      id: 2,
      title: "New Course",
      data: <NewCourse />,
      width: { xs: "100%", md: "70%" },
      icon: <School />,
      link: "/course",
    },
  ];

  return (
    <Box>
      <Box
        mx="auto"
        display="flex"
        // width="100%"
         flexDirection={{xs:"column", md: "row"}}
        gap={4}
        // gridTemplateColumns="repeat(3, 1fr)"
        maxWidth="md"

        alignItems="center"
        justifyContent="center"
      >
        {BoxContent.map((item) => (
          <DashboardBox item={item} key={item.id}>
            <Counter count={item.count} number={item.num} />
          </DashboardBox>
        ))}
      </Box>
      {/* <Box
        component={Paper}
        square={false}
        elevation={3}
        sx={{
          display: "flex",
          marginX: "auto",
          borderRadius: 2,
          padding: 3,
          marginTop: 6,
          backgroundColor: boxBgColor,
        }}
      >
        <Line {...chartData} />
      </Box> */}

      <Stack
        direction={{ xs: "column", md: "row" }}
        mt={7}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        {componentData.map((item) => (
          <Box
            key={item.id}
            component={Paper}
            square={false}
            elevation={3}
            width={item.width}
            
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              paddingTop: 2,
              borderRadius: 2,
              backgroundColor: boxBgColor,
             
            
            
            }}
          >
            <Stack
               direction={{ sx:"column", sm:"row"}}
              width="100%"
              alignItems={{sx:"flex-start", sm:"center"}}
              justifyContent="space-between"
            >
              <Stack
                display="flex"
                alignItems="center"
                direction="row"
                spacing={1}
                sx={{ paddingX: 2, marginBottom: 2, color: typography }}
              >
                {item.icon}
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "bold" }}
                >
                  {item.title}
                </Typography>
              </Stack>
             <Stack  
             display="flex"
                alignItems="center"
                direction="row"
                >
              <Button
                component={Link}
                endIcon={<ArrowForward />}
                sx={{ marginX: 1, color: linkColor, fontWeight: "bold", }}
                to={item.link}
              >
                View All
              </Button>
              </Stack>
            </Stack>
            {item.data}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Dashboard;
