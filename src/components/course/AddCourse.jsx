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
// import "../../App.css"

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


  const boxBg = theme.palette.mode.boxBg;
  const borderColor = theme.palette.mode.borderColor;
  const typography = theme.palette.mode.typography;
  const focusColor =theme.palette.primary.light;

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
        <Stack direction="column" spacing={3}  
        sx={{
            
           "& label" :{
          color:typography,
          opacity:0.6
        },
        
        "& input , div , p , svg" :{
          color:typography,
          
        },
        "& fieldset " :{
          borderColor:borderColor
        },
        
       
        

        }}>
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

              // sx={{
              //   color:typography,
              //   "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root , .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root " :{
              //     color: typography
              //   },
              //   "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline" :{
              //     borderColor: borderColor,
              //   },
              //   "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline" :{
              //     borderColor: focusColor,
                
              //   },
              //   "& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused" :{
              //     color:focusColor
              //   }
               
                

              // }}
            >
              {item.icon}
              <TextField
              sx={{

              //   "& p , label":{
              //     color:typography,
                 
              //   },
              //   "&  label" :{
              //     opacity:0.5
              //   },
                
              //     // "& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root .Mui-focused" :{
              //     //   color:focusColor
              //     // }
                  
                // "& .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper" :{
                //       backgroundColor:`${boxBg} 
                // }
              }}
                {...register(item.name)}
                id="outlined-basic"
                label={item.label}
                type={item.type ? item.type : "text"}
                // color="secondary"
                // color={typography}
                
                variant="outlined"
                size="small"
                InputProps={{
                  endAdornment:
                    item.type === "number" ? (
                      <InputAdornment position="end" >hour</InputAdornment>
                    ) : null,
                }}
              />
            </Stack>
          ))}
          <Stack width="100%" direction="row" spacing={2} alignItems="center" justifyContent="center"
           sx={{

            // "& .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper" :{
            
            // }
          }}
          >
         
            <infoOutlined />
            <TextField
           
            sx={{
              // "& .css-t0v85v-MuiButtonBase-root-MuiMenuItem-root.Mui-selected" :{
                backgroundColor:boxBg
              // }
            //   "& .css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input" :{
            //     color:typography,
            //   },
            //   "& label , svg" :{
            //     color:typography,
            //     opacity:0.5
            //   },
            //   "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline" :{
            //     borderColor: borderColor,
            //   },
            //   "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root:hover" :{
            //     borderColor: typography,
            //   },
            //   "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline" :{
            //     borderColor: focusColor,
              
            //   },
            //   "& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused" :{
            //     color:focusColor
            //   },
          
           
            }}
              {...register("select")}
              id="outlined-basic"
              label="status"
              select
              
              size="small"
              defaultValue= {selectField[2]}
              variant="outlined"
            >
              {selectField.map((option) => (
                <MenuItem key={option} value={option} 
                sx={{

                  backgroundColor:boxBg,
                  color:typography,
                  "&:hover" :{
                    backgroundColor:boxBg,
                  },
                  // "& .css-9m7eo1-MuiButtonBase-root-MuiMenuItem-root.Mui-selected" :{
                  //   backgroundColor:boxBg,
                  // }
                 
                }}
                >
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
        </Stack>
      </Form>
    </ModalComponent>
  );
};

export default AddCourse;
