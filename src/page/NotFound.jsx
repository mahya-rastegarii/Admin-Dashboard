
import React from 'react';
import { Box, Button, Typography  } from "@mui/material";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/app/app-context';


const NotFound = () => {

    const {themeColor, mode} = useAppContext()

    const {t} = useTranslation();


    const typography= mode.palette.typography;
  const color = themeColor.palette.primary.main;

  return (
    <Box sx={{display:'flex', flexDirection:'column', gap:1, justifyContent:'center', alignItems:'center', pt:18}}>
       
       <Typography variant="h2"  sx={{ color: color,}}> 404 </Typography>
       <Typography variant="h5" sx={{color: typography}} > {t('notFound.text')} </Typography>
       <Link to="/">
       <Button
       size="small"
            variant="outlined"
            sx={{ borderRadius: 3, color: color , borderColor:color, mt:4 }}
          >
            {t("notFound.btn")}
          </Button>
       </Link>
    </Box>
  )
}

export default NotFound