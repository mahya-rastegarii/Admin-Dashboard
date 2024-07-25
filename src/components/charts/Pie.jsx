
import { Box } from '@mui/material'
import { PieChart } from '@mui/x-charts'
import React from 'react'
import { useThemeContext } from '../../context/theme/ThemeContext';
import "./chartStyle.css";

const Pie = () => {

const {theme} = useThemeContext()

const typography = theme.palette.mode.typography;


  const data = [
    { id: 0, value: 10, label: 'series A' },
    { id: 1, value: 15, label: 'series B' },
    { id: 2, value: 20, label: 'series C' },
  ]
  

  return (

  //   <PieChart
  //   series={[
  //     {
  //       data: [
  //         { id: 0, value: 10, label: 'series A' },
  //         { id: 1, value: 15, label: 'series B' },
  //         { id: 2, value: 20, label: 'series C' },
  //       ],
  //     },
  //   ]}
  //   width={400}
  //   height={200}
  // />



  <PieChart
  // sx={{
  //   "& .css-1u0lry5-MuiChartsLegend-root ": {
  //     fill: "red"
  //   }
  // }}
  sx={{ color:typography, fill:typography}}
  // fill="red"
 text="red"
  series={[
    {
      data,
   
      highlightScope: { faded: 'global', highlighted: 'item' },
      faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
    },
  ]}
  height={300}
/>

  )
}

export default Pie;