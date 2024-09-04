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
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../context/app/app-context";
import { useModalContext } from "../../context/modal/ModalContext";
import Form from "../form/Form";
import MenuContainer from "../menu/MenuContainer";
import ModalComponent from "../modal/ModalComponent";

// import CourseAction from './CourseAction';

const EditCourse = ({ courseData, editCourse }) => {
  const { language, themeColor, mode } = useAppContext();

  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: courseData?.title,
      teacher: courseData?.teacher,
      time: courseData?.time,
    },
  });

  const { setOpen } = useModalContext();

  const borderColor = mode.palette.borderColor;
  const typography = mode.palette.typography;
  const focusColor = themeColor.palette.primary.light;



  const status = language === "fa" ? courseData?.statusFa : courseData?.statusEn;
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
 

  const selectField = [
    t("filter.status.presell"),
    t("filter.status.completed"),
    t("filter.status.inProgress"),
  ];

  const editCourseHandler = (data) => {
    let { title, time, teacher } = data;

    const date = new Date();
    const today = date.toISOString().split("T")[0];

    const typeFA =
      item === "Presell"
        ? "پیش فروش"
        : item === "Completed"
        ? "تکمیل شده"
        : item === "In Progress"
        ? "در حال برگزاری"
        : null;
    const typeEn =
      item === "پیش فروش"
        ? "Presell"
        : item === "تکمیل شده"
        ? "Completed"
        : item === "در حال برگزاری"
        ? "In Progress"
        : null;
    const statusFA = language === "fa" ? item : typeFA;
    const statusEN = language === "en" ? item : typeEn;
    const newData = {
      title: title,
      teacher: teacher,
      lastUpdate: today,
      time: time,
      statusEn: statusEN,
      statusFa: statusFA,
    };

  
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
              textAlign: language === "fa" ? "right" : "left",
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
            <img src={courseData?.picture} width="100%" />
          </Box>
        

          <Stack direction="row" gap={2} alignItems="center">
            <SchoolOutlined />
            <Stack direction="column">
              <TextField
                sx={{
                  "& label": {
                    // direction:"rtl"
                    right: language === "fa" && "20px",
                    transformOrigin:
                      language === "fa" ? "top right" : "top left",
                    paddingRight: language === "fa" && "12px",
                  },
                }}
                {...register("title", {
                  required: t("courses.modalCourse.required.courseNameError"),
                })}
                id="outlined-basic"
                label={t("courses.modalCourse.courseNameLabel")}
                type="text"
                // color="secondary"
                variant="outlined"
                size="small"
                // defaultValue={title}
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
                  "& label": {
                    // direction:"rtl"
                    right: language === "fa" && "20px",
                    transformOrigin:
                      language === "fa" ? "top right" : "top left",
                    paddingRight: language === "fa" && "12px",
                  },
                }}
                {...register("teacher", {
                  required: t("courses.modalCourse.required.teacherError"),
                })}
                id="outlined-basic"
                label={t("courses.modalCourse.teacherLabel")}
                type="text"
                // color="secondary"
                variant="outlined"
                size="small"
                // defaultValue={teacher}
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
                  "& label": {
                    // direction:"rtl"
                    right: language === "fa" && "20px",
                    transformOrigin:
                      language === "fa" ? "top right" : "top left",
                    paddingRight: language === "fa" && "12px",
                  },
                }}
                {...register("time", {
                  required: t("courses.modalCourse.required.timeError"),
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
                // defaultValue={time}
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
