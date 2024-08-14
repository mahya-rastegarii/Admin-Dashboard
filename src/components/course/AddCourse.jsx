import {
  AccessTimeOutlined,
  CloudUpload,
  InfoOutlined,
  PersonOutline,
  SchoolOutlined,
} from "@mui/icons-material";
import {
  Box,
  InputAdornment,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../context/app/app-context";
import { useModalContext } from "../../context/modal/ModalContext";
import { useThemeContext } from "../../context/theme/ThemeContext";
import { supabase } from "../../core/createClient";
import Form from "../form/Form";
import MenuContainer from "../menu/MenuContainer";
import ModalComponent from "../modal/ModalComponent";
// import CourseAction from './CourseAction';
// import "../../App.css"

const AddCourse = ({ insertCourse }) => {
  const { setOpen } = useModalContext();
  const { theme } = useThemeContext();
  const { language } = useAppContext();

  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // const course = [
  //   {
  //     label: t("courses.modalCourse.courseNameLabel"),
  //     icon: <SchoolOutlined />,
  //     name: "title",
  //     error: "فیلد نام دوره نمیتواند خالی باشد",
  //   },
  //   {
  //     label: t("courses.modalCourse.teacherLabel"),
  //     icon: <PersonOutline />,
  //     name: "teacher",
  //     error: "فیلد نام مدرس دوره نمیتواند خالی باشد",
  //   },
  //   {
  //     label: t("courses.modalCourse.timeLabel"),
  //     icon: <AccessTimeOutlined />,
  //     name: "time",
  //     error: "فیلد زمان دوره نمیتواند خالی باشد",
  //     type: "number",
  //   },
  // ];

  const selectField = [
    t("filter.status.presell"),
    t("filter.status.completed"),
    t("filter.status.inProgress"),
  ];

  const [uploadImage, setUploadImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const type = language== 'fa'? "تکمیل شده" : "Completed";
  const [item, setItem] = useState(type);
  const [loading, setLoading] = useState(false);

  const boxBg = theme.palette.mode.boxBg;
  const borderColor = theme.palette.mode.borderColor;
  const typography = theme.palette.mode.typography;
  const focusColor = theme.palette.primary.light;

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

  const ChangeImages = (e) => {
    const image = e.target.files[0];
    setImageFile(image);

    setUploadImage(URL.createObjectURL(image));

    // console.log("image", image);
  };

  const uploadFile = async () => {
    const { data } = await supabase.storage
      .from("Images")
      .upload("Course_pic/" + imageFile.name, imageFile);
    console.log("data", data);
  };

  const addCourseHandler = (data) => {
    const { title, teacher, time } = data;

    const date = new Date();
    const today = date.toISOString().split("T")[0];

    // console.log('uploadImage', uploadImage);
    uploadFile();
    const newCourse = {
      title: title,
      titleFa: title,
      picture: `https://qjfoypokbphqxocozpfj.supabase.co/storage/v1/object/public/Images/Course_pic/${imageFile.name}`,
      teacher: teacher,
      teacherFa: teacher,
      statusEn: item,
      statusFa: item,
      lastUpdate: today,
      // imageName:imageFile.name,
      // picFile: imageFile,
      time,
    };

    insertCourse(newCourse);

    // setCourses((preState) => [...preState, newCourse]);

    reset();
    setUploadImage(null);
    setOpen(false);
  };

  const cancelSubmit = () => {
    setOpen(false);
    setUploadImage(null);
    reset();
  };

  return (
    <ModalComponent
      title={t("courses.addCourse.title")}
      closeForm={cancelSubmit}
    >
      <Form
        align="center"
        Title={t("corses.addCourse.title")}
        titleButton={t("courses.modalCourse.saveBtn")}
        onSubmit={handleSubmit(addCourseHandler)}
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
            padding={uploadImage ? 0 : 6}
          >
            <img src={uploadImage} />

            <Box
            
              sx={{
                display: uploadImage ? "none" : "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              <CloudUpload />

              <Typography variant="h6" component="span">
                {t("courses.addCourse.uploadImageText")}
              </Typography>
              <VisuallyHiddenInput type="file" onChange={ChangeImages} />
            </Box>
          </Box>
          {/* {course.map((item) => (
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
          ))} */}

          <Stack
          dir='rtl'
            direction="row"
            gap={2}
            alignItems="center"
            // sx={{direction:language === 'fa' ? "rtl": "ltr"}}
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
            <SchoolOutlined />

          
          <Box  dir='rtl' >
              <TextField
            
            sx={{
              "& label" :{
                // direction:"rtl"
                right:language ==='fa' && '20px',
                transformOrigin: language=== 'fa' ? "top right": "top left",
                paddingRight:language ==='fa'&& "12px"
              }
            }}
                // sx={{textAlign:language ==='fa' ? "rtl":"ltr"}}
                {...register("title", {
                  required: t("courses.modalCourse.errors.courseNameError"),
                })}
                id="outlined-basic"
                label={t("courses.modalCourse.courseNameLabel")}
                type="text"
                // color={typography}

                variant="outlined"
                size="small"
              />

              {errors.title && errors.title.type === "required" && (
                <Typography sx={{ color: "red !important" }}>
                  {errors.title?.message}
                </Typography>
              )}
            </Box>
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
                // color={typography}

                variant="outlined"
                size="small"
                // InputProps={{
                //   endAdornment:
                //     item.type === "number" ? (
                //       <InputAdornment position="end" >hour</InputAdornment>
                //     ) : null,
                // }}
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
                variant="outlined"
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {" "}
                      {t("courses.modalCourse.hour")}{" "}
                    </InputAdornment>
                  ),
                }}
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
           
               
                 {/* {selectField.map((option) => (
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

              
            </TextField> */}
            <Box sx={{ border: ` 1px solid ${borderColor}`, borderRadius: 1 }}>
              <MenuContainer
                menuItem={selectField}
                selectedItem={item}
                setSelectedItem={setItem}
              />
            </Box>
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
