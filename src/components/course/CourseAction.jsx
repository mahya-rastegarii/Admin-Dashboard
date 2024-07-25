
import React, { useState } from 'react'
import { CloudUpload, Person, PersonOutline, AccessTimeOutlined, InfoOutlined, SchoolOutlined, Close } from '@mui/icons-material'
import { Box, styled, TextField, Typography, Stack, MenuItem, Modal, Button, Slider, Backdrop, Fade, IconButton, InputAdornment } from '@mui/material'
import { useModalContext } from '../../context/modal/ModalContext';
import ModalComponent from '../modal/ModalComponent';
import Form from '../form/Form';
import { useForm } from 'react-hook-form';
import { rowCourse } from './CourseData';
import JsPic from "../../assets/img/images.png"

const CourseAction = ({ courseData, title, submitHandler, isValue}) => {



  const {register, handleSubmit} = useForm()


  const course= [ 

    {
      label:  "CourseName",
      icon: <SchoolOutlined/> ,
      name: "title"
    },
    {
      label:  "Teacher",
      icon: <PersonOutline/>,
      name: "teacher"
    },
    {
      label:  "Time",
      icon: <AccessTimeOutlined/>,
      name: "time",
      type:"number",

    },
 
  ];

 
  const selectField =["not Started", "completed", "in Progress" ];

  

  // const handleSliderChange = (event, newValue) => {
  //   setValue(newValue);
  // };
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: "97%",
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: "97%",
  margin:3
  
});

// const editCourseHandler =(id, data) =>{

  

// }





const submitForm= (data) => {

    submitHandler(data)
}


  return (
 <ModalComponent title={title}>
  <Form align="center" Title="Add Course" titleButton="Save" onSubmit={handleSubmit(submitForm)}>
    <>
   
       <Box  component="label"
             // role={undefined}
              sx={{position:"relative", cursor:"pointer", border:"3px dashed #ccc", marginBottom: 3,borderRadius:1, display:"flex", gap:2, justifyContent:"center", alignItems:"center"}} padding={isValue ? 0 : 6}>
            {
           isValue ? <img src={courseData.pic} width="100%" />  :
            <>
             <CloudUpload />

             <Typography variant="h6" component="span">
                 Upload Image
             </Typography>
             <VisuallyHiddenInput type="file"/>   
             </>
       }  
    </Box>
    {
      course.map( (item) => (

    <Stack key={item.label}  direction="row"  spacing={2} alignItems="center">
        {item.icon}
       <TextField  {...register(item.name)} id="outlined-basic" label={item.label}   type={item.type ? item.type : 'text'} color="secondary" variant="outlined" size="small"   InputProps={{ endAdornment :  item.type === "number" ? <InputAdornment position="end">hour</InputAdornment> : null  }}  defaultValue= {item.value}/>
       </Stack>
      ))
    }
       <Stack  direction="row"  spacing={2} alignItems="center">
       <infoOutlined/>
       <TextField {...register("select")} id="outlined-basic"  label="status" select  color="secondary"  size="small"  defaultValue={ isValue ? courseData.status :"In Progress"}  variant="outlined">
      
       {
          selectField.map( (option)=> (
            <MenuItem key={option} value={option}>
              {
                option
              }
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
  

  )
}

export default CourseAction