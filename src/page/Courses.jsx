import { Add, RestaurantMenu } from "@mui/icons-material";
import { Box, Button, Paper, Stack } from "@mui/material";
import _ from "lodash";
import  { Suspense, useState } from "react";
import { Await, defer, useLoaderData, useNavigate } from "react-router-dom";
import AddCourse from "../components/course/AddCourse";
import CourseList from "../components/course/CourseList";
import EditCourse from "../components/course/EditCourse";
import LoadComponent from "../components/Loading/LoadComponent";
import RemoveComponent from "../components/remove/RemoveComponent";
import SortBox from "../components/table/sort/SortBox";

import { useModalContext } from "../context/modal/ModalContext";

import { useTranslation } from "react-i18next";
import { useAppContext } from "../context/app/app-context";

import { toast } from "react-toastify";
import SearchBox from "../components/search/SearchBox";
import FilterBox from "../components/table/filter/FilterBox";
import { supabase } from "../core/createClient";


const Courses = () => {
  const { courses } = useLoaderData();

  const navigate = useNavigate();

  const { language, themeColor, mode } = useAppContext();
  const { t } = useTranslation();

  const boxBgColor = mode.palette.boxBg;

  const btnColor = themeColor.palette.primary.main;
  const btnHoverColor = themeColor.palette.primary.dark;

  const [coursesValue, setCoursesValue] = useState(null);
  const [CourseId, setCourseId] = useState(null);
  const [courseData, setCourseData] = useState(null);
  const [modal, setModal] = useState("Add Course");
  const [loading, setLoading] = useState(false);

  const { open, setOpen } = useModalContext();

  const searchCourse = async (title) => {
    setLoading(true);
    const lowerTitle = title.toLowerCase();
    const { data, error } = await supabase
      .from("course")
      .select("*")
      .ilike("title", `%${lowerTitle}%`);
    

        console.log("data", data)
         setCoursesValue(data);
    
    setLoading(false);
  };

  const debouncedFetchCourses = _.debounce((value) => {
    if (value.length >= 2) {
      searchCourse(value);
    } else if (!value) setCoursesValue(null);
  }, 500);




  const descendingSort = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("course")
      .select("*")
      .order("lastUpdate", { ascending: true });
  

     setCoursesValue(data);
   
    setLoading(false);
  };

  const sortCourseData = (item) => {
    if (item === "Newest" || item === "جدید ترین") {
      setCoursesValue(null);
     
    } else {
      descendingSort();

    }
  };

  const openModalEdit = (item) => {
    setModal("Edit Course");
    setCourseData(item);
    setCourseId(item.id);
    setOpen(true);
  };

  const openModalInsert = () => {
    setModal("Add Course");
    setOpen(true);
  };

  const openModalDelete = (id, picSource) => {
    setModal("Delete Course");
    setOpen(true);
    setCourseId(id);
    setCourseData(picSource);
  };

  const deleteImageCourse = async () => {
    const { data, error } = await supabase.storage
      .from("Images")
      .remove([courseData.slice(73)]);
    if(error){
      return false
    } else{

      console.log("response", data);
      return true;
    }

  };
  const deleteCourse = async () => {
     
    const toastId = toast.loading(t("promise.pendingDelete"));

    setOpen(false);
    try{
       
      const deleteImage = deleteImageCourse();
      if(deleteImage){
        const {error} =await supabase.from("course").delete().eq("id", CourseId);
        if(error){
          throw error;
        } else{
          toast.update(toastId, {
            render:t("promise.success"),
            type: "success",
            isLoading: false,
            autoClose: 3000, 
          });
          const url = new URL(window.location.href);
          navigate(url.pathname);
        }
      } else{
        throw new Error(t("promise.error"));
      }
    } catch(err){
      toast.update(toastId, {
        render:  t("promise.error"),
        type: "error",
        isLoading: false,
        autoClose: 5000, 
      });
    }

     
  
          
    

  
  };

 

  const insertCourse = async (newCourse) => {

    const toastId = toast.loading(t("promise.pending"));
   try{

    const {data, error} =await supabase.from("course").insert(newCourse).select("*");
    if(error){
      throw error;
    } 
    else {
      toast.update(toastId, {
        render: t("promise.success"),
        type: "success",
        isLoading: false,
        autoClose: 3000, 
      });
      const url = new URL(window.location.href);
        navigate(url.pathname);
      console.log("data", data)
    }
   }
   catch(error){
    toast.update(toastId, {
      render: t("promise.error"),
      type: "error",
      isLoading: false,
      autoClose: 5000, 
    });
   }

    // toast.promise(response, {
    //   pending: t("promise.pending"),
    //   success: {
    //     render() {
    //       const url = new URL(window.location.href);
    //       navigate(url.pathname);
         
    //       return t("promise.success");
    //     },
    //   },
    //   error: {
    //     render() {
    //       return t("promise.error");
    //     },
    //   },
    // });
   

   
  };

  const editCourse = async (newData) => {
    setOpen(false);
    const response = supabase
      .from("course")
      .update(newData)
      .eq("id", CourseId)
      .select("*");
    
    toast.promise(response, {
      pending: t("promise.pending"),
      success: {
        render() {
          const url = new URL(window.location.href);
          navigate(url.pathname);
          setCourseId(null);
          setCourseData(null);
         
          return t("promise.success")
        },
      },
      error: {
        render() {
          
          return t("promise.error")
        },
      },
    });
    

  };

 

  return (
    <Box component={Paper} elevation={2} sx={{ backgroundColor: boxBgColor, marginX:{xs: 2, md: 4}, overflow:'hidden'}}>
      {modal === "Add Course" ? (
        <AddCourse insertCourse={insertCourse} />
      ) : modal === "Edit Course" ? (
        <EditCourse editCourse={editCourse} courseData={courseData} />
      ) : modal === "Delete Course" ? (
        <RemoveComponent
          title={t("courses.removeCourse.titleModal")}
          body={t("courses.removeCourse.text")}
          clicked={deleteCourse}
        />
      ) : null}

      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="flex-start"
        gap={2}
        sx={{ padding: 2, marginBottom: 2 }}
      >
        <Stack direction="row" gap={2}>
          <FilterBox
            setLoading={setLoading}
            setCoursesData={setCoursesValue}
            
          />

          <SortBox
            sortData={sortCourseData}
           
          />
        </Stack>

        <Stack direction={{ xs: "column-reverse", md: "row" }} gap={2}>
          <SearchBox
            handleSearch={debouncedFetchCourses}
            placeholderText={t("search.searchPlaceholderCourse")}
          />

          <Button
            variant="contained"
            startIcon={<Add sx={{ marginLeft: language === "fa" ? 1 : 0 }} />}
            onClick={openModalInsert}
            sx={{ borderRadius: 3, backgroundColor: btnColor,

              "&:hover" :{
                backgroundColor:btnHoverColor
              }
             }}
          >
            {t("courses.addBtn")}
          </Button>
        </Stack>
      </Stack>

      <Suspense fallback={<LoadComponent />}>
        <Await resolve={courses}>
          {(loadCourses) => (
            <CourseList
              openModalDelete={openModalDelete}
              openModalEdit={openModalEdit}
              courses={loadCourses}
              loading={loading}
             
              coursesValue={coursesValue}
            />
          )}
        </Await>
      </Suspense>
    </Box>
  );
};

export async function courseLoader() {
  return defer({
    courses: fetchCourse(),
  });
}

const fetchCourse = async () => {

  let { data, error } = await supabase
    .from("course")
    .select("*")
    .order("lastUpdate", { ascending: false });
 
  return data;
};

export default Courses;
