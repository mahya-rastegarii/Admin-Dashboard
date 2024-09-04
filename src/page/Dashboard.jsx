import { Favorite, People, PeopleAlt, School } from "@mui/icons-material";
import { Box, Stack, styled } from "@mui/material";
import {
  LineChart,
  lineElementClasses,
  markElementClasses,
} from "@mui/x-charts";
import React, { Suspense, useState } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import DashboardBox from "../components/box/DashboardBox";
import { supabase } from "../core/createClient";

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
 
  const { mode, language  } = useAppContext();
  const { t } = useTranslation();

 
  const typography = mode.palette.typography;



  
 

  const BoxContent = [
    {
      id: 1,
      title: t("dashboard.dashboardBox.course"),
      count: 50,
      before: language === "en" && "+",
      after: language === "fa" && "+",
      icon: <School sx={{ fontSize: 50, color: typography }} />,
    },
    {
      id: 2,
      title: t("dashboard.dashboardBox.user"),
      count: 600,
      before: language === "en" && "+",
      after: language === "fa" && "+",

      icon: <PeopleAlt sx={{ fontSize: 50, color: typography }} />,
    },
    {
      id: 3,
      title: t("dashboard.dashboardBox.liked"),
      count: 70,
      before: language === "fa" && "%",
      after: language === "en" && "%",
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
    <Box px={{xs: 2, md: 4}}>
      <Box
        mx="auto"
        display="flex"
        width="100%"
        flexDirection={{ xs: "column", md: "row" }}
        gap={4}
       
        maxWidth="md"
        alignItems="center"
        justifyContent="center"
      >
        {BoxContent.map((item) => (
          <DashboardBox item={item} key={item.id}>
            {
              item.count
            }
          </DashboardBox>
        ))}
      </Box>

 

      <Stack
        width="100%"
    
        direction={{ xs: "column", md: "row" }}
        mt={6}
        gap={2}
        alignItems="center"
        justifyContent="center"
      >
        <Sales chartWidth={800} boxWidth={{xs:"100%", md:"60%"}} />

        <VisitSite chartWidth={450} boxWidth={{xs:'100%', md:"40%"}} />
      </Stack>

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
  
  return data;
};

const fetchNewCourse = async () => {
  const { data, error } = await supabase
    .from("course")
    .select("*")
    .order("lastUpdate", { ascending: false })
    .limit(5);
 
  return data;
};

export default Dashboard;
