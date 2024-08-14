import {
  AccessTimeOutlined,
  InfoOutlined,
  PersonOutline,
  SchoolOutlined,
} from "@mui/icons-material";
import {
  Box,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../context/app/app-context";
import { useModalContext } from "../../context/modal/ModalContext";
import { useThemeContext } from "../../context/theme/ThemeContext";
import Form from "../form/Form";
import MenuContainer from "../menu/MenuContainer";
import ModalComponent from "../modal/ModalComponent";

// import CourseAction from './CourseAction';

const EditCourse = ({ courseData, editCourse }) => {
  const { theme } = useThemeContext();
  const { language } = useAppContext();

  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setOpen } = useModalContext();

  const borderColor = theme.palette.mode.borderColor;
  const typography = theme.palette.mode.typography;
  const focusColor = theme.palette.primary.light;

  const { title, time, teacher, statusFa, statusEn, picture } = courseData;

  const status = language === "fa" ? statusFa : statusEn;
  const [item, setItem] = useState(status);

  // const VisuallyHiddenInput = styled("input")({
  //   clip: "rect(0 0 0 0)",
  //   clipPath: "inset(50%)",
  //   height: "97%",
  //   overflow: "hidden",
  //   position: "absolute",
  //   bottom: 0,
  //   left: 0,
  //   whiteSpace: "nowrap",
  //   width: "97%",
  //   margin: 3,
  // });
  // const course = [
  //   {
  //     label: "CourseName",
  //     icon: <SchoolOutlined />,
  //     value: title,
  //     error: "فیلد نام نمیتواند خالی باشد",
  //     name: "title",
  //   },
  //   {
  //     label: "Time",
  //     icon: <AccessTimeOutlined />,
  //     value: time,
  //     error: "فیلد زمان نمیتواند خالی باشد",
  //     name: "time",
  //     type: "number",
  //   },
  //   {
  //     label: "teacher",
  //     icon: <PersonOutline />,
  //     value: teacher,
  //     error: "فیلد زمان نمیتواند خالی باشد",
  //     name: "time",
  //     type: "number",
  //   },
  // ];

  const selectField = [
    t("filter.status.presell"),
    t("filter.status.completed"),
    t("filter.status.inProgress"),
  ];

  const editCourseHandler = (data) => {
    let { title, time, teacher } = data;

    const date = new Date();
    const today = date.toISOString().split("T")[0];

    const newData = {
      title,
      titleFa: title,
      teacher,
      lastUpdate: today,
      time,
      statusEn: item,
      statusFa: item,
    };

    console.log("newData", newData);
    editCourse(newData);
  };

  const cancelSubmit = () => {
    setOpen(false);
    reset();
  };

  return (
    <ModalComponent
      title={t("courses.editCourse.title")}
      closeForm={cancelSubmit}
    >
      <Form
        align="center"
        Title={t("courses.editCourse.title")}
        titleButton={t("courses.modalCourse.saveBtn")}
        onSubmit={handleSubmit(editCourseHandler)}
        cancelSubmit={cancelSubmit}
      >
        <Stack
          direction="column"
          spacing={3}
          sx={{
            "& label": {
              color: typography,
              opacity: 0.6,
            },

            "& input , div , p , svg": {
              color: typography,
            },
            "& fieldset ": {
              borderColor: borderColor,
               textAlign: language ==='fa'? "right": "left"



            },
          }}
        >
          <Box
            // role={undefined}
            sx={{
              position: "relative",
              marginBottom: 3,
              borderRadius: 1,
            }}
            padding={0}
          >
            <img src={picture} width="100%" />
          </Box>
          {/* {course.map((item) => (
            <Stack
              key={item.label}
              direction="row"
              spacing={2}
              alignItems="center"
            >
              {item.icon}
              <TextField
                {...register(item.name, {required:item.error})}
                id="outlined-basic"
                label={item.label}
                type={item.type ? item.type : "text"}
                color="secondary"
                variant="outlined"
                size="small"
                InputProps={{
                  endAdornment:
                    item.type === "number" ? (
                      <InputAdornment position="end">hour</InputAdornment>
                    ) : null,
                }}
                defaultValue={item.value}
              />

              {
             
              item.error && (
               <Typography sx={{color:"red"}}>
                {
                  item.error
                }

               </Typography>
              )
            }
            </Stack>
          ))} */}

          <Stack direction="row" gap={2} alignItems="center">
            <SchoolOutlined />
            <Stack direction="column">
              <TextField

sx={{
  "& label" :{
    // direction:"rtl"
    right:language ==='fa' && '20px',
    transformOrigin: language=== 'fa' ? "top right": "top left",
    paddingRight:language ==='fa'&& "12px"
  }
}}
                {...register("title", {
                  required: t("courses.modalCourse.errors.courseNameError"),
                })}
                id="outlined-basic"
                label={t("courses.modalCourse.courseNameLabel")}
                type="text"
                // color="secondary"
                variant="outlined"
                size="small"
                defaultValue={title}
              />

              {errors.title && errors.title.type === "required" && (
                <Typography sx={{ color: "red !important" }}>
                  {errors.title?.message}
                </Typography>
              )}
            </Stack>
          </Stack>

          <Stack direction="row" gap={2} alignItems="center">
            <PersonOutline />
            <Stack direction="column">
              <TextField
               sx={{
                "& label" :{
                  // direction:"rtl"
                  right:language ==='fa' && '20px',
                  transformOrigin: language=== 'fa' ? "top right": "top left",
                  paddingRight:language ==='fa'&& "12px"
                }
              }}
                {...register("teacher", {
                  required: t("courses.modalCourse.errors.teacherError"),
                })}
                id="outlined-basic"
                label={t("courses.modalCourse.teacherLabel")}
                type="text"
                // color="secondary"
                variant="outlined"
                size="small"
                defaultValue={teacher}
              />

              {errors.teacher && errors.teacher.type === "required" && (
                <Typography sx={{ color: "red !important" }}>
                  {errors.teacher?.message}
                </Typography>
              )}
            </Stack>
          </Stack>
          <Stack direction="row" gap={2} alignItems="center">
            <AccessTimeOutlined />
            <Stack direction="column">
              <TextField
               sx={{
                "& label" :{
                  // direction:"rtl"
                  right:language ==='fa' && '20px',
                  transformOrigin: language=== 'fa' ? "top right": "top left",
                  paddingRight:language ==='fa'&& "12px"
                }
              }}
                {...register("time", {
                  required: t("courses.modalCourse.errors.timeError"),
                })}
                id="outlined-basic"
                label={t("courses.modalCourse.timeLabel")}
                type="number"
                // color="secondary"
                variant="outlined"
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {t("courses.modalCourse.hour")}
                    </InputAdornment>
                  ),
                }}
                defaultValue={time}
              />

              {errors.time && errors.time.type === "required" && (
                <Typography sx={{ color: "red !important" }}>
                  {errors.time?.message}
                </Typography>
              )}
            </Stack>
          </Stack>

          <Stack
            direction="row"
            gap={2}
            alignItems="center"
            justifyContent="center"
          >
            <InfoOutlined />
            {/* <TextField
              {...register("select")}
              id="outlined-basic"
              label="status"
              select
              color="secondary"
              size="small"
              defaultValue={statusEn}
              variant="outlined"
            >
              {selectField.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField> */}

            <Box sx={{ border: ` 1px solid ${borderColor}`, borderRadius: 1 }}>
              <MenuContainer
                menuItem={selectField}
                selectedItem={item}
                setSelectedItem={setItem}
              />
            </Box>
          </Stack>
        </Stack>
      </Form>
    </ModalComponent>
  );
};

export default EditCourse;
