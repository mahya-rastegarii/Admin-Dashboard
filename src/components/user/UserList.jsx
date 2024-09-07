import React, { useEffect, useState } from "react";

import {
  alpha,
  Avatar,
  Box,
  Stack,
  styled,
  TableCell,
  tableCellClasses,

  TablePagination,
  TableRow,
  Typography
} from "@mui/material";

import { useTranslation } from "react-i18next";
import { useNavigation } from "react-router-dom";
import { useAppContext } from "../../context/app/app-context";
import LoadComponent from "../Loading/LoadComponent";
import TableContainers from "../table/TableContainers";

const UserList = ({ users, loading, usersValue }) => {
  const navigation = useNavigation();

  const { language, themeColor, mode } = useAppContext();

  const { t } = useTranslation();

  const borderColor = mode.palette.borderColor;
  const typography = mode.palette.typography;
  const bgColor = mode.palette.boxBg;
  const headerTableColor = alpha(themeColor.palette.primary.light, 0.2);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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
      minWidth: 130,
    },
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
 
  }, [usersValue, users]);

  return (
    <>
     

      {loading ? (
        <LoadComponent />
      ) : (
        
        <Box >
        <TableContainers headCells={headCells}>
              {rowTable.map((item) => (
                <TableRow hover sx={{}} key={item.id}>
                
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
              
                </TableRow>
              ))}
              </TableContainers>
              <TablePagination
                      sx={{ border: "none", color: typography, direction: "ltr", display:'flex',
                        justifyContent:{ xs: 'center', md:language === "fa" ? 'flex-end' :'flex-start'},
                        

                        "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon , .css-1utq5rl": {
                          fill: typography,
                        },
                       "& .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper , .css-pwxzbm": {
                        backgroundColor:bgColor,
                        color:typography,
                       },

                     
                      
                       }}
                      rowsPerPageOptions={[5, 10, 15]}
                 
                      // component="div"
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

export default UserList;
