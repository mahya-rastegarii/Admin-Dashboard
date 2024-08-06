import { AccessTimeOutlined, SchoolOutlined } from "@mui/icons-material";
import {
  Box,
  InputAdornment,
  MenuItem,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useModalContext } from "../../context/modal/ModalContext";
import { useThemeContext } from "../../context/theme/ThemeContext";
import Form from "../form/Form";
import ModalComponent from "../modal/ModalComponent";

// import CourseAction from './CourseAction';

const EditCourse = ({ courseData, editCourse }) => {
  const { theme } = useThemeContext();
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const { setOpen } = useModalContext();

  const borderColor = theme.palette.mode.borderColor;
  const typography = theme.palette.mode.typography;
  const focusColor = theme.palette.primary.light;

  const { title, time, statusEn, picture } = courseData;

  const [uploadImage, setUploadImage] = useState(picture);
  const [imageFile, setImageFile] = useState();

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: "97%",
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: "97%",
    margin: 3,
  });
  const course = [
    {
      label: "CourseName",
      icon: <SchoolOutlined />,
      value: title,
      error: "فیلد نام نمیتواند خالی باشد",
      name: "title",
    },
    {
      label: "Time",
      icon: <AccessTimeOutlined />,
      value: time,
      error: "فیلد زمان نمیتواند خالی باشد",
      name: "time",
      type: "number",
    },
  ];

  const selectField = ["presell", "completed", "in Progress"];

  const ChangeImages = (e) => {
    const image = e.target.files[0];
    setImageFile(image);

    setUploadImage(URL.createObjectURL(image));

    console.log("image", image);
  };

  // const uploadFile = async() =>{

  //   const {data}= await supabase
  //   .storage
  //   .from('Images')
  //   .update('Course_pic/'+ imageFile.name, imageFile)
  //     console.log('data', data)
  // }

  const editCourseHandler = (data) => {
    let { title, time, select } = data;
    //  uploadFile()
    const newData = {
      title: title,
      titleFa: title,
      time,
      picture: uploadImage,
      statusEn: select,
      statusFa: select,
    };

    console.log("newData", newData);
    editCourse(newData);
  };

  const cancelSubmit= () => {
    setOpen(false)
    reset()
  }

  return (
    <ModalComponent title="Edit Course" closeForm={cancelSubmit}>
      <Form
        align="center"
        Title="Add Course"
        titleButton="Save"
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
            },
          }}
        >
          <Box
            component="label"
            // role={undefined}
            sx={{
              position: "relative",
              cursor: "pointer",
              border: "3px dashed #ccc",
              marginBottom: 3,
              borderRadius: 1,
              display: "flex",
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
            padding={0}
          >
            <img src={uploadImage} width="100%" />

            <Box sx={{ display: "none" }}>
              <VisuallyHiddenInput type="file" onChange={ChangeImages} />
            </Box>
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

        <Stack
              direction="row"
              spacing={2}
              alignItems="center"
            >
              <SchoolOutlined />
              <Stack direction="column">
              <TextField
                {...register("title", {required: "فیلد نام نمیتواند خالی باشد"})}
                id="outlined-basic"
                label="CourseName"
                type="text"
                // color="secondary"
                variant="outlined"
                size="small"
                defaultValue={title}
              />

              {
             
              errors.title && errors.title.type=== "required" && (
               <Typography sx={{color:"red !important"}}>
                {
                  errors.title?.message
                }

               </Typography>
              )
            }

            </Stack>
            </Stack>
        <Stack
             
              direction="row"
              spacing={2}
              alignItems="center"
            >
            <AccessTimeOutlined />
            <Stack direction="column">
              <TextField
                {...register("time", {required:"فیلد زمان نمیتواند خالی باشد"})}
                id="outlined-basic"
                label="Time"
                type="number"
                // color="secondary"
                variant="outlined"
                size="small"
                InputProps={{
                  endAdornment:
                  (
                      <InputAdornment position="end">hour</InputAdornment>
                    )
                }}
                defaultValue={time}
              />

              {
             
             errors.time && errors.time.type === "required" && (
              <Typography sx={{color:"red !important"}}>
               {
                 errors.time?.message
               }

              </Typography>
             )
           
            }
            </Stack>
            </Stack>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <infoOutlined />
            <TextField
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
            </TextField>
          </Stack>
        </Stack>
      </Form>
    </ModalComponent>
  );
};

export default EditCourse;
