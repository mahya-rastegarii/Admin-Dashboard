import { AccessTimeOutlined, SchoolOutlined, Info, InfoOutlined, PersonOutline } from "@mui/icons-material";
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
import MenuContainer from "../menu/MenuContainer";

// import CourseAction from './CourseAction';

const EditCourse = ({ courseData, editCourse }) => {
  const { theme } = useThemeContext();
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const { setOpen } = useModalContext();

  const borderColor = theme.palette.mode.borderColor;
  const typography = theme.palette.mode.typography;
  const focusColor = theme.palette.primary.light;

  const { title, time, teacher, statusEn, picture } = courseData;

 
  const [item, setItem]= useState(statusEn)

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

  const selectField = ["presell", "completed", "in Progress"];


 

  const editCourseHandler = (data) => {
    let { title, time ,teacher } = data;

    const date = new Date()
    const today = date.toISOString().split('T')[0]

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
           <PersonOutline />
           <Stack direction="column">
             <TextField
               {...register("teacher", {required:"فیلد نام مدرس نمیتواند خالی باشد"})}
               id="outlined-basic"
               label="Teacher"
               type="text"
               // color="secondary"
               variant="outlined"
               size="small"
               
               defaultValue={teacher}
             />

             {
            
            errors.teacher && errors.teacher.type === "required" && (
             <Typography sx={{color:"red !important"}}>
              {
                errors.teacher?.message
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

     <Box
   sx={{ border:` 1px solid ${borderColor}`, borderRadius:1 }}
         >
       <MenuContainer menuItem={selectField} selectedItem={item} setSelectedItem={setItem}/>
       </Box>
          </Stack>
        </Stack>
      </Form>
    </ModalComponent>
  );
};

export default EditCourse;
