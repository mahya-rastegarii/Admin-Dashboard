
import React from 'react'
import ModalComponent from '../modal/ModalComponent'
import { useModalContext } from '../../context/modal/ModalContext'
import { Button, Stack, Typography } from '@mui/material'


const RemoveComponent = ({title, body, clicked, }) => {
    
    const {setOpen}= useModalContext()

  
  
  return (
   
    <ModalComponent title={title}>
        
        <Typography variant="body1"> {body}</Typography>
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={2} mt={5} mb={3}>
    <Button variant="contained" color="success"
    onClick={clicked}
    > Remove </Button> 
    <Button variant="contained" color="error" onClick={() => setOpen(false)}> Cancel</Button> 
     </Stack>
        </ModalComponent>
  
  )
}

export default RemoveComponent