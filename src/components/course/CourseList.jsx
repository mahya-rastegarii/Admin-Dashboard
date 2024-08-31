import React, { useEffect, useState } from "react";

import { Delete, Edit, StarRate } from "@mui/icons-material";
import {
  alpha,
  Chip,
  IconButton,
  Box,
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

import { useNavigation } from "react-router-dom";
import { useAppContext } from "../../context/app/app-context";

import { useTranslation } from "react-i18next";
import LoadComponent from "../Loading/LoadComponent";

const CourseList = ({
  openModalDelete,
  openModalEdit,
  courses,
  loading,
  coursesValue,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [dataValue, setDataValue] = useState(courses);

  const navigation = useNavigation();

  const { language, mode, themeColor } = useAppContext();

  const { t } = useTranslation();

  const headerTableColor = alpha(themeColor.palette.primary.light, 0.2);
  const borderColor = mode.palette.borderColor;
  const typography = mode.palette.typography;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: headerTableColor,
      color: theme.palette.common.black,
      borderTop: "1px solid  ",
      borderColor: borderColor,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const headCells = [
    {
      id: 1,
      label: t("courses.table.tableHeader.title"),
      align: language === "fa" ? "right" : "left",
       minWidth: 330,
    },
    {
      id: 2,
      label: t("courses.table.tableHeader.teacher"),
      align: "center",
       minWidth: 160,
    },
    {
      id: 3,
      label: t("courses.table.tableHeader.student"),
      align: "center",
       minWidth: 40,
    },
    {
      id: 4,
      label: t("courses.table.tableHeader.status"),
      align: "center",
       minWidth: 60,
    },
    {
      id: 5,
      label: t("courses.table.tableHeader.time"),
      align: "center",
       minWidth: 130,
    },
    {
      id: 5,
      label: t("courses.table.tableHeader.lastUpdate"),
      align: "center",
       minWidth: 130,
    },
    {
      id: 6,
      label: t("courses.table.tableHeader.star"),
      align: "center",
       minWidth: 40,
    },
    {
      id: 7,
      label: t("courses.table.tableHeader.option"),
      align: "center",
       minWidth: 40,
    },
  ];

  const rowTable = dataValue?.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  useEffect(() => {
    if (coursesValue) {
      setDataValue(coursesValue);
    } else {
      setDataValue(courses);
    }
    //  console.log("dataValue", dataValue)
  }, [coursesValue, courses]);

  return (
    <>
      {/* {navigation.state !== "idle" &&  */}

      {loading ? (
        <LoadComponent />
      ) : (
        <Box sx={{ width:"100%", overflow:'hidden'}}>
        <TableContainer >
          <Table sx={{ padding: 0 }}>
            <TableHead>
              <TableRow>
                {/* <StyledTableCell padding="checkbox">
                <Checkbox />
              </StyledTableCell> */}

                {headCells.map((headCell) => (
                  <StyledTableCell key={headCell.id} align={headCell.align}   style={{ minWidth: headCell.minWidth }}>
                   
                   
                      <Typography
                        variant="body1"
                        component="h2"
                        sx={{ fontWeight: "bold" }}
                      >
                        {headCell.label}
                      </Typography>
                 
                    {/* <Typography variant="body1" sx={{ fontWeight:'bold'}} component="span">
                    {headCell.label}
                  </Typography> */}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {rowTable.map((item) => (
                <TableRow key={item.id}>
                  {/* <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell> */}
                  <TableCell sx={{ borderColor: borderColor }}>
                    <Stack
                      direction="row"
                      gap={2}
                      display="flex"
                      alignItems="center "
                    >
                      <img
                        src={item.picture}
                        width={120}
                      />
                      {/* <Avatar
                      // sx={{ width:"35%"}}
                      src={item.pic}
                      variant="square"
                    ></Avatar> */}
                      <Typography variant={{xs:"body1", md:"h6"}} sx={{ color: typography, fontWeight:"bold" }}>
                        {item.title}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell sx={{ borderColor: borderColor }} align="center">
                    <Typography variant="body2" sx={{ color: typography }}>
                      {item.teacher}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ borderColor: borderColor }} align="center">
                    <Typography variant="body2" sx={{ color: typography }}>
                      {item.studentCount}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ borderColor: borderColor }} align="center">
                    <Chip
                      label={language === "fa" ? item.statusFa : item.statusEn}
                      color="primary"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell sx={{ borderColor: borderColor }} align="center">
                    <Typography variant="body2" sx={{ color: typography }}>
                      {item.time}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ borderColor: borderColor }} align="center">
                    <Typography variant="body2" sx={{ color: typography }}>
                      {item.lastUpdate}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ borderColor: borderColor }} align="center">
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
                      <Typography variant="body2" sx={{ color: typography }}>
                        {item.star}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell sx={{ borderColor: borderColor }} align="center">
                    <Stack direction="row" spacing={1} alignItems="center">
                      <IconButton
                        aria-label="Edit"
                        onClick={() => openModalEdit(item)}
                        title="Edit"
                        sx={{ color: "#1e88e5" }}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton
                        aria-label="Delete"
                        title="Delete"
                        sx={{ color: "#e53935" }}
                        onClick={() => openModalDelete(item.id, item.picture)}
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
            {/* <TableFooter
              sx={{
                "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
                  fill: typography,
                },
              }}
            > */}
              {/* <TableRow> */}
              
              {/* </TableRow> */}
            {/* </TableFooter> */}
          </Table>
        </TableContainer>
        <TablePagination
                  sx={{ border: "none", color: typography, direction: "ltr", display:'flex', 
                    justifyContent:{ xs: 'center', md:'flex-start'},
                      "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
                        fill: typography,
                      },
                  
                   }}
                  rowsPerPageOptions={[5, 10, 15]}
                  // colSpan={3}
                 conponent='div'
                  count={dataValue.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
        </Box>
      )}
    </>
  );
};

export default CourseList;
