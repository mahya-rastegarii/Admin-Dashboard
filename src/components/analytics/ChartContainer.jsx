import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { useThemeContext } from '../../context/theme/ThemeContext';

const ChartContainer = ({icon, title, width, children}) => {

    const { theme } = useThemeContext();

    const bgColor = theme.palette.mode.boxBg;
    const typography = theme.palette.mode.typography;



  return (
    <Box
          color={typography}
          component={Paper}
          elevation={2}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          // mx="auto"
          p={2}

        
          // width={width}
          bgcolor={bgColor}
          mt={6}
          gap={2}
        >
          <Stack
            direction="row"
            width="100%"
            spacing={1}
            justifyContent="flex-start"
            alignItems="center"
          >
            {icon}
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {title}
            </Typography>
          </Stack>
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"

          >
            {children}
          </Box>
        </Box>
     
  )
}

export default ChartContainer