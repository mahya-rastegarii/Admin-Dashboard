
import React, { useEffect, useState } from 'react'
import ModalComponent from '../modal/ModalComponent'
import { Box, Button, Input, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
// import { PaletteMenu } from '../navbar/PaletteMenu';
import PaletteBox from '../box/PaletteBox';

import {amber, blue, cyan, deepPurple, green, lime, pink, purple, red, teal, yellow} from "@mui/material/colors"
import { useModalContext } from '../../context/modal/ModalContext';
import { useForm } from 'react-hook-form';


const AddEvent = ({setEvent, date}) => {

  // const {register} = useForm()


    // const themeColors = [teal[500], amber[500], lime[500], pink[500], cyan[500], purple[500]]
    const themeColors = [
      {
        id:1,
        color:"#009688",

      },
      {
        id:2,
         color:"#ffc107",

      },
        {
          id:3,
          color:"#cddc39",

        },
        {
          id:4,
           color:"#e91e63",

        },
          {
            id: 5,
            color:"#00bcd4",

          },
          {
            id: 6,
            color:"#9c27b0"
          }

          ]

  
   
    
     const [ eventColor, setEventColor ]= useState('#009688');

   
    // const {setOpen }= useModalContext()

  return (

  <>
      <Stack direction="row" alignItems="center" spacing={3}>
        <Typography  variant="body1">
            Text
        </Typography>
        <OutlinedInput
            id="event-title"
            size="small"
            
            // aria-describedby="outlined-weight-helper-text"
          />
      </Stack>
      {/* <Stack direction="row" alignItems="center" spacing={2}>
        <Typography  variant="body1">
            Description
        </Typography>
        <OutlinedInput
            id="event-title"
            multiline
            // aria-describedby="outlined-weight-helper-text"
            rows= {3}
          />
      </Stack> */}

      <Stack direction="column" sx={{ marginTop: 4}} alignItems="flex-start" spacing={2}>
        <Stack direction="row" spacing={1} alignItems="center">
        <Typography  variant="body1">
           start Date
        </Typography>

      
        {
          date ?  <Typography  variant="body2" sx={{ paddingX:2, paddingY:1, border:"1px solid #ccc", borderRadius:1 }}> {date} </Typography> :

        <OutlinedInput
            id="event-startDate"
            size="small"
            type="date"
            // {...register("start")}
            // aria-describedby="outlined-weight-helper-text"
            />

          }
      </Stack>

      <Stack direction="row" spacing={1} alignItems="center">
        <Typography  variant="body1">
            end Date
        </Typography>

      
        <OutlinedInput
            id="event-endDate"
            size="small"
            type="date"
            // {...register("end")}

            // aria-describedby="outlined-weight-helper-text"
            />

          </Stack>
            </Stack>
<Box display="flex" mt={3}>

    <PaletteBox themeColors={themeColors} selectedColor={eventColor} setSelectedColor= {setEventColor}/>
</Box>
 {/* <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={2} mt={5}>
    <Button variant="contained" color="success" onClick={ addEventToCalendar}> Add </Button> 
    <Button variant="contained" color="error" onClick={() => setOpen(false)}> Cancel</Button> 
 </Stack> */}
 
 </>
  )
}

export default AddEvent