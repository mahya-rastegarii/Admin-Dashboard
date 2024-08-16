import { Favorite, People, PeopleAlt, School } from "@mui/icons-material";
import { Box, styled } from "@mui/material";
import {
  LineChart,
  lineElementClasses,
  markElementClasses,
} from "@mui/x-charts";
import React, { Suspense, useState } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import DashboardBox from "../components/box/DashboardBox";
import Counter from "../components/Counter";
import { supabase } from "../core/createClient";
// import Line from "../components/charts/Line";
import NewCourse from "../components/course/NewCourse";
import NewUser from "../components/user/NewUser";

import { useTranslation } from "react-i18next";
import Sales from "../components/analytics/Sales";
import VisitSite from "../components/analytics/VisitSite";
import ContainerData from "../components/dashboard/ContainerData";
import LoadComponent from "../components/Loading/LoadComponent";
import { useAppContext } from "../context/app/app-context";

const Dashboard = () => {
  const data = useLoaderData();
  // const {chartValue, setChartValue}= useChartContext();
  const { mode, themeColor } = useAppContext();
  const { t } = useTranslation();

  const iconColor = themeColor.palette.primary.dark;
  const linkColor = themeColor.palette.primary.dark;
  const boxBgColor = mode.palette.boxBg;
  const typography = mode.palette.typography;

  const [newUser, setNewUser] = useState();
  const [newCourse, setNewCourse] = useState();
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
      title: t("dashboard.dashboardBox.course"),
      count: 12,
      num: 1,

      icon: <School sx={{ fontSize: 50, color: typography }} />,
    },
    {
      id: 2,
      title: t("dashboard.dashboardBox.user"),
      count: 64,
      num: 1,
      icon: <PeopleAlt sx={{ fontSize: 50, color: typography }} />,
    },
    {
      id: 3,
      title: t("dashboard.dashboardBox.liked"),
      count: 70,
      percent: "%",
      num: 10,
      icon: <Favorite sx={{ fontSize: 50, color: typography }} />,
    },
  ];

  const userComponent = {
    title: t("dashboard.NewUsersTitle"),

    width: { xs: "100%", md: "30%" },
    icon: <People />,
    link: "/user",
  };

  const courseComponent = {
    title: t("dashboard.NewCourseTitle"),

    width: { xs: "100%", md: "70%" },
    icon: <School />,
    link: "/course",
  };

  return (
    <Box>
      <Box
        mx="auto"
        display="flex"
        // width="100%"
        flexDirection={{ xs: "column", md: "row" }}
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

      <Box
        width="100%"
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        mt={6}
        gap={2}
        alignItems="center"
        justifyContent="center"
      >
        <Sales chartWidth={800} boxWidth="60%" />

        <VisitSite chartWidth={450} boxWidth="40%" />
      </Box>

      <Box
        flexDirection={{ xs: "column", md: "row" }}
        display="flex"
        mt={3}
        gap={2}
      >
        <ContainerData {...userComponent}>
          <Suspense fallback={<LoadComponent />}>
            <Await resolve={data.newUser}>
              {(loadUser) => <NewUser newUser={loadUser} />}
            </Await>
          </Suspense>
        </ContainerData>

        <ContainerData {...courseComponent}>
          <Suspense fallback={<LoadComponent />}>
            <Await resolve={data.newCourse}>
              {(loadCourse) => <NewCourse newCourse={loadCourse} />}
            </Await>
          </Suspense>
        </ContainerData>
      </Box>
    </Box>
  );
};

export async function NewDataLoader() {
  return defer({
    newUser: fetchNewUser(),

    newCourse: fetchNewCourse(),
  });
}

const fetchNewUser = async () => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .order("date", { ascending: false })
    .limit(7);
  // console.log("limit", data)
  // setNewUser(data)
  return data;
};

const fetchNewCourse = async () => {
  const { data, error } = await supabase
    .from("course")
    .select("*")
    .order("lastUpdate", { ascending: false })
    .limit(5);
  // console.log("limit", data)
  // setNewCourse(data)
  return data;
};

export default Dashboard;
