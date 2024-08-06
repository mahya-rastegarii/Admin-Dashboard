import {
  ArrowForward,
  Favorite,
  People,
  PeopleAlt,
  School,
} from "@mui/icons-material";
import { Box, Button, Paper, Stack, styled, Typography } from "@mui/material";
import React, { Suspense, useEffect, useState } from "react";
import Counter from "../components/Counter";
import { supabase} from "../core/createClient";
import {
  LineChart,
  lineElementClasses,
  markElementClasses,
} from "@mui/x-charts";
import { Await, Link, defer, useLoaderData } from "react-router-dom";
import DashboardBox from "../components/box/DashboardBox";
// import Line from "../components/charts/Line";
import NewCourse from "../components/course/NewCourse";
import NewUser from "../components/user/NewUser";
import { useThemeContext } from "../context/theme/ThemeContext";
import VisitSite from "../components/analytics/VisitSite";
import Sales from "../components/analytics/Sales";
import LoadComponent from "../components/Loading/LoadComponent";
import ContainerData from "../components/dashboard/ContainerData";
// import HeaderTable from "../components/dashboard/HeaderTable";
// import { useChartContext } from "../context/chart/ChartContext";

const Dashboard = () => {

  const data = useLoaderData()
  // const {chartValue, setChartValue}= useChartContext();
  const { theme } = useThemeContext();
  // const iconColor = theme.palette.mode.typography;
  const iconColor = theme.palette.primary.dark;
  const boxBgColor = theme.palette.mode.boxBg;
  const typography = theme.palette.mode.typography;
  const linkColor = theme.palette.primary.dark;

  const [newUser, setNewUser]= useState()
  const [newCourse, setNewCourse]= useState()
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

  // const numberOfUser = [20, 45, 35, 15, 60, 80];
  // const monthChart = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور"];

  // const chartData = {
  //   monthChart,
  //   numberOfUser,
  //   labelChart: "number Of User added",
  //   colorChart: theme.palette.primary.main,
  //   widthChart: 900,
  //   heightChart: 400,
  // };

  const userComponent =  {

      title: "New user",
      // data: <NewUser  user={newUser}/>,
      width: { xs: "100%", md: "30%" },
      icon: <People />,
      link: "/user",
    }

   const courseComponent =  {

      title: "New Course",
      // data: <NewCourse  course={newCourse} />,
      width: { xs: "100%", md: "70%" },
      icon: <School />,
      link: "/course",
    }

  // const fetchCharts = async() =>{
  //   const {data, error}= await supabase
  //   .from('charts')
  //   .select("*")
  //     setChartValue(data);
  //   console.log("data", data);

  // }

  

  // useEffect(() => {
  //   fetchNewUser();
  //   // console.log('chartValue', chartValue)
  //   fetchNewCourse()
  // }, [])

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
      width="100%"
       direction={{ xs: "column", md: "row" }}
       mt={6}
       spacing={3}
       alignItems="center"

       justifyContent="center"
      >
       
         <Sales  chartWidth={800} boxWidth="70%"/>
       
         <VisitSite chartWidth={450} boxWidth="30%"/>
        
      </Stack>

      <Stack
        direction={{ xs: "column", md: "row" }}
        mt={3}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >



          <ContainerData {...userComponent}>
            <Suspense fallback={<LoadComponent/>}>
         

          <Await resolve={data.newUser}>
             {
               (loadUser) => <NewUser newUser={loadUser}/>
             } 
          </Await>
          
        </Suspense>
      
          </ContainerData>

          <ContainerData {...courseComponent}>
         
          <Suspense fallback={<LoadComponent/>}>

         


          <Await resolve={data.newCourse}>
             {
               (loadCourse) => <NewCourse newCourse={loadCourse}/>
             } 
          </Await>


          </Suspense>



          </ContainerData>
       
 

      </Stack>
    </Box>
  );
};



export async function NewDataLoader() {

  return defer({
    newUser:fetchNewUser() ,

    newCourse:fetchNewCourse() ,
  })
}


const fetchNewUser = async() =>{

    const {data, error}= await supabase
    .from('users')
    .select("*")
    .order('date', {ascending:false})
    .limit(7)
    // console.log("limit", data)
    // setNewUser(data)
    return data;
  }

  const fetchNewCourse = async() =>{

    const {data, error}= await supabase
    .from('course')
    .select("*")
    .order("lastUpdate", {ascending:false})
    .limit(5)
    // console.log("limit", data)
    // setNewCourse(data)
    return data;

  }

export default Dashboard;
