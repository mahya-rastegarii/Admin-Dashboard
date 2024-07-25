import React from 'react'
import ModalComponent from '../modal/ModalComponent'
import { Button, Stack, Typography } from '@mui/material'
import { useModalContext } from '../../context/modal/ModalContext'

const RemoveEvent = ({ event, remove, setEvent}) => {


    const {setOpen}= useModalContext()

    const removeHandler = (itemId) =>{
  

      const newEventList = event.filter((item) => item.id !== itemId ) 
     
              setEvent(newEventList)

  
        setOpen(false)
            //  setRemove(false)
    
  
   }
  
  

  return (
   
    <ModalComponent title="Remove Event">
        
        <Typography variant="body1"> Remove Event? </Typography>
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={2} mt={5} mb={3}>
    <Button variant="contained" color="success"
    onClick={() => removeHandler(remove)}
    > Remove </Button> 
    <Button variant="contained" color="error" onClick={() => setOpen(false)}> Cancel</Button> 
     </Stack>
        </ModalComponent>
  )
}

export default RemoveEvent