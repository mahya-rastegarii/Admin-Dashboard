
import React from 'react'
import ModalComponent from '../modal/ModalComponent'
import { useModalContext } from '../../context/modal/ModalContext'
import { Button, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'


const RemoveComponent = ({title, body, clicked, }) => {
    
  const {t} =useTranslation() ;


    const {setOpen}= useModalContext()

  
  
  return (
   
    <ModalComponent title={title} closeForm={() => setOpen(false) }>
        
        <Typography variant="body1" align="center" mt={2}> {body}</Typography>
        <Stack direction="row" alignItems="center" justifyContent="center" gap={2} mt={5} mb={3}>
    <Button variant="contained" color="success"
    onClick={clicked}
    > {t('removeBtn')} </Button> 
    <Button variant="contained" color="error" onClick={() => setOpen(false)}> {t('cancelBtn')} </Button> 
     </Stack>
        </ModalComponent>
  
  )
}

export default RemoveComponent