
import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import ModalComponent from '../modal/ModalComponent'
import { useModalContext } from '../../context/modal/ModalContext'

const Form = ({children, align, titleButton, onSubmit}) => {

    const {setOpen}= useModalContext()


    // const onSubmit = (data) =>{
    //     console.log(data)
    // }

  return (
  
    <form onSubmit={onSubmit}>
      
         <Box px={5} pt={5} pb={2} display="flex" flexDirection="column" gap={2} justifyContent="center" alignItems={align}>
         {
            children
         }
          </Box>
              <Stack direction="row" alignItems="center" justifyContent="center" spacing={2} mt={5} mb={3}>
    <Button variant="contained" color="success" type="submit" > {titleButton} </Button> 
    <Button variant="contained" color="error" onClick={() => setOpen(false)}> Cancel</Button> 
     </Stack>
    </form>
   
  )
}

export default Form