
import React from 'react'
import { ArrowForward, ArrowBack } from '@mui/icons-material'
import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useThemeContext } from '../../context/theme/ThemeContext'
import { useTranslation } from 'react-i18next'
import { useAppContext } from '../../context/app/app-context'



const ContainerData = ({width, icon, title, link, children }) => {

  const { theme } = useThemeContext();
  const {language }= useAppContext()
  const {t }= useTranslation()
  const boxBgColor = theme.palette.mode.boxBg;
  const typography = theme.palette.mode.typography;
  const linkColor = theme.palette.primary.dark;
  return (
    
    <Box
  
    component={Paper}
    square={false}
    elevation={3}
    width={width}
    
    sx={{
      // display: "flex",
      // alignItems: "flex-start",
      // flexDirection: "column",
      paddingTop: 2,
      borderRadius: 2,
      backgroundColor: boxBgColor,
     
    
    
    }}
  >
    <Stack
       direction={{ sx:"column", sm:"row"}}
      width="100%"
      alignItems={{sx:"flex-start", sm:"center"}}
      justifyContent="space-between"
    >
      <Stack
        display="flex"
        alignItems="center"
        direction="row"
        spacing={1}
        sx={{ paddingX: 2, marginBottom: 2, color: typography }}
      >
        {icon}
        <Typography
          variant="h6"
          component="span"
          sx={{ fontWeight: "bold", paddingX:1}}
        >
          {title}
        </Typography>
      </Stack>
     <Stack  
     display="flex"
        alignItems="center"
        direction="row"
       
        >
      <Button
        component={Link}
        endIcon={language === 'fa' ?  <ArrowBack  sx={{ marginX:1}}/> : <ArrowForward sx={{ marginX:1}}/>}
  
        sx={{ marginX: 1, color: linkColor, fontWeight: "bold", }}
        to={link}
      >
       {
       t('dashboard.ViewAllBtn')
       }
      </Button>
      </Stack>
    </Stack>

         {children}

      </Box>
  )
}

export default ContainerData