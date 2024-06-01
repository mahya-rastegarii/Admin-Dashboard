import { Add, Delete, Edit, StarRate } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Chip,
  IconButton,
  Paper,
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
  TableSortLabel,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import JsPic from "../assets/img/images.png";
import AddCourse from "../components/course/AddCourse";
import HeaderTable from "../components/table/HeaderTable";
import { useModalContext } from "../context/modal/ModalContext";
import { useFilterContext } from "../context/filter/FilterContext";

const Course = () => {
  
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.grey[100],
      color: theme.palette.common.black,
      borderTop: "1px solid #ccc",
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

  const rowTable = rowCourse.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

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
    {
      id: 7,
      label: "Option",
      align: "center",
      //  minWidth: 20,
    },
  ];

  // const status = () => {
  //   return (

  //   <Select
  //   value={filterBy}
  //   size="small"
  //   onChange={handleChange}
  //   displayEmpty
  //   inputProps={{ "aria-label": "Without label" }}
  // >

  //   <MenuItem value={10}>Ten</MenuItem>

  //   <MenuItem value={30}>Thirty</MenuItem>
  // </Select>

  // )
  // }
  const { setOpen } = useModalContext();
  const {setSelectValue} = useFilterContext()

  const filterData = [ "Status", "Student", "Time(Hour)" ];

  
  const handleOpen = () => {
    setOpen(true);
   
  };
  
  useEffect(() => {
    setSelectValue(filterData)
  }, [])

  return (
    <Box component={Paper} elevation={2}>
      <AddCourse />

      <HeaderTable direction="column" filter >
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={handleOpen}
          sx={{ borderRadius: 3 }}
          color="success"
        >
          Add
        </Button>
        {/* <Button
          variant="contained"
          startIcon={<Delete />}
          sx={{ borderRadius: 3 }}
          disabled
          color="error"
        >
          Delete
        </Button> */}
      </HeaderTable>

      <TableContainer sx={{ width: "100%" }}>
        <Table sx={{ padding: 0 }}>
          <TableHead >
            <TableRow>
              {/* <StyledTableCell padding="checkbox">
                <Checkbox />
              </StyledTableCell> */}

              {headCells.map((headCell) => (
                <StyledTableCell key={headCell.id} align={headCell.align}>
                  {headCell.label === "Title"  || headCell.label === "Favour" ? (
                    <TableSortLabel active>
                      <Typography
                        variant="body1"
                        component="h2"
                        sx={{ fontWeight: "bold" }}
                      >
                        {headCell.label}
                      </Typography>
                    </TableSortLabel>
                  ) : (
                    <Typography
                      variant="body1"
                      component="h2"
                      sx={{ fontWeight: "bold" }}
                    >
                      {headCell.label}
                    </Typography>
                  )}
                  {/* <Typography variant="body1" sx={{ fontWeight:'bold'}} component="span">
                    {headCell.label}
                  </Typography> */}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rowTable.map((item) => (
              <TableRow key={item.title}>
                {/* <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell> */}
                <TableCell>
                  <Stack
                    direction="row"
                    spacing={5}
                    display="flex"
                    alignItems="center "
                  >
                    <img src={item.pic} width="25%" />
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
                  <Chip
                    label={item.status}
                    color="primary"
                    variant="outlined"
                  />
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
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <StarRate sx={{ color: "#ffc400", fontSize: 26 }} />
                    <Typography variant="body2">{item.rating}</Typography>
                  </Stack>
                </TableCell>
                <TableCell align="center">
                  <Stack direction="row" spacing={1} alignItems="center">
                    <IconButton
                      aria-label="Edit"
                      onClick={() => setOpen(true)}
                      title="Edit"
                      sx={{ color: "#1e88e5" }}
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      aria-label="Delete"
                      title="Delete"
                      sx={{ color: "#e53935" }}
                      // onClick={() => {}}
                    >
                      <Delete />
                    </IconButton>
                    {/* <Button
                   variant="contained"
                  
                  color="secondary"
                  >
                     edit </Button> */}
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
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
