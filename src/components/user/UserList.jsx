import React, { useEffect, useState } from "react";

import {
  alpha,
  Avatar,
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

import { useTranslation } from "react-i18next";
import { useNavigation } from "react-router-dom";
import { useAppContext } from "../../context/app/app-context";
import LoadComponent from "../Loading/LoadComponent";
//   import { debounce } from "lodash";
//   import SearchBox from "../components/search/SearchBox";
//   import SortBox from "../components/table/sort/SortBox";
//   import { rows } from "../components/user/UserData";

const UserList = ({ users, loading, usersValue }) => {
  const navigation = useNavigation();

  const { language, themeColor, mode } = useAppContext();

  const { t } = useTranslation();

  const borderColor = mode.palette.borderColor;
  const typography = mode.palette.typography;
  const headerTableColor = alpha(themeColor.palette.primary.light, 0.2);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [dataValue, setDataValue] = useState(users);

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
      label: t("user.table.tableHeader.userName"),
      align: language === "fa" ? "right" : "left",

      minWidth: 130,
    },
    {
      id: 2,
      label: t("user.table.tableHeader.fulName"),
      align: "center",
      minWidth: 130,
    },
    {
      id: 3,
      label: t("user.table.tableHeader.email"),
      align: "center",
      minWidth: 210,
    },
    {
      id: 4,
      label: t("user.table.tableHeader.phoneNumber"),
      align: "center",
      minWidth: 120,
    },
    {
      id: 5,
      label: t("user.table.tableHeader.date"),
      align: "center",
      minWidth: 10,
    },
    // {
    //   id: 6,
    //   label: "Courses",
    //   align: "center",
    //   minWidth: 10,
    // },
  ];

  const rowTable = dataValue?.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  useEffect(() => {
    if (usersValue) {
      setDataValue(usersValue);
    } else {
      setDataValue(users);
    }
    //  console.log("dataValue", dataValue)
  }, [usersValue, users]);

  return (
    <>
      {/*{ navigation.state !== 'idle' && <LoadComponent }*/}

      {loading ? (
        <LoadComponent />
      ) : (
        <TableContainer sx={{ width: "100%" }}>
          <Table>
            <TableHead>
              <TableRow>
                {headCells.map((headCell) => (
                  <StyledTableCell
                    key={headCell.id}
                    align={headCell.align}
                    style={{ minWidth: headCell.minWidth }}
                  >
                    {/* {
                headCell.label === "name" ?  
                <TableSortLabel  > 
             <Typography variant="body1" component="h2">

                {headCell.label}
                </Typography>
                </TableSortLabel> :
                
                <Typography variant="body1" component="h2">
                {headCell.label}
                </Typography>
              } */}

                    {headCell.label === "name" ? (
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
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rowTable.map((item) => (
                <TableRow hover sx={{}} key={item.id}>
                  {/* <TableCell align="center"><Avatar>{ item.avatar}</Avatar></TableCell> */}
                  <TableCell sx={{ borderColor: borderColor }} align="center">
                    <Stack
                      direction="row"
                      gap={3}
                      display="flex"
                      alignItems="center "
                    >
                      <Avatar> {item.userName?.slice(0, 1)} </Avatar>
                      <Typography variant="body2" sx={{ color: typography }}>
                        {item.userName}
                      </Typography>
                    </Stack>
                  </TableCell>
                  {/* <TableCell align="center">{item.lastName}</TableCell> */}
                  <TableCell sx={{ borderColor: borderColor }} align="center">
                    <Typography variant="body2" sx={{ color: typography }}>
                      {language === "fa" ? item.fullNameFa : item.fullNameEn}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ borderColor: borderColor }} align="center">
                    <Typography variant="body2" sx={{ color: typography }}>
                      {item.email}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ borderColor: borderColor }} align="center">
                    <Typography variant="body2" sx={{ color: typography }}>
                      {item.phoneNumber}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ borderColor: borderColor }} align="center">
                    <Typography variant="body2" sx={{ color: typography }}>
                      {item.date}
                    </Typography>
                  </TableCell>
                  {/* <TableCell align="center">
               

                <Typography variant="body2">
                {item.numberOfCourses}  
                </Typography> 
                </TableCell> */}
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
                  sx={{ border: "none", color: typography, direction: "ltr" }}
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
      )}
    </>
  );
};

export default UserList;
