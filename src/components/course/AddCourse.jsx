import {
  AccessTimeOutlined,
  CloudUpload,
  PersonOutline,
  SchoolOutlined,
} from "@mui/icons-material";
import {
  Box,
  InputAdornment,
  MenuItem,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import JsPic from "../../assets/img/images.png";
import { useModalContext } from "../../context/modal/ModalContext";
import Form from "../form/Form";
import ModalComponent from "../modal/ModalComponent";
import { useThemeContext } from "../../context/theme/ThemeContext";
// import CourseAction from './CourseAction';

const AddCourse = ({ courses, setCourses }) => {
  const { register, handleSubmit } = useForm();

  const course = [
    {
      label: "CourseName",
      icon: <SchoolOutlined />,
      name: "title",
    },
    {
      label: "Teacher",
      icon: <PersonOutline />,
      name: "teacher",
    },
    {
      label: "Time",
      icon: <AccessTimeOutlined />,
      name: "time",
      type: "number",
    },
  ];

  const selectField = ["not Started", "completed", "in Progress"];

  const { setOpen } = useModalContext();
  const {theme }=useThemeContext()

  const borderColor = theme.palette.mode.borderColor;
  const typography = theme.palette.mode.typography;


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

  const addCourseHandler = (data) => {
    const { title, teacher, time, select } = data;
    const newCourse = {
      id: courses.length + 1,
      title,
      pic: JsPic,
      teacher,
      student: 0,
      status: select,
      time,
      lastUpdate: Date(),
      rating: 0,
    };

   

    setCourses((preState) => [...preState, newCourse]);
    setOpen(false);
  };

  return (
    <ModalComponent title="Add Course">
      <Form
        align="center"
        Title="Add Course"
        titleButton="Save"
        onSubmit={handleSubmit(addCourseHandler)}
      >
        <>
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
              color: typography,
              alignItems: "center",
             
            }}
            padding={6}
          >
            <>
              <CloudUpload />

              <Typography variant="h6" component="span">
                Upload Image
              </Typography>
              <VisuallyHiddenInput type="file" />
            </>
          </Box>
          {course.map((item) => (
            <Stack

              key={item.label}
              direction="row"
              spacing={2}
              alignItems="center"

              sx={{
                color:typography,
                "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root , .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root " :{
                  color:"inherit"
                }
              }}
            >
              {item.icon}
              <TextField
                {...register(item.name)}
                id="outlined-basic"
                label={item.label}
                type={item.type ? item.type : "text"}
                // color="secondary"
                sx={{}}
                // color={typography}
                variant="outlined"
                size="small"
                InputProps={{
                  endAdornment:
                    item.type === "number" ? (
                      <InputAdornment position="end">hour</InputAdornment>
                    ) : null,
                }}
              />
            </Stack>
          ))}
          <Stack direction="row" spacing={2} alignItems="center">
            <infoOutlined />
            <TextField
              {...register("select")}
              id="outlined-basic"
              label="status"
              select
              color="secondary"
              size="small"
              defaultValue= {selectField[2]}
              variant="outlined"
            >
              {selectField.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
          {/* <Button variant="contained" color="success" sx={{ marginTop: 2}}>
          Save
        </Button> */}
          {/* <Stack width="60%" direction="row"  spacing={2} alignItems="center">
        <PersonOutline/>
       <Slider
          value={typeof value === 'number' ? value : 0}
                min={0}
                step={10}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
          <Typography>
          {value}
          </Typography>
       </Stack> */}
        </>
      </Form>
    </ModalComponent>
  );
};

export default AddCourse;
