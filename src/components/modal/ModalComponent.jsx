import React from 'react'
import { useModalContext } from '../../context/modal/ModalContext'
import { Backdrop, Box, Button, Fade, IconButton, Modal, Stack, Typography } from '@mui/material'
import { Close } from '@mui/icons-material'


const ModalComponent = ({children, align, Title, titleButton, clicked}) => {

  const {open, setOpen} = useModalContext()

    return (
        <div>
        <Modal
        open={open}
        onClose={() => setOpen(false)}
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
       <Box  width={400} sx={{ backgroundColor:"background.paper", border:"1px solid #fafafa", position:"absolute", top:"50%", left:"50%", padding:1,  borderRadius:1, boxShadow:24,  transform: 'translate(-50%, -50%)'}} >
       <Stack direction="row" display="flex"  justifyContent="space-between" alignItems="center"  >
    

      <Typography variant="h6" sx={{ fontWeight:"bold", ml:1}}> 
        {Title}
      </Typography>

      <IconButton aria-label="Close"
        onClick= {() => setOpen(false)}>

        <Close/>
      </IconButton>
    </Stack>
    <Box px={5} pt={5} pb={2} display="flex" flexDirection="column" gap={2} justifyContent="center" alignItems={align}>
         {
            children
         }
          </Box>
              <Stack direction="row" alignItems="center" justifyContent="center" spacing={2} mt={5} mb={3}>
    <Button variant="contained" color="success"onClick={clicked} > {titleButton} </Button> 
    <Button variant="contained" color="error" onClick={() => setOpen(false)}> Cancel</Button> 
     </Stack>
       </Box>
       </Fade>
       </Modal>
       </div>
      )
}

export default ModalComponent