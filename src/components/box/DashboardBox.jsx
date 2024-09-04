import React from 'react'
import { Box, Paper, Stack, Typography } from '@mui/material'
import { useAppContext } from '../../context/app/app-context';
const DashboardBox = ({item, children}) => {

 const {mode } =useAppContext();

 const boxBgColor = mode.palette.boxBg
 const typography = mode.palette.typography
 
  return (
   
            <Stack
            component={Paper}
           direction="row"
           alignItems="center"
           justifyContent="space-between"
            square={false}
            elevation={3}
            width={{xs:"80%", md:"30%"}}
            
            sx={{ padding:2,  borderRadius:2, backgroundColor: boxBgColor}}
            key={item.id}
            >
            
          <Box>

         
          <Stack direction="row" spacing={0} justifyContent="center" alignItems="center" sx={{ color: typography}}>
            {
               item.before &&  <Typography  variant="h6"   component="span"  gutterBottom>
               {item.before}
                </Typography> 
            }
         <Typography  variant="h4"   component="div"   gutterBottom>
         
      {children}
   
       </Typography>
       {
        item.after &&
         <Typography  variant="body1"   component="span"  gutterBottom>
      {item.after}
       </Typography>  
       
       }
    </Stack>
       <Typography  variant="body1"  component="div" gutterBottom sx={{color: typography}}>
            {item.title}
      
          
           
          </Typography>
          </Box>
          <Typography  variant="h5"  component="div" gutterBottom>
         
        
         {item.icon}
        
       </Typography>
            </Stack>
   
  )
}

export default DashboardBox