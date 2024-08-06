
import React from 'react'

import {BarChart} from '@mui/x-charts/BarChart'

import "../chartStyle.css";
import { useThemeContext } from '../../../context/theme/ThemeContext';


const Bars = ({coursesData, years,widthChart, heightChart, marginChart}) => {

const {theme} = useThemeContext()

const typography = theme.palette.mode.typography;
const ChartColor=  theme.palette.primary.main;
  return (
    <BarChart
    sx={{ fill:typography,
      "& .MuiChartsAxis-line": {
        stroke:typography
      }
    }}
      series={ coursesData}
      width={widthChart}
      height={heightChart}
      xAxis={[{ 
        // colorMap:{
        //   color: ChartColor
        // },
        data: years,
         scaleType: 'band',
          
          }]}
      margin={marginChart}
      grid={{ horizontal: true }}
      // layout ="horizontal"
      // layout={layout ? "horizontal" : "vertical"}
    />
  )
}

export default Bars;