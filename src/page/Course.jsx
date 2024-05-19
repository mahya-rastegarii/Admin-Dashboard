import { Add, FilterList } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Chip,
  IconButton,
  Paper,
  Rating,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import JsPic from "../assets/img/images.png";
import SearchBox from "../components/search/SearchBox";

const Course = () => {
  const rowCourse = [
    {
      title: " Js",
      pic: JsPic,
      teacher: "mahya Rastegari",
      student: 230,
      status: "completed",
      time: 2,
      lastUpdate: "2024/3/1",
      rating: 4.5,
    },
    {
      title: " Js",
      pic: JsPic,
      teacher: "mahya Rastegari",
      student: 230,
      status: "completed",
      time: 2,
      lastUpdate: "2024/3/1",
      rating: 4.5,
    },
    {
      title: " Js",
      pic: JsPic,
      teacher: "mahya Rastegari",
      student: 230,
      status: "completed",
      time: 2,
      lastUpdate: "2024/3/1",
      rating: 4.5,
    },
    {
      title: " Js",
      pic: JsPic,
      teacher: "mahya Rastegari",
      student: 230,
      status: "completed",
      time: 2,
      lastUpdate: "2024/3/1",
      rating: 4.5,
    },
    {
      title: " Js",
      pic: JsPic,
      teacher: "mahya Rastegari",
      student: 230,
      status: "completed",
      time: 2,
      lastUpdate: "2024/3/1",
      rating: 4.5,
    },
    {
      title: " Js",
      pic: JsPic,
      teacher: "mahya Rastegari",
      student: 230,
      status: "completed",
      time: 2,
      lastUpdate: "2024/3/1",
      rating: 4.5,
    },
    {
      title: " Js",
      pic: JsPic,
      teacher: "mahya Rastegari",
      student: 230,
      status: "completed",
      time: 2,
      lastUpdate: "2024/3/1",
      rating: 4.5,
    },
  ];
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
      label: "Time",
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
      label: "Rating",
      align: "center",
      //  minWidth: 20,
    },
  ];

  return (
    <Box component={Paper} elevation={2}>
      <Box display="flex" justifyContent="flex-start" gap={4}  sx={{ padding: 2, marginBottom: 5}} >
        <Stack direction="row" spacing={2}>
          <IconButton aria-label="Sort">
            <FilterList />
          </IconButton>

          <SearchBox />
        </Stack>
        <Button
          variant="contained"
          startIcon={<Add />}
          sx={{ borderRadius: 3 }}
          component={Link}
          to="/course/addCourse"
          color="error"
        >
          {" "}
          Add Course
        </Button>
      </Box>
      {/* <Box display="grid"  gap={10} gridTemplateColumns="repeat(3, 1fr)"> */}

      <TableContainer sx={{ width:"100%"}}>
        <Table sx={{ padding: 0 }}>
          <TableHead sx={{ bgColor: "#212121" }}>
            <TableRow>
              {headCells.map((headCell) => (
                <TableCell key={headCell.id} align={headCell.align}>
                  <Typography variant="h6" sx={{ fontWeight:'bold'}} component="span">
                    {headCell.label}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rowCourse.map((row) => (
              <TableRow key={row.title}>
                <TableCell component="th" scope="row">
                  <Stack
                    direction="row"
                    spacing={5}
                    display="flex"
                    alignItems="center "
                  >
                    <Avatar
                      sx={{ width: 45 }}
                      src={row.pic}
                      variant="square"
                    ></Avatar>
                    <Typography variant="body2">{row.title}</Typography>
                  </Stack>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body2">{row.teacher}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body2">{row.student}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Chip label={row.status} color="primary" variant="outlined" />
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body2">{row.time} Hour</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body2">{row.lastUpdate}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Rating
                    name="half-rating-read"
                    defaultValue={row.rating}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
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
