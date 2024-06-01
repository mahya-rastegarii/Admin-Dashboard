import React from 'react'
import { Box, Paper, Stack, Typography } from '@mui/material'

const DashboardBox = ({item, children}) => {
  return (
   
            <Stack
            component={Paper}
           direction="row"
           alignItems="center"
           justifyContent="space-between"
            square={false}
            elevation={3}
            //  gridColumn=" span 4"
            sx={{ padding:2,  borderRadius:2}}
            key={item.id}
            >
             {/* <Box  sx={{ width:"40%", display:" flex", justifyContent:"space-around"}}> */}
           
           
          
                {/* </Box>    */}
          <Box>

         
          <Stack direction="row" spacing={0} justifyContent="center" alignItems="center">
         <Typography  variant="h4"   component="div"  gutterBottom>
         
      {children}
   
       </Typography>
       {
        item.percent ?
         <Typography  variant="body1"   component="span"  gutterBottom>
      {item.percent}
       </Typography> : 
       null
       }
    </Stack>
       <Typography  variant="body1"   component="div" gutterBottom>
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