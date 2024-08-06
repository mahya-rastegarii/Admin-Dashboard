
import React from 'react';

import { styled } from '@mui/material';
import { LineChart, markElementClasses, lineElementClasses } from '@mui/x-charts';
import { useThemeContext } from '../../../context/theme/ThemeContext';

import "../chartStyle.css";


const Line = ({numberOfUser, monthChart, labelChart, colorChart, widthChart, heightChart, area, showMark}) => {

  const {theme} = useThemeContext()

const typography = theme.palette.mode.typography;

 
  return (
   
    <LineChart
    sx={{ fill:typography,
      "& .MuiChartsAxis-line": {
        stroke:typography
      }
    }}
   
    xAxis={[{ data: monthChart, scaleType:"point" }]}
    series={[
      {
        data: numberOfUser,
        // label:labelChart,
        color:colorChart,
        showMark: showMark,
        area: area
      },
    ]}


    width={widthChart}
    height={heightChart}
/>
  )
}

export default Line;