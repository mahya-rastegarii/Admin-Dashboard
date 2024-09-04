
import React from 'react';
import { Box, Button, Typography  } from "@mui/material";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/app/app-context';


const UnhandledException = () => {

    const {themeColor, mode} = useAppContext()

    const {t} = useTranslation();

    const typography= mode.palette.typography;
  const color = themeColor.palette.primary.main;

  return (
    <Box sx={{display:'flex', flexDirection:'column', gap:3, justifyContent:'center', alignItems:'center', pt:18}}>
       
       <Typography variant="h3" sx={{ color: color}}> 500 </Typography>
       <Typography variant="h6" sx={{color: typography}} > {t('unhandledException.text')} </Typography>
      
    </Box>
  )
}

export default UnhandledException ;