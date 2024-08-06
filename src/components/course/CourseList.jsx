import React, { useState } from "react";

import { Delete, Edit, StarRate } from "@mui/icons-material";
import {
  alpha,
  Chip,
  IconButton,
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

import { useThemeContext } from "../../context/theme/ThemeContext";
import { useNavigation } from "react-router-dom";
import LoadComponent from "../Loading/LoadComponent";
import LoadingBackdrop from "../Loading/LoadingBackdrop";

const CourseList = ({ openModalDelete, openModalEdit, courses }) => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  
  
   const navigation= useNavigation();


  const {theme: customTheme } =useThemeContext()
 
  const headerTableColor = alpha(customTheme.palette.primary.light, 0.2)
  const borderColor = customTheme.palette.mode.borderColor
  const typography = customTheme.palette.mode.typography
 
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

  const rowTable = courses.slice(
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
      label: "Star",
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

  return (
    <>
     {
      navigation.state !== 'idle' && <LoadingBackdrop/>
    }
    <TableContainer sx={{ width: "100%" }}>
      <Table sx={{ padding: 0 }}>
        <TableHead>
          <TableRow>
            {/* <StyledTableCell padding="checkbox">
                <Checkbox />
              </StyledTableCell> */}

            {headCells.map((headCell) => (
              <StyledTableCell key={headCell.id} align={headCell.align}>
                {headCell.label === "Title" || headCell.label === "Favour" ? (
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
          {rowTable?.map((item) => (
            <TableRow key={item.titleEn}>
              {/* <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell> */}
              <TableCell sx={{ borderColor: borderColor }}>
                <Stack
                  direction="row"
                  spacing={5}
                  display="flex"
                  alignItems="center "
                >
                  <img src={item.picture} width="20%" />
                  {/* <Avatar
                      // sx={{ width:"35%"}}
                      src={item.pic}
                      variant="square"
                    ></Avatar> */}
                  <Typography variant="h6" sx={{ color: typography }}>
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
                  label={item.statusEn}
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
                  {item.lastUpdate?.slice(0, 10)}
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
                    onClick={() => openModalDelete(item.id)}
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
        <TableFooter
          sx={{
            "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
              fill: typography,
            },
          }}
        >
          <TableRow>
            <TablePagination
              sx={{ border: "none", color: typography }}
              rowsPerPageOptions={[5, 10, 15]}
              // colSpan={3}

              count={courses.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
    </>
  );
};

export default CourseList;
