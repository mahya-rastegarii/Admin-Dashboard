
import React from 'react'
import { Avatar, Box, Chip, Rating, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import jsPic from "../../assets/img/images.png"
import { StarRate } from '@mui/icons-material';

const NewCourse = () => {

    const headCells = [
        {
           id: 1,
           label: "Title",
           align: "left",
          //  minWidth: 20,
         },
        {
           id: 2,
           label: "Date",
           align: "center",
          //  minWidth: 20,
         },
        {
           id: 3,
           label: "Status",
           align: "center",
          //  minWidth: 20,
         },
        {
           id: 4,
           label: "Favour",
           align: "center",
          //  minWidth: 20,
         },
        ];
  
  const rows = [
      {
        id: 1,
        avatar: jsPic,
        title:"javascript",
        date: "2024/3/1",
        status:"Completed",
        rating: "4.9"
      },
      {
        id: 2,
        avatar: jsPic,
        title:"javascript",
        date: "2024/3/1",
        status:"Completed",
        rating: "5.0",
      },
      {
        id: 3,
        avatar: jsPic,
        title:"javascript",
        date: "2024/3/1",
        status:"Completed",
        rating: "4.3",
      },
    
      {
        id: 4,
        avatar:jsPic,
        title:"javascript",
        date: "2024/3/1",
        status:"Completed",
        rating: "4.6",
      },
    ];


  return (

    <TableContainer>
    <Table sx={{ padding:0}}>
      <TableHead sx={{bgColor:"#212121"}}>
        <TableRow>
          {
            headCells.map((headCell) => (
              
          <TableCell
          key={headCell.id}
          align={headCell.align}
          >
            <Typography  variant='body1'  component="span" sx={{fontWeight:"bold" }}>
  
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
            <TableRow key={row.title}>
              <TableCell component="th"  scope="row">
                <Stack direction="row" spacing={5} display="flex" alignItems="center ">
  
                <Avatar  sx={{width:45}} src={row.avatar} variant="square" ></Avatar>
               <Typography variant="body1" >
               {row.title}
                </Typography> 
                </Stack>
              </TableCell>
              <TableCell align="center">
                <Typography variant="body2">
                  {
                    row.date
                  }
                </Typography>
              </TableCell>
              <TableCell  align="center">
               
                <Chip  label= {row.status} color="primary" variant="outlined" />
              </TableCell>
              <TableCell  align="center">
                <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>

                <StarRate  sx={{color:"#ffc400", fontSize:26}} /> 
                <Typography  variant="body2" >
                {row.rating}
                </Typography>
                </Box>
                {/* <Rating name="half-rating-read" defaultValue={row.rating} precision={0.5} readOnly size="small" /> */}
              </TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default NewCourse