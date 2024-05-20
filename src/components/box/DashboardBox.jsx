import React from 'react'
import { Box, Paper, Typography } from '@mui/material'

const DashboardBox = ({item, children}) => {
  return (
   
            <Box
            component={Paper}
            align="center"
            square={false}
            elevation={3}
            //  gridColumn=" span 4"
            sx={{ padding:3,  borderRadius:2}}
            key={item.id}
            >
             {/* <Box  sx={{ width:"40%", display:" flex", justifyContent:"space-around"}}> */}
             <Typography  variant="h5"  component="div" gutterBottom>
         
        
         {item.icon}
        
       </Typography>
           
          
                {/* </Box>    */}
          
         <Typography  variant="h4"  mt={2} component="div"  gutterBottom>
         
      {children}
        
       </Typography>
    
       <Typography  variant="body1" mt={2}  component="div" gutterBottom>
            {item.title}
        
          
           
          </Typography>
         
            </Box>
   
  )
}

export default DashboardBox