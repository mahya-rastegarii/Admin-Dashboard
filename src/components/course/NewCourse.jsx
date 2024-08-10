import React from "react";

import { StarRate } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Chip,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
// import jsPic from "../../assets/img/images.png";
import { useThemeContext } from "../../context/theme/ThemeContext";

const NewCourse = ({newCourse}) => {
  const { theme } = useThemeContext();
  const typography = theme.palette.mode.typography;
  const borderColor = theme.palette.mode.borderColor;

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

  // const rows = [
  //   {
  //     id: 1,
  //     avatar: jsPic,
  //     title: "javascript",
  //     date: "2024/3/1",
  //     status: "Completed",
  //     rating: "4.9",
  //   },
  //   {
  //     id: 2,
  //     avatar: jsPic,
  //     title: "javascript",
  //     date: "2024/3/1",
  //     status: "Completed",
  //     rating: "5.0",
  //   },
  //   {
  //     id: 3,
  //     avatar: jsPic,
  //     title: "javascript",
  //     date: "2024/3/1",
  //     status: "Completed",
  //     rating: "4.3",
  //   },

  //   {
  //     id: 4,
  //     avatar: jsPic,
  //     title: "javascript",
  //     date: "2024/3/1",
  //     status: "Completed",
  //     rating: "4.6",
  //   },
  // ];

  return (
    <TableContainer>
      <Table sx={{ padding: 0 }}>
        <TableHead sx={{ bgColor: "#212121" }}>
          <TableRow>
            {headCells.map((headCell) => (
              <TableCell key={headCell.id} align={headCell.align} sx={{borderColor: borderColor}}>
                <Typography
                  variant="body1"
                  component="span"
                  sx={{ fontWeight: "bold", color: typography }}
                >
                  {headCell.label}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody >
          {newCourse.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row" sx={{borderColor: borderColor }}>
                <Stack
                  direction="row"
                  spacing={5}
                  display="flex"
                  alignItems="center "
                >
                  <Avatar
                    sx={{ width: 45 }}
                    src={row.picture}
                    variant="square"
                  ></Avatar>
                  <Typography variant="body1" sx={{ color: typography }}>
                    {row.title}
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell align="center" sx={{borderColor: borderColor }}>
                <Typography variant="body2" sx={{ color: typography }}>
                {row.lastUpdate}
                </Typography>
              </TableCell>
              <TableCell align="center" sx={{borderColor: borderColor }}>
                <Chip label={row.statusEn} color="primary" variant="outlined" />
              </TableCell>
              <TableCell align="center" sx={{borderColor: borderColor}}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <StarRate sx={{ color: "#ffc400", fontSize: 26 }} />
                  <Typography variant="body2" sx={{ color: typography }}>
                    {row.star}
                  </Typography>
                </Box>
                {/* <Rating name="half-rating-read" defaultValue={row.rating} precision={0.5} readOnly size="small" /> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NewCourse;
