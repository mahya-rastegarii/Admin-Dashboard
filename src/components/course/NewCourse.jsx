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
import TableContainers from "../table/TableContainers";

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
       minWidth: 330,
    },
    {
      id: 2,
      label: t('courses.table.tableHeader.lastUpdate'),
      align: "center",
       minWidth: 130,
    },
    {
      id: 3,
      label: t('courses.table.tableHeader.status'),
      align: "center",
       minWidth: 60,
    },
    {
      id: 4,
      label: t('courses.table.tableHeader.star'),
      align: "center",
       minWidth: 40,
    },
  ];

  

  return (
   
    <TableContainers headCells={headCells } >
          {newCourse.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row" sx={{borderColor: borderColor }}>
                <Stack
                  direction="row"
                  gap={2}
                  display="flex"
                  alignItems="center "
                >
                     <img  src={row.picture} width={80} height={40} />
                  {/* <Avatar
                    sx={{ width: 45 }}
                    src={row.picture}
                    variant="square"
                  ></Avatar> */}
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
               
              </TableCell>
            </TableRow>
          ))}
        </TableContainers>
  );
};

export default NewCourse;
