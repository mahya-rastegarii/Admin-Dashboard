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
import { supabase } from "../../core/createClient";
import Form from "../form/Form";
import MenuContainer from "../menu/MenuContainer";
import ModalComponent from "../modal/ModalComponent";


const AddCourse = ({ insertCourse }) => {

  const { setOpen } = useModalContext();
  const { language, mode, themeColor } = useAppContext();


  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

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

  const boxBg = mode.palette.boxBg;
  const borderColor = mode.palette.borderColor;
  const typography = mode.palette.typography;
  const focusColor = themeColor.palette.primary.light;

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

  };

  const uploadFile = async () => {
    const { data } = await supabase.storage
      .from("Images")
      .upload("Course_pic/" + imageFile.name, imageFile);
    
  };

  
  const addCourseHandler = (data) => {
    const { title, teacher, time } = data;
    
    const supabaseStorageURL = "https://qjfoypokbphqxocozpfj.supabase.co/storage/v1/object/public/Images/Course_pic/";
    const date = new Date();
    const today = date.toISOString().split("T")[0];

    // console.log('uploadImage', uploadImage);
    uploadFile();

    const typeFA = item === 'Presell' ? 'پیش فروش' :  item ==='Completed' ? 'تکمیل شده' : item ==="In Progress" ? 'در حال برگزاری' : null
    const typeEn = item === "پیش فروش" ? 'Presell' : item ==="تکمیل شده" ? "Completed" : item ==='در حال برگزاری' ? "In Progress" : null
    const statusFA = language ==='fa'? item : typeFA
    const statusEN = language ==='en'? item : typeEn
    const newCourse = {
      title,
      picture: supabaseStorageURL+imageFile.name,
      teacher,
      statusEn: statusEN,
      statusFa: statusFA,
      lastUpdate: today,
      
      time,
    };

    insertCourse(newCourse);

    // setCourses((preState) => [...preState, newCourse]);
    console.log("imageURL" , newCourse.picture)
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
            padding={uploadImage ? 0 : {xs:5, sm:6}}
          >
            <img src={uploadImage} width={uploadImage ?300 : 0} height={ uploadImage ?150 :0}/>

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
          
         
          <Stack
        
            direction="row"
            gap={2}
            alignItems="center" >
            <SchoolOutlined />

          
          <Box  >
              <TextField
            
            sx={{
              "& label" :{
               
                right:language ==='fa' && '20px',
                transformOrigin: language=== 'fa' ? "top right": "top left",
                paddingRight:language ==='fa'&& "12px"
              }
            }}
              
                {...register("title", {
                  required: t("courses.modalCourse.required.courseNameError"),
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
                   
                    right:language ==='fa' && '20px',
                    transformOrigin: language=== 'fa' ? "top right": "top left",
                    paddingRight:language ==='fa'&& "12px"
                  }
                }}
                {...register("teacher", {
                  required: t("courses.modalCourse.required.teacherError"),
                })}
                id="outlined-basic"
                label={t("courses.modalCourse.teacherLabel")}
                type="text"
               

                variant="outlined"
                size="small"
              
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
                   
                    right:language ==='fa' && '20px',
                    transformOrigin: language=== 'fa' ? "top right": "top left",
                    paddingRight:language ==='fa'&& "12px"
                  }
                }}
                {...register("time", {
                  required: t("courses.modalCourse.required.timeError"),
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

export default AddCourse;
