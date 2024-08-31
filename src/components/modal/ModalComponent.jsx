import React from 'react'
import { useModalContext } from '../../context/modal/ModalContext';
import { Backdrop, Box, Button, Fade, IconButton, Modal, Stack, Typography } from '@mui/material'
import { Close } from '@mui/icons-material'
import Form from '../form/Form'
import { useForm } from 'react-hook-form'
import { useAppContext } from '../../context/app/app-context'


const ModalComponent = ({closeForm, children, title}) => {

  const {reset }= useForm()

  const {open, setOpen} = useModalContext()

  const {language, themeColor, mode }= useAppContext();


  const bgColor = mode.palette.boxBg;
  const borderColor = mode.palette.borderColor;
  const typography = mode.palette.typography;

 

    return (
        <div>
        <Modal
        sx={{direction:language === 'fa'? 'rtl': 'ltr'}}
        open={open}
        onClose={closeForm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
           <Fade in={open}>
       <Box  width={{xs:300, sm:350,  md:400}} sx={{ backgroundColor:bgColor,color:typography, border:`1px solid ${borderColor}`, position:"absolute", top:"50%", left:"50%", padding:1,  borderRadius:1, boxShadow:24,  transform: 'translate(-50%, -50%)',
        "& .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper" :{
            backgroundColor:bgColor,
            }
       }} >
       <Stack direction="row"   justifyContent=" space-between" alignItems="center"  >
    
       <Typography variant={{xs:"body1", md:"h6"}} sx={{ fontWeight:"bold", ml:1}}> 
        {title}
      </Typography>
      <IconButton
        sx={{color:typography}}
       aria-label="Close"
        onClick= {closeForm}
        
        >
        
        <Close/>
      </IconButton>
    </Stack>
     
   {
     children
   }
       </Box>
       </Fade>
       </Modal>
       </div>
      )
}

export default ModalComponent