
import { Box, CircularProgress } from '@mui/material'
import React from 'react'

import { useAppContext } from '../../context/app/app-context';

const LoadComponent = () => {

  const {themeColor } =useAppContext();
  const color = themeColor.palette.primary.dark
  return (
    <Box sx={{display:'flex', padding:4, justifyContent: 'center', alignItems: 'center'}}><CircularProgress sx={{color:color}} /></Box>
  )
}

export default LoadComponent