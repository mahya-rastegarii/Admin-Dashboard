
import React from 'react'

import {BarChart} from '@mui/x-charts/BarChart'

import "../chartStyle.css";
import { useThemeContext } from '../../../context/theme/ThemeContext';


const Bars = ({chartData, xLable ,widthChart, heightChart, marginChart}) => {

const {theme} = useThemeContext()

const typography = theme.palette.mode.typography;
const ChartColor=  theme.palette.primary.main;
  return (
    <BarChart
    sx={{ fill:typography,
       direction:"ltr",
      "& .MuiChartsAxis-line": {
        stroke:typography
      }
    }}
      series={ chartData}
      width={widthChart}
      height={heightChart}
      xAxis={[{ 
        // colorMap:{
        //   color: ChartColor
        // },
        data: xLable,
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