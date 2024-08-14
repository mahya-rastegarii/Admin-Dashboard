import React, { useEffect, useState } from "react";

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

import { useNavigation } from "react-router-dom";
import { useAppContext} from '../../context/app/app-context';
import { useThemeContext } from "../../context/theme/ThemeContext";
import LoadingBackdrop from "../Loading/LoadingBackdrop";

import LoadComponent from "../Loading/LoadComponent";
import { useTranslation } from "react-i18next";

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

  const { theme: customTheme } = useThemeContext();
  const {language }= useAppContext()

  const {t}= useTranslation()


  const headerTableColor = alpha(customTheme.palette.primary.light, 0.2);
  const borderColor = customTheme.palette.mode.borderColor;
  const typography = customTheme.palette.mode.typography;

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
      label: t('courses.table.tableHeader.title'),
      align:language ==='fa' ? "right" : "left"
      //  minWidth: 20,
    },
    {
      id: 2,
      label: t('courses.table.tableHeader.teacher'),
      align: "center",
      //  minWidth: 20,
    },
    {
      id: 3,
      label: t('courses.table.tableHeader.student'),
      align: "center",
      //  minWidth: 20,
    },
    {
      id: 4,
      label: t('courses.table.tableHeader.status'),
      align: "center",
      //  minWidth: 20,
    },
    {
      id: 5,
      label:t('courses.table.tableHeader.time'),
      align: "center",
      //  minWidth: 20,
    },
    {
      id: 5,
      label: t('courses.table.tableHeader.lastUpdate'),
      align: "center",
      //  minWidth: 20,
    },
    {
      id: 6,
      label: t('courses.table.tableHeader.star'),
      align: "center",
      //  minWidth: 20,
    },
    {
      id: 7,
      label: t('courses.table.tableHeader.option'),
      align: "center",
      //  minWidth: 20,
    },
  ];

  const rowTable = dataValue?.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
  
  useEffect(() => {
    if (coursesValue){
       setDataValue(coursesValue)}
    else{

      setDataValue(courses);
    }
  //  console.log("dataValue", dataValue)
  }, [coursesValue, courses]);

  
  return (
    <>
      {/* {navigation.state !== "idle" &&  */}

      {
        loading ? <LoadComponent/> :(

     
      <TableContainer sx={{ width: "100%" }}>
        <Table sx={{ padding: 0, }}>
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
          <TableFooter
            sx={{
             
              "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
                fill: typography,
              },
            }}
          >
            <TableRow >
              <TablePagination
                sx={{ border: "none", color: typography, direction:language ==='fa' ? "rtl": "ltr" }}
                rowsPerPageOptions={[5, 10, 15]}
                // colSpan={3}

                count={dataValue.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>

)
}
    </>
  );
};

export default CourseList;
