import { Add, FilterList, Sort, StarRate } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Chip,
  IconButton,
  Paper,
  Rating,
  Stack,
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
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import JsPic from "../assets/img/images.png";
import SearchBox from "../components/search/SearchBox";
import HeaderTable from "../components/table/HeaderTable";

const Course = () => {


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

  const rowCourse = [
    {
      title: " Js",
      pic: JsPic,
      teacher: "mahya Rastegari",
      student: 230,
      status: "completed",
      time: 2,
      lastUpdate: "2024/3/1",
      rating: "4.5",
    },
    {
      title: " Js",
      pic: JsPic,
      teacher: "mahya Rastegari",
      student: 230,
      status: "completed",
      time: 2,
      lastUpdate: "2024/3/1",
      rating: "4.5",
    },
    {
      title: " Js",
      pic: JsPic,
      teacher: "mahya Rastegari",
      student: 230,
      status: "completed",
      time: 2,
      lastUpdate: "2024/3/1",
      rating: "4.5",
    },
    {
      title: " Js",
      pic: JsPic,
      teacher: "mahya Rastegari",
      student: 230,
      status: "completed",
      time: 2,
      lastUpdate: "2024/3/1",
      rating: "4.5",
    },
    {
      title: " Js",
      pic: JsPic,
      teacher: "mahya Rastegari",
      student: 230,
      status: "completed",
      time: 2,
      lastUpdate: "2024/3/1",
      rating: "4.5",
    },
    {
      title: " Js",
      pic: JsPic,
      teacher: "mahya Rastegari",
      student: 230,
      status: "completed",
      time: 2,
      lastUpdate: "2024/3/1",
      rating: "4.5",
    },
    {
      title: " Js",
      pic: JsPic,
      teacher: "mahya Rastegari",
      student: 230,
      status: "completed",
      time: 2,
      lastUpdate: "2024/3/1",
      rating: "4.5",
    },
  ];

  const rowTable = rowCourse.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)


  const headCells = [
    {
      id: 1,
      label: "Title",
      align: "start",
      //  minWidth: 20,
    },
    {
      id: 2,
      label: "Teacher",
      align: "center",
      //  minWidth: 20,
    },
    {
      id: 3,
      label: "Student",
      align: "center",
      //  minWidth: 20,
    },
    {
      id: 4,
      label: "Status",
      align: "center",
      //  minWidth: 20,
    },
    {
      id: 5,
      label: "Time (Hour)",
      align: "center",
      //  minWidth: 20,
    },
    {
      id: 5,
      label: "Last Update",
      align: "center",
      //  minWidth: 20,
    },
    {
      id: 6,
      label: "Favour",
      align: "center",
      //  minWidth: 20,
    },
  ];

  return (
    <Box component={Paper} elevation={2}>
      {/* <Box display="flex" justifyContent="flex-start" gap={4}  sx={{ padding: 2, marginBottom:  3}} >
        <Stack direction="row" spacing={1}>
        <IconButton aria-label="Filter">
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

        </Stack>
          <SearchBox /> */}
           <HeaderTable>

        <Button
          variant="contained"
          startIcon={<Add />}
          sx={{ borderRadius: 3 }}
          component={Link}
          to="/course/addCourse"
          color="secondary"
        >
          {" "}
          Add Course
        </Button>
           </HeaderTable>
      {/* </Box> */}
      {/* <Box display="grid"  gap={10} gridTemplateColumns="repeat(3, 1fr)"> */}
       
      <TableContainer sx={{ width:"100%"}}>
        <Table sx={{ padding: 0 }}>
          <TableHead >
            <TableRow>
              {headCells.map((headCell) => (
                <StyledTableCell key={headCell.id} align={headCell.align}>
                  <Typography variant="body1" sx={{ fontWeight:'bold'}} component="span">
                    {headCell.label}
                  </Typography>
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          {rowTable.map((item) => (
              <TableRow key={item.title}>
                <TableCell >
                  <Stack
                    direction="row"
                    spacing={5}
                  
                    display="flex"
                    alignItems="center "
                  >
                    <img src={item.pic} width="25%"/>
                    {/* <Avatar
                      // sx={{ width:"35%"}}
                      src={item.pic}
                      variant="square"
                    ></Avatar> */}
                    <Typography variant="h6">{item.title}</Typography>
                  </Stack>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body2">{item.teacher}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body2">{item.student}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Chip label={item.status} color="primary" variant="outlined" />
                </TableCell>
                <TableCell align="center">
              
                  <Typography variant="body2">{item.time}</Typography>


               
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body2">{item.lastUpdate}</Typography>
                </TableCell>
                <TableCell align="center">

                  {/* <Rating
                    name="half-rating-read"
                    defaultValue={item.rating}
                    precision={0.5}
                    readOnly
                    size="small"
                  /> */}
                          <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
          
          <StarRate  sx={{color:"#ffc400", fontSize:26}} /> 
          <Typography  variant="body2" >
          {item.rating}
          </Typography>
          </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter >
          <TableRow >
          <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        // colSpan={3}
      
        count={rowCourse.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
          </TableRow>
        </TableFooter>
        </Table>
      </TableContainer>
      {/* {Data.map((item) => (
        <Card sx={{ maxWidth: 345, borderRadius: 3 }} key={item.title}>
          <CardActionArea  component={Link} to={`/course/${item.title}`}>
            <CardMedia
              component="img"
              alt={item.title}
              height="180"
              image={item.pic}
            />
          </CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.desc}
            </Typography>
            <Stack
              direction="row"
              mt={4}
              justifyContent="space-between"
              alignItems="center"
            >
              <Rating
                name="half-rating-read"
                defaultValue={3.5}
                precision={0.5}
                readOnly
                size="small"
              />

              <Chip label="primary" color="primary" variant="outlined" />
              <Box display="flex">
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="span"
                >
                  {item.student}
                </Typography>
                <PeopleOutlined />
              </Box>
            </Stack>
          </CardContent>

         
          <Divider />

          <CardActions
            
            sx={{ display: "flex", justifyContent: "flex-start" }}
          >
            <IconButton size="small">
              <Delete sx={{ color: red[500] }} />
            </IconButton>
            <IconButton size="small" >
              <ModeEditOutlined  sx={{ color: blue[500] }}/>
            </IconButton>
           
          
          </CardActions>
        
        </Card>

      ))} */}

      {/* </Box> */}
    </Box>
  );
};

export default Course;
