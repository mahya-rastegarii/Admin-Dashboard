import { FilterList, Search, Sort } from "@mui/icons-material";
import {
  Avatar,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Stack,
  Typography,
  TableSortLabel,
  Box,
  InputBase,
  IconButton
} from "@mui/material";
import  React, { useState  } from "react";
import SearchBox from "../components/search/SearchBox";
import HeaderTable from "../components/table/HeaderTable"

export default function User() {

  

   const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      // backgroundColor: theme.palette.grey[400],
      color: theme.palette.common.black,
      
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
     
    },
  }));
  const headCells = [
  
    {
      id: 1,
      label: "name",
      align: "left",
      minWidth: 130,
    },
    // {
    //   id: 2,
    //   label: "lastName",
    //   align: "center",
    //   minWidth: 130,
    // },
    {
      id: 3,
      label: "email",
      align: "center",
      minWidth: 210,
    },
    {
      id: 4,
      label: "phone Number",
      align: "center",
      minWidth: 120,
    },
    {
      id: 5,
      label: "Registery Date",
      align: "center",
      minWidth: 10,
    },
    {
      id: 6,
      label: "Courses",
      align: "center",
      minWidth: 10,
    },
  ];

  const rows = [
    {
      id: 1,
      avatar: "M",
      name: "mahya rastegari",
      // lastName: "rastegari",
      email: "mahyarastegarii@gmail.com",
      phone: "093022222033",
      numberOfCourses: 4,
      date:"2024/3/2"
    },
    {
      id: 2,
      avatar: "M",
      name: "mahya rastegari",
      // lastName: "rastegari",
      email: "mahyarastegarii@gmail.com",
      phone: "093022222033",
      numberOfCourses: 5,
      date:"2024/3/2"
    },
    {
      id: 3,
      avatar: "M",
      name: "mahya rastegari",
      // lastName: "rastegari",
      email: "mahyarastegarii@gmail.com",
      phone: "093022222033",
      numberOfCourses: 4,
      date:"2024/3/2"
    },
    {
      id: 4,
      avatar: "M",
      name: "mahya rastegari",
      // lastName: "rastegari",
      email: "mahyarastegarii@gmail.com",
      phone: "093022222033",
      numberOfCourses: 4,
      date:"2024/3/2"
    },
    {
      id: 5,
      avatar: "M",
      name: "mahya rastegari",
      // lastName: "rastegari",
      email: "mahyarastegarii@gmail.com",
      phone: "093022222033",
      numberOfCourses: 5,
      date:"2024/3/2"
    },
    {
      id: 6,
      avatar: "M", 
      name: "mahya rastegari",
      // lastName: "rastegari",
      email: "mahyarastegarii@gmail.com",
      phone: "093022222033",
      numberOfCourses: 8,
      date:"2024/3/2"
    },
    {
      id: 7,
      avatar: "M",
      name: "mahya rastegari",
      // lastName: "rastegari",
      email: "mahyarastegarii@gmail.com",
      phone: "093022222033",
      numberOfCourses: 4,
      date:"2024/3/2"
    },
    {
      id: 8,
      avatar: "M",
      name: "mahya rastegari",
      // lastName: "rastegari",
      email: "mahyarastegarii@gmail.com",
      phone: "093022222033",
      numberOfCourses: 4,
      date:"2024/3/2"
    },
    {
      id: 9,
      avatar: "M",
      name: "mahya rastegari",
      // lastName: "rastegari",
      email: "mahyarastegarii@gmail.com",
      phone: "093022222033",
      numberOfCourses: 4,
      date:"2024/3/2"
    },
    {
      id: 10,
      avatar: "M",
      name: "mahya rastegari",
      // lastName: "rastegari",
      email: "mahyarastegarii@gmail.com",
      phone: "093022222033",
      numberOfCourses: 4,
      date:"2024/3/2"
    },
    {
      id: 11,
      avatar: "M",
      name: "mahya rastegari",
      // lastName: "rastegari",
      email: "mahyarastegarii@gmail.com",
      phone: "093022222033",
      numberOfCourses: 4,
      date:"2024/3/2"
    },
    {
      id: 12,
      avatar: "M",
      name: "mahya rastegari",
      // lastName: "rastegari",
      email: "mahyarastegarii@gmail.com",
      phone: "093022222033",
      numberOfCourses: 4,
      date:"2024/3/2"
    },
    {
      id: 13,
      avatar: "M",
      name: "mahya rastegari",
      // lastName: "rastegari",
      email: "mahyarastegarii@gmail.com",
      phone: "093022222033",
      numberOfCourses: 4,
      date:"2024/3/2"
    },
    {
      id: 14,
      avatar: "M",
      name: "mahya rastegari",
      // lastName: "rastegari",
      email: "mahyarastegarii@gmail.com",
      phone: "093022222033",
      numberOfCourses: 4,
      date:"2024/3/2"
    },
    {
      id: 15,
      avatar: "M",
      name: "mahya rastegari",
      // lastName: "rastegari",
      email: "mahyarastegarii@gmail.com",
      phone: "093022222033",
      numberOfCourses: 4,
      date:"2024/3/2"
    },
  ];

 


 

  
  const rowTable = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  return (
    <Box component={Paper} elevation={2}>
      {/* <Stack direction="row" spacing={1} sx={{ padding: 2}} >
      <IconButton aria-label="Sort">
      <FilterList  sx={{ fontSize:27}} />
        <Typography variant="body2" component="span" color="#000">
          filter
        </Typography>
  
      </IconButton>
       
      <IconButton aria-label="Sort">
      <Sort  sx={{ fontSize:27}} />
        <Typography variant="body2" component="span" color="#000">
          sort
        </Typography>
  
      </IconButton>
      
    <SearchBox/>
      </Stack> */}
     <HeaderTable/>
    <TableContainer  sx={{width: "100%"}}>
      <Table >
        <TableHead>
       

          <TableRow  >
            {headCells.map((headCell) => (
              <StyledTableCell
                key={headCell.id}
                align={headCell.align}
                style={{ minWidth: headCell.minWidth }}
              >

              {/* {
                headCell.label === "name" ?  
                <TableSortLabel   > 
             <Typography variant="body1" component="h2">

                {headCell.label}
                </Typography>
                </TableSortLabel> :
                
                <Typography variant="body1" component="h2">
                {headCell.label}
                </Typography>
              } */}
            <Typography variant="body1" component="h2" sx={{ fontWeight:"bold" }}>
                {headCell.label}
                </Typography>
                
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowTable.map((item) => (
            <TableRow hover sx={{}} key={item.id} >
               {/* <TableCell align="center"><Avatar>{ item.avatar}</Avatar></TableCell> */}
              <TableCell align="center">
              <Stack direction="row" spacing={3} display="flex" alignItems="center ">
              <Avatar>{ item.avatar}</Avatar>
                <Typography variant="body2">
                 {item.name}
                </Typography> 
                </Stack>
              </TableCell>
              {/* <TableCell align="center">{item.lastName}</TableCell> */}
              <TableCell align="center">
                 <Typography variant="body2">
                 {item.email}
                </Typography> 
                </TableCell>
              <TableCell align="center">
              <Typography variant="body2">
              {item.phone}
                </Typography> 
              </TableCell>
              <TableCell align="center">
               

                <Typography variant="body2">
               {item.date}
                </Typography> 
                </TableCell>
              <TableCell align="center">
               

                <Typography variant="body2">
                {item.numberOfCourses}  
                </Typography> 
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter >
          <TableRow >
          <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        // colSpan={3}
      
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
    </Box>
  );
}
