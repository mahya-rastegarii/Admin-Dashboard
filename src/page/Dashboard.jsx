
import React from 'react'
import { Avatar, Box, Chip, Container, Divider, List, ListItem, ListItemAvatar, ListItemText, Paper, Rating, Stack, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import {PeopleAlt,MonetizationOn, School, Person, People} from '@mui/icons-material';
import { red, green } from '@mui/material/colors';
import Counter from '../components/Counter';

import DashboardBox from '../components/box/DashboardBox';
import NewUser from '../components/user/NewUser';
import NewCourse from '../components/course/NewCourse';
import Line from '../components/charts/Line';

 const Dashboard = () => {


 

    const BoxContent = [
        {
            id: 1,
            title:"تعداد دوره",
            count: 11,
            num:1,
            icon: <School sx={{ fontSize: 50 }} />
           
        },
        {
             id: 2,
            title:"تعداد کاربر ",
            count: 64,
            num:1,
            icon: <PeopleAlt sx={{ fontSize: 50 }} />
        },
        {
            id: 3,
            title:"میزان فروش",
            count: 350,
            num:10,
            icon: <MonetizationOn sx={{ fontSize: 50 }}/>
        },
        
    ];

   

    const numberOfUser = [20, 45, 35, 15, 60, 80];
    const monthChart = ["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور"];


    const chartData = [{
      xAxisData: monthChart,
      seriesData: numberOfUser,
      labelChart:"number Of User added",
      colorChart:'#8884d8',
      widthChart:1100,
      heightChart:400
    }]
   


  const componentData=[
    {
       id:1,
       title: "New user",
       data: <NewUser/>,
       width:"30%",
    },

    {
       id:2,
       title: "New Course",
       data: <NewCourse/>,
       width:"70%",

    },
]



  return (  
     
    
      <Box>
           <Box mx="auto"  display="grid" gap={2}  gridTemplateColumns="repeat(3, 1fr)"   maxWidth="md">
      {
        BoxContent.map((item) => (
          <DashboardBox item={item}   key={item.id} >
             <Counter count={item.count} number={item.num}/>
          </DashboardBox>
        ))
      }
     
   </Box>
<Box mx="auto" display="flex" component={Paper}   square={false} elevation={3}  sx={{borderRadius:2}} mt={6}>
 <Line {...chartData}/>
</Box>

<Stack
  direction={{ xs: 'column', md: 'row' }}
  mt={7}
  spacing={{ xs: 1, sm: 2, md: 4 }}
>
  {
    componentData.map((item) => (

      <Box width={item.width} display="flex"   alignItems="flex-start" flexDirection="column"  pt={2}  component={Paper} square={false} elevation={3} sx={{borderRadius:2}} key={item.id}>
<Stack display="flex" alignItems="center" direction='row' 
  spacing={1} sx={{ paddingX:2, marginBottom:2}} >

<People />
  <Typography  variant='h6'  component="span" sx={{fontWeight:"bold" }}>
   {item.title}
  </Typography>
</Stack>

 { item.data}
</Box>
    ))
  }

{/* <Box width="70%" display="flex"  alignItems="flex-start" flexDirection="column"  pt={2}  component={Paper} square={false} elevation={3} sx={{borderRadius:2}} >
<Stack display="flex" alignItems="center" direction='row' 
  spacing={1} sx={{ paddingX:2, marginBottom:2}} >

<School />
  <Typography  variant='h6'  component="span">
    New Course
  </Typography>
</Stack>



</Box> */}
</Stack>
   </Box>
   
  )
}


export default Dashboard;