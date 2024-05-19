
import React from 'react'
import { Avatar, Box, Chip, Container, Divider, List, ListItem, ListItemAvatar, ListItemText, Paper, Rating, Stack, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import {PeopleAlt,MonetizationOn, School, Person, People} from '@mui/icons-material';
import { red, green } from '@mui/material/colors';
import Counter from '../components/Counter';
import js from "../assets/img/images.png"
import { LineChart, markElementClasses, lineElementClasses } from '@mui/x-charts';

 const Dashboard = () => {


  const CustomChart = styled(LineChart)( () => ({
    [`& .${lineElementClasses.root}`]: {
      stroke: '#8884d8',
      strokeWidth: 2,
    },
    [`& .${markElementClasses.root}`]: {
        stroke: '#8884d8',
      scale: '0.6',
      fill: '#fff',
      strokeWidth: 0,
    },
  }));

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

    const user =[
      {
        name:"Mahya rastegari",
        email:"mahya@gmail.com",
        avatar: "M",
        numberCourse: 0
      },
      {
        name:"Mahya rastegari",
        email:"mahya@gmail.com",
        avatar: "M",
        numberCourse: 0
      },
      {
        name:"Mahya rastegari",
        email:"mahya@gmail.com",
        avatar: "M",
        numberCourse: 0
      },
      {
        name:"Mahya rastegari",
        email:"mahya@gmail.com",
        avatar: "M",
        numberCourse: 0
      },
      {
        name:"Mahya rastegari",
        email:"mahya@gmail.com",
        avatar: "M",
        numberCourse: 0
      }
     
    ]

    const numberOfUser = [20, 45, 35, 15, 60, 80];
    const monthChart = ["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور"];


    const headCells = [
      {
         id: 1,
         label: "Title",
         align: "start",
        //  minWidth: 20,
       },
      {
         id: 2,
         label: "Status",
         align: "center",
        //  minWidth: 20,
       },
      {
         id: 3,
         label: "Rating",
         align: "center",
        //  minWidth: 20,
       },
      ];

const rows = [
    {
      id: 1,
      avatar: js,
      Title:"javascript",
      Status:"Completed",
      rating: 4,
    },
    {
      id: 2,
      avatar: js,
      Title:"javascript",
      Status:"Completed",
      rating: 4,
    },
    {
      id: 3,
      avatar: js,
      Title:"javascript",
      Status:"Completed",
      rating: 4,
    },
  
    {
      id: 4,
      avatar: js,
      Title:"javascript",
      Status:"Completed",
      rating: 4,
    },
  ];





  return (  
     
    
      <Box>
           <Box mx="auto"  display="grid" gap={2}  gridTemplateColumns="repeat(3, 1fr)"   maxWidth="md">
      {
        BoxContent.map((item) => (
            <Box
            component={Paper}
            align="center"
            square={false}
            elevation={3}
            //  gridColumn=" span 4"
            sx={{ padding:3,  borderRadius:2}}
            key={item.id}
            >
             {/* <Box  sx={{ width:"40%", display:" flex", justifyContent:"space-around"}}> */}
             <Typography  variant="h5"  component="div" gutterBottom>
         
        
         {item.icon}
        
       </Typography>
           
          
                {/* </Box>    */}
          
         <Typography  variant="h4"  mt={2} component="div"  gutterBottom>
         
       <Counter count={item.count} number={item.num}/>
        
       </Typography>
    
       <Typography  variant="body1" mt={2}  component="div" gutterBottom>
            {item.title}
        
          
           
          </Typography>
         
            </Box>
        ))
      }
     
   </Box>
<Box mx="auto" display="flex" component={Paper}   square={false} elevation={3}  sx={{borderRadius:2}} mt={6}>
   <CustomChart
      xAxis={[{ data: monthChart, scaleType:"point" }]}
      series={[
        {
          data: numberOfUser,
          label:"number Of User added",
          color:'#8884d8'
        },
      ]}

  
      width={1100}
      height={400}
    />
</Box>
<Stack
  direction={{ xs: 'column', md: 'row' }}
  mt={7}
  spacing={{ xs: 1, sm: 2, md: 4 }}
>
<Box width="30%" display="flex"  alignItems="flex-start" flexDirection="column"  pt={2}  component={Paper} square={false} elevation={3} sx={{borderRadius:2}} >
<Stack display="flex" alignItems="center" direction='row' 
  spacing={1} sx={{ paddingX:2, marginBottom:2}} >

<People />
  <Typography  variant='h6'  component="span">
    New user
  </Typography>
</Stack>
<List display="flex"  sx={{ width: '100%', maxWidth: 500, padding:0 }}>
  
  {
   user.map( item => (
     <>
     <ListItem key={item.name} sx={{ paddingX:2}} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar > {item.avatar} </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={

            <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body1"
            color= "black"
            
          >
           {item.name}
          </Typography>
          }

          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body3"
                color="gray"
              >
               {item.email}
              </Typography>
            
              {/* {"-Attended courses"} */}
            </>
          }
        />
      </ListItem>
      <Divider />
     </>
   ))
  }
      
    
    </List>

</Box>
<Box width="70%" display="flex"  alignItems="flex-start" flexDirection="column"  pt={2}  component={Paper} square={false} elevation={3} sx={{borderRadius:2}} >
<Stack display="flex" alignItems="center" direction='row' 
  spacing={1} sx={{ paddingX:2, marginBottom:2}} >

<School />
  <Typography  variant='h6'  component="span">
    New Course
  </Typography>
</Stack>

<TableContainer >
  <Table sx={{ padding:0}}>
    <TableHead sx={{bgColor:"#212121"}}>
      <TableRow>
        {
          headCells.map((headCell) => (
            
        <TableCell 
        key={headCell.id}
        align={headCell.align}
        >
          <Typography  variant='body1'  component="span">

          { headCell.label}
           </Typography>
        
        </TableCell>
          ))
        }
      </TableRow>
    </TableHead>
    <TableBody>
      {
        rows.map((row) => (
          <TableRow key={row.Title}>
            <TableCell component="th"  scope="row">
              <Stack direction="row" spacing={5} display="flex" alignItems="center ">

              <Avatar  sx={{width:45}} src={row.avatar} variant="square" ></Avatar>
             <Typography variant="body1">
             {row.Title}
              </Typography> 
              </Stack>
            </TableCell>
            <TableCell  align="center">
             
              <Chip  label= {row.Status} color="primary" variant="outlined" />
            </TableCell>
            <TableCell  align="center">
              
              <Rating name="half-rating-read" defaultValue={row.rating} precision={0.5} readOnly size="small" />
            </TableCell>
          </TableRow>
        ))
      }
    </TableBody>
  </Table>
</TableContainer>

</Box>
</Stack>
   </Box>
   
  )
}


export default Dashboard;