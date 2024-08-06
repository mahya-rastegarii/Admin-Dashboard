import {
  alpha,
  Box,
  CircularProgress,
  Paper,
  Stack,
  styled,
  TableCell,
  tableCellClasses
} from "@mui/material";
import { debounce } from "lodash";
import React, { Suspense, useEffect, useState } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import SearchBox from "../components/search/SearchBox";
import SortBox from "../components/table/sort/SortBox";
import { rows } from "../components/user/UserData";
import UserList from "../components/user/UserList";
import { useThemeContext } from "../context/theme/ThemeContext";
import { supabase } from "../core/createClient";
import LoadComponent from "../components/Loading/LoadComponent";

export default function User() {


  const data = useLoaderData()
  const { theme: customTheme } = useThemeContext();
  const boxBgColor = customTheme.palette.mode.boxBg;
  const headerTableColor = alpha(customTheme.palette.primary.light, 0.2);
  const borderColor = customTheme.palette.mode.borderColor;
  const typography = customTheme.palette.mode.typography;
  const btnColor = customTheme.palette.primary.main;

  const [users, setUsers] = useState([]);
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

  // const {setSelectValue}= useFilterContext()

  // const filterData= ["Courses", "phone Number"]
  //  setSelectValue(filterData)

  const rowTable = users?.slice(
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

  const fetchUsers = async() =>{
    
     let { data, error } = await supabase
     .from('users')
     .select('*')
     .order('date', {ascending:false})

     setUsers(data)
    // console.log("Data", data)
  } 

  useEffect(() => {
    descendingSort();
    fetchUsers()
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

         <Suspense fallback={<LoadComponent/>}>

          <Await resolve={data.users}>
             {
               (fetchUsers) => <UserList users={fetchUsers}/>
             } 
          </Await>
         </Suspense>
    </Box>
  );
}

export async function userLoader (){
   
  return defer ({
    users: fetchUsers()
  })
}

const fetchUsers = async() =>{
    
  const {data} = await supabase
  .from('users')
  .select('*')
  .order('date', {ascending:false})

  return data
 // console.log("Data", data)
} 