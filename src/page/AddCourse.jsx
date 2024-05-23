import React, { useState } from 'react'
import { CloudUpload, Person, PersonOutline, AccessTimeOutlined, InfoOutlined, SchoolOutlined } from '@mui/icons-material'
import { Box, styled, TextField, Typography, Stack, MenuItem, Modal, Button, Slider } from '@mui/material'
import { useModalContext } from '../context/modal/ModalContext';

const AddCourse = () => {

  const course= [ 

    {
      label:  "CourseName",
      icon: <SchoolOutlined/>
    },
    {
      label:  "Teacher",
      icon: <PersonOutline/>
    },
    {
      label:  "Time",
      icon: <AccessTimeOutlined/>,
      type:"number",
    },
 
  ];
  
  const selectField =[
     "Completed",
     "In Progress",
  ];

  const {open, setOpen} = useModalContext()
  const [value, setValue]= useState(10);
  

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
  return (
    <>
    <Modal
    open={open}
    onClose={() => setOpen(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
   <Box display="flex" width={400} sx={{ backgroundColor:"background.paper", border:"1px solid #fafafa", position:"absolute", top:50, left:50,padding:4,borderRadius:1, boxShadow:24}} flexDirection="column" gap={2} justifyContent="center" alignItems="center">

    <Box  component="label"
      // role={undefined}
       sx={{position:"relative", border:"3px dashed #ccc", padding:5,borderRadius:1, display:"flex", gap:2, justifyContent:"center", alignItems:"center"}}>
         <CloudUpload />

         <Typography variant="h6" component="span">
             Upload Image
         </Typography>
         <VisuallyHiddenInput type="file"/>
    </Box>
    {
      course.map( (data) => (

    <Stack key={data.label}  direction="row"  spacing={2} alignItems="center">
        {data.icon}
       <TextField id="outlined-basic" label={data.label}   type={data.type ? data.type : 'text'} color="secondary" variant="outlined" size="small" />
       </Stack>
      ))
    }
       <Stack  direction="row"  spacing={2} alignItems="center">
       <infoOutlined/>
       <TextField id="outlined-basic" label="status" select  color="secondary"  size="small"  defaultValue= "In Progress" variant="outlined">
        {
          selectField.map( (option)=> (
            <MenuItem key={option} value={option}>
              {
                option
              }
            </MenuItem>
          ))
        }
       </TextField>
       </Stack>
        <Button variant="contained" color="success">
          Save
        </Button>
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
   </Box>
   </Modal>
   </>
  )
}

export default AddCourse