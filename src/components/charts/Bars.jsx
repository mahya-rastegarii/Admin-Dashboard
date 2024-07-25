
import React from 'react'

import {BarChart} from '@mui/x-charts/BarChart'

import "./chartStyle.css";
import { useThemeContext } from '../../context/theme/ThemeContext';


const Bars = ({coursesData, years,widthChart, heightChart, marginChart}) => {

const {theme} = useThemeContext()

const typography = theme.palette.mode.typography;
  return (
    <BarChart
    sx={{ fill:typography,
      "& .MuiChartsAxis-line": {
        stroke:typography
      }
    }}
      series={coursesData}
      width={widthChart}
      height={heightChart}
      xAxis={[{ data: years, scaleType: 'band' }]}
      margin={marginChart}
    />
  )
}

export default Bars;