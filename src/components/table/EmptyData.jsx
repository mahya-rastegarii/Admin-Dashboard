
import { Box, Typography } from '@mui/material';
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useAppContext } from '../../context/app/app-context';

const EmptyData = () => {
    const {t} = useTranslation();
    const { mode  } =useAppContext();

    const typography = mode.palette.typography;
  return (
   
    <Box
    sx={{
     // padding:3,
     height:{xs:"20vh", md:"50vh"},
          width:"100%",
            display:"flex",
            alignItems:"center ",
            justifyContent:"center",
          }}
         >
   <Typography
     variant="h6"
     sx={{  color: typography }}
   >
    {
        t('empty')
    }
   </Typography>
   </Box>
  )
}

export default EmptyData