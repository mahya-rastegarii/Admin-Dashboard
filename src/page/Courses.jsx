import { Add, Delete, Edit, StarRate } from "@mui/icons-material";
import {
  alpha,
  Box,
  Button,
  Checkbox,
  Chip,
  CircularProgress,
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
import React, { Suspense, useEffect, useState } from "react";
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
import { supabase } from "../core/createClient";
import CourseList from "../components/course/CourseList";
import {Await, defer, useLoaderData, useNavigate } from "react-router-dom";
import LoadComponent from "../components/Loading/LoadComponent";

const Courses = () => {

  const data = useLoaderData()
  
  const navigate = useNavigate()
  const {theme: customTheme } =useThemeContext()
  const boxBgColor = customTheme.palette.mode.boxBg
  const borderColor = customTheme.palette.mode.borderColor
  const typography = customTheme.palette.mode.typography
  const btnColor = customTheme.palette.primary.main

  
  const [courses, setCourses]= useState([])
  const [CourseId, setCourseId] =useState(null)
  const [courseData,  setCourseData]=  useState(null)
  const [modal, setModal] = useState("Add Course")
  const [courseSortValue, setCourseSortValue] = useState("Newest");



 

  

  

  

  

  const { open, setOpen } = useModalContext();
  const {setSelectValue} = useFilterContext()


  
 




 
  const searchCourse = (title) =>{
    const newList = data.courses.filter( item => item.title.toLowerCase().includes(title.toLowerCase()));
  
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
    setCourseId(item.id)
    setOpen(true)
  }

  const openModalInsert  =() => {
    setModal("Add Course")
    setOpen(true)
  }


  const openModalDelete= (id) => {
    setModal("Delete Course")
    setOpen(true)
    setCourseId(id)
  }
  const deleteCourse = async() =>{
    // const newListCourses = courses.filter((item) => item.id !== CourseId)
    setOpen(false)
    const response = await supabase
    .from('course')
   .delete()
    .eq('id', CourseId)
   
    if( response.status === 204) {
       const url = new URL(window.location.href)
       navigate(url.pathname);
       setCourseId(null)
    }
    
    console.log('remove', response);

    //  fetchCourse()
   
  }

  // const fetchRequest = async() =>{
  //   const response = await httpService.get("/course");
  //  const result = response.data;
  //  console.log("response", result)
  // }

 

  const insertCourse= async (newCourse) => {

    const { data: courses, error } = await supabase
        .from('course')
        .insert(newCourse)
        .select('*')


        if(courses) {
          const url = new URL(window.location.href);
          navigate(url.pathname);
          
       }
      
        console.log( 'Courses', courses)
        // setEvent( prevEvent => [...prevEvent, events])
        // fetchCourse()

  }

  const editCourse = async(newData) => {
    setOpen(false)
    const response= await supabase
    .from('course')
    .update(newData)
    .eq('id', CourseId)
    .select('*')

    if( response.status === 200) {
      const url = new URL(window.location.href)
      navigate(url.pathname);
      setCourseId(null)
   }

    console.log( 'courses Edit', response)
    // fetchCourse();
  }

  useEffect(() => {
    setSelectValue("Status")
    
    fetchCourse()
    // console.log( 'courses', courses)
  }, [])


  // useEffect( () => {
   
  // }, [])

  return (

  
    <Box component={Paper} elevation={2} sx={{backgroundColor: boxBgColor, }}>

     

       
        {
          modal ==="Add Course" ? <AddCourse insertCourse={insertCourse}/>
       :modal ==="Edit Course" ? <EditCourse editCourse={editCourse} courseData= {courseData}/>
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
    
    <Suspense fallback={<LoadComponent/>}>

   <Await resolve={data.courses}>
   {
     (loadCourses) => <CourseList openModalDelete={openModalDelete} openModalEdit={openModalEdit} courses={loadCourses}/>
   } 
   </Await>
    </Suspense>

    </Box>
    
  );
};


export async function courseLoader (){
   
  return defer ({
    courses: fetchCourse()
  })
}

 const fetchCourse = async() =>{
    
     let { data, error } = await supabase
     .from('course')
     .select('*')
     .order('lastUpdate', {ascending:false})

     return data;
    
  } 



export default Courses;
