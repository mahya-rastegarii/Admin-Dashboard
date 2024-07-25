import {
  alpha,
  Avatar,
  Box,
  Paper,
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
import { debounce } from "lodash";
import React, { useEffect, useState } from "react";
import SearchBox from "../components/search/SearchBox";
import SortBox from "../components/table/sort/SortBox";
import { rows } from "../components/user/UserData";
import { useThemeContext } from "../context/theme/ThemeContext";

export default function User() {
  const { theme: customTheme } = useThemeContext();
  const boxBgColor = customTheme.palette.mode.boxBg;
  const headerTableColor = alpha(customTheme.palette.primary.light, 0.2);
  const borderColor = customTheme.palette.mode.borderColor;
  const typography = customTheme.palette.mode.typography;
  const btnColor = customTheme.palette.primary.main;

  const [users, setUsers] = useState(rows);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [userSortValue, setUserSortValue] = useState("Newest");

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
      label: "name",
      align: "left",
      minWidth: 130,
    },
    // {
    //   id: 2,
    //   label: "lastName",
    //   align: "center",
    //   minWidth: 130,
    // },
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

  // const {setSelectValue}= useFilterContext()

  // const filterData= ["Courses", "phone Number"]
  //  setSelectValue(filterData)

  const rowTable = users.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  // useEffect(() => {
  //   setSelectValue(filterData)
  // }, [])
  const searchUser = (name) => {
    const newList = users.filter((item) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );

    setUsers(newList);
  };

  const debouncedFetchUser = debounce((value) => {
    if (value.length > 1) {
      searchUser(value);
    } else if (!value) setUsers(rows);
  }, 500);

  const ascendingSort = () => {
    const sortUsers = users.sort((a, b) => {
      const date1 = new Date(a.date);
      const date2 = new Date(b.date);
      return date1 - date2;
    });
    setUsers(sortUsers);
  };

  const descendingSort = () => {
    const sortUsers = users.sort((a, b) => {
      const date1 = new Date(a.date);
      const date2 = new Date(b.date);
      return date2 - date1;
    });
    setUsers(sortUsers);
  };

  const sortUserDate = () => {
    if (userSortValue === "Newest") {
      ascendingSort();
    } else {
      descendingSort();
    }
  };

  useEffect(() => {
    descendingSort();
  }, []);

  return (
    <Box component={Paper} elevation={2} sx={{ backgroundColor: boxBgColor }}>
      {/* <Stack direction="row" spacing={1} sx={{ padding: 2}} >
      <IconButton aria-label="Sort">
      <FilterList  sx={{ fontSize:27}} />
        <Typography variant="body2" component="span" color="#000">
          filter
        </Typography>
  
      </IconButton>
       
      <IconButton aria-label="Sort">
      <Sort  sx={{ fontSize:27}} />
        <Typography variant="body2" component="span" color="#000">
          sort
        </Typography>
  
      </IconButton>
      
    <SearchBox/>
      </Stack> */}
      {/* <HeaderTable direction="row" HandleSearch={debouncedFetch}/> */}

      <Stack
        direction={{xs:"column-reverse", md:"row"}}
        alignItems={{xs:"flex-start", md:"center"}}
        justifyContent=" flex-start"
        spacing={3}
        sx={{ padding: 2, marginBottom: 2 }}
      >
        <SortBox
          sortDate={sortUserDate}
          value={userSortValue}
          setValue={setUserSortValue}
        />
        
        <SearchBox handleSearch={debouncedFetchUser} />

        
      </Stack>

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
                      {item.name}
                    </Typography>
                  </Stack>
                </TableCell>
                {/* <TableCell align="center">{item.lastName}</TableCell> */}
                <TableCell sx={{ borderColor: borderColor }} align="center">
                  <Typography variant="body2" sx={{ color: typography }}>
                    {item.email}
                  </Typography>
                </TableCell>
                <TableCell sx={{ borderColor: borderColor }} align="center">
                  <Typography variant="body2" sx={{ color: typography }}>
                    {item.phone}
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
                fill:typography
              }

            }}
              >
            <TableRow>
              <TablePagination
              sx={{ border:"none", color:typography  }}
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
    </Box>
  );
}
