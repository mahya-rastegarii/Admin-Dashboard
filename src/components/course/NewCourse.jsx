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


import { useTranslation } from "react-i18next";
import { useAppContext } from "../../context/app/app-context";

const NewCourse = ({newCourse}) => {
  
 
  const {language, themeColor, mode } = useAppContext();

  const {t}= useTranslation()

  const typography = mode.palette.typography;
  const borderColor = mode.palette.borderColor;

  const headCells = [
    {
      id: 1,
      label: t('courses.table.tableHeader.title'),
      align:language === 'fa' ? "right" : "left",
      //  minWidth: 20,
    },
    {
      id: 2,
      label: t('courses.table.tableHeader.lastUpdate'),
      align: "center",
      //  minWidth: 20,
    },
    {
      id: 3,
      label: t('courses.table.tableHeader.status'),
      align: "center",
      //  minWidth: 20,
    },
    {
      id: 4,
      label: t('courses.table.tableHeader.star'),
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
                  gap={2}
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
                <Chip label={language === 'fa' ? row.statusFa : row.statusEn} color="primary" variant="outlined" />
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
