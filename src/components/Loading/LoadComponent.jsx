
import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const LoadComponent = () => {
  return (
    <Box sx={{display:'flex', padding:4, justifyContent: 'center', alignItems: 'center'}}><CircularProgress color="success" /></Box>
  )
}

export default LoadComponent