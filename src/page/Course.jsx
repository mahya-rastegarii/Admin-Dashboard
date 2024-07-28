import { Add, Delete, Edit, StarRate } from "@mui/icons-material";
import {
  alpha,
  Box,
  Button,
  Checkbox,
  Chip,
  IconButton,
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
import React, { useEffect, useState } from "react";
import JsPic from "../assets/img/images.png";
import AddCourse from "../components/course/AddCourse";
import HeaderTable from "../components/table/HeaderTable";
import { useModalContext } from "../context/modal/ModalContext";
import { useFilterContext } from "../context/filter/FilterContext";
import {rowCourse} from '../components/course/CourseData';
import FilterBox from "../components/table/filter/FilterBox";
import SortBox from "../components/table/sort/SortBox";
import SearchBox from "../components/search/SearchBox";
import { debounce } from "lodash";
import RemoveComponent from "../components/remove/RemoveComponent";
import CourseAction from "../components/course/CourseAction";
import {useThemeContext}from "../context/theme/ThemeContext"
import EditCourse from "../components/course/EditCourse";
const Course = () => {
  
  const {theme: customTheme } =useThemeContext()
  const boxBgColor = customTheme.palette.mode.boxBg
  const headerTableColor = alpha(customTheme.palette.primary.light, 0.2)
  const borderColor = customTheme.palette.mode.borderColor
  const typography = customTheme.palette.mode.typography
  const btnColor = customTheme.palette.primary.main

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [courses, setCourses]= useState(rowCourse)
  const [CourseId, setCourseId] =useState(0)
  const [courseData,  setCourseData]=  useState(null)
  const [modal, setModal] = useState("Add Course")
  const [courseSortValue, setCourseSortValue] = useState("Newest");



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
      borderTop: "1px solid  " ,
      borderColor:borderColor,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  // const rowCourse = [
  //   {
  //     title: " Js",
  //     pic: JsPic,
  //     teacher: "mahya Rastegari",
  //     student: 230,
  //     status: "completed",
  //     time: 2,
  //     lastUpdate: "2024/3/1",
  //     rating: "4.5",
  //   },
  //   {
  //     title: " Js",
  //     pic: JsPic,
  //     teacher: "mahya Rastegari",
  //     student: 230,
  //     status: "completed",
  //     time: 2,
  //     lastUpdate: "2024/3/1",
  //     rating: "4.5",
  //   },
  //   {
  //     title: " Js",
  //     pic: JsPic,
  //     teacher: "mahya Rastegari",
  //     student: 230,
  //     status: "completed",
  //     time: 2,
  //     lastUpdate: "2024/3/1",
  //     rating: "4.5",
  //   },
  //   {
  //     title: " Js",
  //     pic: JsPic,
  //     teacher: "mahya Rastegari",
  //     student: 230,
  //     status: "completed",
  //     time: 2,
  //     lastUpdate: "2024/3/1",
  //     rating: "4.5",
  //   },
  //   {
  //     title: " Js",
  //     pic: JsPic,
  //     teacher: "mahya Rastegari",
  //     student: 230,
  //     status: "completed",
  //     time: 2,
  //     lastUpdate: "2024/3/1",
  //     rating: "4.5",
  //   },
  //   {
  //     title: " Js",
  //     pic: JsPic,
  //     teacher: "mahya Rastegari",
  //     student: 230,
  //     status: "completed",
  //     time: 2,
  //     lastUpdate: "2024/3/1",
  //     rating: "4.5",
  //   },
  //   {
  //     title: " Js",
  //     pic: JsPic,
  //     teacher: "mahya Rastegari",
  //     student: 230,
  //     status: "completed",
  //     time: 2,
  //     lastUpdate: "2024/3/1",
  //     rating: "4.5",
  //   },
  // ];

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
      label: "Favour",
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

  // const status = () => {
  //   return (

  //   <Select
  //   value={filterBy}
  //   size="small"
  //   onChange={handleChange}
  //   displayEmpty
  //   inputProps={{ "aria-label": "Without label" }}
  // >

  //   <MenuItem value={10}>Ten</MenuItem>

  //   <MenuItem value={30}>Thirty</MenuItem>
  // </Select>

  // )
  // }
  const { open, setOpen } = useModalContext();
  const {setSelectValue} = useFilterContext()


  // const filterData = [ "Status", "Student", "Time(Hour)" ];
  
 




 
  const searchCourse = (title) =>{
    const newList = courses.filter( item => item.title.toLowerCase().includes(title.toLowerCase()));
  
    setCourses(newList)
  }
  
  const debouncedFetchCourses = debounce((value) => {
    if(value.length> 1){
      searchCourse(value)
    }else if(!value)
      setCourses(rowCourse);
    }, 500);
  
  
  


 const ascendingSort =() => {
 const sortCourse = courses.sort( (a, b) => {
  const date1= new Date(a.lastUpdate)
  const date2= new Date(b.lastUpdate) 
   return date1 - date2
 })
  setCourses(sortCourse)
  
 }

 const descendingSort= () =>{
  
  const sortCourse = courses.sort( (a, b) => {
    const date1= new Date(a.lastUpdate)
    const date2= new Date(b.lastUpdate) 
     return  date2 - date1
   })
       setCourses(sortCourse)

 }

  const sortCourseDate= () => {
    
     if(courseSortValue === "Newest"){
     
      
     
      ascendingSort()
    
    }
    else {
      
     descendingSort()
    
  }
   
  }

  const openModalEdit =(item) => {
    setModal("Edit Course")
    setCourseData(item)
    setOpen(true)
  }

  const openModalInsert  =(item) => {
    setModal("Add Course")
    setOpen(true)
  }


  const openModalDelete= (id) => {
    setModal("Delete Course")
    setOpen(true)
    setCourseId(id)
  }
  const deleteCourse = () =>{
    const newListCourses = courses.filter((item) => item.id !== CourseId)

    setCourses(newListCourses)
    setOpen(false)
    setCourseId(0)
  }

  useEffect(() => {
    setSelectValue("Status")
    descendingSort()
  }, [])


  // useEffect( () => {
   
  // }, [])

  return (
    
    <Box component={Paper} elevation={2} sx={{backgroundColor: boxBgColor, }}>

     

       
        {
          modal ==="Add Course" ? <AddCourse/>
       :modal ==="Edit Course" ? <EditCourse courseData= {courseData}/>
         : modal === "Delete Course" ? 
      <RemoveComponent title=" remove Course" body="Delete  Course ?" clicked={deleteCourse} />
       : null 
}
      


    
      <Stack direction={{ xs:"column-reverse", md:"row"}}   alignItems={{ xs:"flex-start", md:"center"}}  justifyContent="flex-start" spacing={3}  sx={{ padding: 2, marginBottom: 2 }}>
      
      
     
        <Stack direction="row"    spacing={3}
       
        >
        <FilterBox  setCourses={setCourses}/>

        <SortBox sortDate={sortCourseDate} value={courseSortValue} setValue={setCourseSortValue}/>

        </Stack>

        <Stack direction={{xs:"column-reverse", md:"row"}}   spacing={3}>
        <SearchBox handleSearch={debouncedFetchCourses} />

        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={openModalInsert}
          sx={{ borderRadius: 3, backgroundColor: btnColor  }}
          
        >
          Add
        </Button>
        </Stack>
      </Stack>
      {/* <HeaderTable direction="column" filter >
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={handleOpen}
          sx={{ borderRadius: 3 }}
          color="success"
        >
          Add
        </Button>
        {/* <Button
          variant="contained"
          startIcon={<Delete />}
          sx={{ borderRadius: 3 }}
          disabled
          color="error"
        >
          Delete
        </Button> */}
      {/* </HeaderTable>  */}


      <TableContainer sx={{ width: "100%" }}>
        <Table sx={{ padding: 0 }}>
          <TableHead >
            <TableRow >
              {/* <StyledTableCell padding="checkbox">
                <Checkbox />
              </StyledTableCell> */}

              {headCells.map((headCell) => (
                <StyledTableCell key={headCell.id} align={headCell.align}>
                  {headCell.label === "Title"  || headCell.label === "Favour" ? (
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
             
          <TableBody  >
            {
            
            rowTable.map((item) => (
              <TableRow key={item.title} >
                {/* <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell> */}
                <TableCell sx={{ borderColor: borderColor}} >
                  <Stack
                    direction="row"
                    spacing={5}
                    display="flex"
                    alignItems="center "
                  >
                    <img src={item.pic} width="20%" />
                    {/* <Avatar
                      // sx={{ width:"35%"}}
                      src={item.pic}
                      variant="square"
                    ></Avatar> */}
                    <Typography variant="h6" sx={{ color:typography}}>{item.title}</Typography>
                  </Stack>
                </TableCell>
                <TableCell sx={{borderColor: borderColor}} align="center">
                  <Typography variant="body2" sx={{ color:typography}}>{item.teacher}</Typography>
                </TableCell>
                <TableCell sx={{borderColor: borderColor}} align="center">
                  <Typography variant="body2" sx={{ color:typography}}>{item.student}</Typography>
                </TableCell>
                <TableCell sx={{borderColor: borderColor}} align="center">
                  <Chip
                    label={item.status}
                    color="primary"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell sx={{borderColor: borderColor}} align="center">
                  <Typography variant="body2" sx={{ color:typography}}>{item.time}</Typography>
                </TableCell>
                <TableCell sx={{borderColor: borderColor}} align="center">
                  <Typography variant="body2" sx={{ color:typography}}>{item.lastUpdate}</Typography>
                </TableCell>
                <TableCell sx={{borderColor: borderColor}} align="center">
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
                    <Typography variant="body2" sx={{ color:typography}}>{item.rating}</Typography>
                  </Stack>
                </TableCell>
                <TableCell sx={{borderColor: borderColor}} align="center">
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
              fill:typography
            }
          }}>
            <TableRow >
              <TablePagination
             sx={{ border:"none", color:typography  }}
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
      {/* {Data.map((item) => (
        <Card sx={{ maxWidth: 345, borderRadius: 3 }} key={item.title}>
          <CardActionArea  component={Link} to={`/course/${item.title}`}>
            <CardMedia
              component="img"
              alt={item.title}
              height="180"
              image={item.pic}
            />
          </CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.desc}
            </Typography>
            <Stack
              direction="row"
              mt={4}
              justifyContent="space-between"
              alignItems="center"
            >
              <Rating
                name="half-rating-read"
                defaultValue={3.5}
                precision={0.5}
                readOnly
                size="small"
              />

              <Chip label="primary" color="primary" variant="outlined" />
              <Box display="flex">
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="span"
                >
                  {item.student}
                </Typography>
                <PeopleOutlined />
              </Box>
            </Stack>
          </CardContent>

         
          <Divider />

          <CardActions
            
            sx={{ display: "flex", justifyContent: "flex-start" }}
          >
            <IconButton size="small">
              <Delete sx={{ color: red[500] }} />
            </IconButton>
            <IconButton size="small" >
              <ModeEditOutlined  sx={{ color: blue[500] }}/>
            </IconButton>
           
          
          </CardActions>
        
        </Card>

      ))} */}

      {/* </Box> */}
    </Box>
  );
};

export default Course;
