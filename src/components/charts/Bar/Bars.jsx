
import React from 'react'

import {BarChart} from '@mui/x-charts/BarChart'

import "../chartStyle.css";
import { useAppContext } from '../../../context/app/app-context';


const Bars = ({chartData, xLable ,widthChart, heightChart, marginChart}) => {

const {themeColor, mode} = useAppContext()

const typography = mode.palette.typography;
const ChartColor=  themeColor.palette.primary.main;
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