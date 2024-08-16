import { Add } from "@mui/icons-material";
import { Box, Button, Paper, Stack } from "@mui/material";
import _ from "lodash";
import React, { Suspense, useState } from "react";
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
  const borderColor = mode.palette.borderColor;
  const typography = mode.palette.typography;
  const btnColor = themeColor.palette.primary.main;

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

    setCoursesValue(data);
    setLoading(false);
  };

  const debouncedFetchCourses = _.debounce((value) => {
    if (value.length >= 2) {
      searchCourse(value);
    } else if (!value) setCoursesValue(null);
  }, 500);

  // const ascendingSort = () => {
  //   const sortCourse = coursesData.sort((a, b) => {
  //     const date1 = new Date(a.lastUpdate);
  //     const date2 = new Date(b.lastUpdate);
  //     return date1 - date2;
  //   });
  //   setCoursesData(sortCourse);
  // };

  // const descendingSort = () => {
  //   const sortCourse = coursesData.sort((a, b) => {
  //     const date1 = new Date(a.lastUpdate);
  //     const date2 = new Date(b.lastUpdate);
  //     return date2 - date1;
  //   });
  //   setCoursesData(sortCourse);
  // };

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
      // console.log('Newest')
    } else {
      descendingSort();

      // console.log('Oldest')
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

    console.log("response", data);
  };
  const deleteCourse = async () => {
    // const newListCourses = courses.filter((item) => item.id !== CourseId)
    setOpen(false);
    const response = supabase.from("course").delete().eq("id", CourseId);
    deleteImageCourse();
    toast.promise(response, {
      pending: t("promise.pendingDelete"),
      success: {
        render() {
          const url = new URL(window.location.href);
          navigate(url.pathname);
          setCourseId(null);
          setCourseData(null);

          return t("promise.success");
        },
      },
      error: {
        render() {
          return t("promise.error");
        },
      },
    });
    // if (response.status === 204) {
    //   const url = new URL(window.location.href);
    //   navigate(url.pathname);
    //   setCourseId(null);
    //   setCourseData(null);
    // }

    console.log("remove", response);

    //  fetchCourse()
  };

  // const fetchRequest = async() =>{
  //   const response = await httpService.get("/course");
  //  const result = response.data;
  //  console.log("response", result)
  // }

  const insertCourse = async (newCourse) => {
    const response = supabase.from("course").insert(newCourse).select("*");

    toast.promise(response, {
      pending: t("promise.pending"),
      success: {
        render() {
          const url = new URL(window.location.href);
          navigate(url.pathname);
          return t("promise.success");
        },
      },
      error: {
        render() {
          return t("promise.error");
        },
      },
    });
    // if (courses) {
    //   const url = new URL(window.location.href);
    //   navigate(url.pathname);
    // }

    console.log("Courses", courses);
    // setEvent( prevEvent => [...prevEvent, events])
    // fetchCourse()
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
          return t("promise.success");
        },
      },
      error: {
        render() {
          return t("promise.error");
        },
      },
    });
    // if (response.status === 200) {
    //   const url = new URL(window.location.href);
    //   navigate(url.pathname);
    //   setCourseId(null);
    //   setCourseData(null);
    // }

    console.log("courses Edit", response);
    // fetchCourse();
  };

  // useEffect(() => {
  //   setSelectValue("Status");

  //   // fetchCourse();
  // }, []);

  // useEffect( () => {

  // }, [])

  return (
    <Box component={Paper} elevation={2} sx={{ backgroundColor: boxBgColor }}>
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
            //  setCourses={setCourses}
          />

          <SortBox
            sortData={sortCourseData}
            // selectedIndex={courseSortValue}
            // setSelectedIndex= {setCourseSortValue}
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
            sx={{ borderRadius: 3, backgroundColor: btnColor }}
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
              // setCoursesData={setCoursesData}
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
