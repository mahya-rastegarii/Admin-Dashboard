import React, { useState } from "react";

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
import { useThemeContext } from "../../context/theme/ThemeContext";
import { useNavigate, useNavigation } from "react-router-dom";
//   import { debounce } from "lodash";
//   import SearchBox from "../components/search/SearchBox";
//   import SortBox from "../components/table/sort/SortBox";
//   import { rows } from "../components/user/UserData";

const UserList = ({ users}) => {

  const navigation = useNavigation()
  const { theme: customTheme } = useThemeContext();

  const borderColor = customTheme.palette.mode.borderColor;
  const typography = customTheme.palette.mode.typography;
  const headerTableColor = alpha(customTheme.palette.primary.light, 0.2);
 


  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const rowTable = users?.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

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
      label: "name",
      align: "left",
      minWidth: 130,
    },
    {
      id: 2,
      label: "fullName",
      align: "center",
      minWidth: 130,
    },
    {
      id: 3,
      label: "email",
      align: "center",
      minWidth: 210,
    },
    {
      id: 4,
      label: "phone Number",
      align: "center",
      minWidth: 120,
    },
    {
      id: 5,
      label: "date",
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
  return (
    <>
    {
      navigation.state !== 'idle' && <LoadingBackdrop/>
    }
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
                  spacing={3}
                  display="flex"
                  alignItems="center "
                >
                  <Avatar>{item.avatar}</Avatar>
                  <Typography variant="body2" sx={{ color: typography }}>
                    {item.userName}
                  </Typography>
                </Stack>
              </TableCell>
              {/* <TableCell align="center">{item.lastName}</TableCell> */}
              <TableCell sx={{ borderColor: borderColor }} align="center">
                <Typography variant="body2" sx={{ color: typography }}>
                  {item.fullNameEn}
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
              sx={{ border: "none", color: typography }}
              rowsPerPageOptions={[5, 10, 15]}
              // colSpan={3}

              count={users.length}
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

export default UserList;
