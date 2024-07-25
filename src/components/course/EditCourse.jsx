
import React from 'react'
import { CloudUpload, Person, PersonOutline, AccessTimeOutlined, InfoOutlined, SchoolOutlined, Close } from '@mui/icons-material';
import { Box, styled, TextField, Typography, Stack, MenuItem, Modal, Button, Slider, Backdrop, Fade, IconButton, InputAdornment } from '@mui/material';
import { useModalContext } from '../../context/modal/ModalContext';
import ModalComponent from '../modal/ModalComponent';
import Form from '../form/Form';
import { useForm } from 'react-hook-form';

// import CourseAction from './CourseAction';

const EditCourse = ({courseData}) => {

  const {register, handleSubmit} = useForm()
  const { setOpen} = useModalContext()


  const {title, time, status, pic} = courseData
  const course= [ 

    {
      label:  "CourseName",
      icon: <SchoolOutlined/> ,
      value: title,
      name: "title"
    },
    {
      label:  "Time",
      icon: <AccessTimeOutlined/>,
      value: time,
      name: "time",
      type:"number",

    },
    
  ];

  const selectField =["not Started", "completed", "in Progress" ];



  const editCourseHandler = (data) =>{
    console.log("EDIT", data)
    setOpen(false)
  }
  
  return (

    <ModalComponent title="Edit Course" >
    <Form align="center" Title="Add Course" titleButton="Save" onSubmit={handleSubmit(editCourseHandler)}>
      <>
     
         <Box  component="label"
               // role={undefined}
                sx={{position:"relative", cursor:"pointer", border:"3px dashed #ccc", marginBottom: 3,borderRadius:1, display:"flex", gap:2, justifyContent:"center", alignItems:"center"}} padding={ 0}>
              {
             <img src={pic} width="100%" /> 

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
         <TextField {...register("select")} id="outlined-basic"  label="status" select  color="secondary"  size="small"  defaultValue={ status}  variant="outlined">
        
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
          
      </>
    </Form>
  
    </ModalComponent>
  )
}

export default EditCourse