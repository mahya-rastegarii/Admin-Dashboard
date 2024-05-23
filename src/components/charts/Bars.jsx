
import React from 'react'

import {BarChart} from '@mui/x-charts/BarChart'

const Bars = ({coursesData, years,widthChart, heightChart, marginChart}) => {
  return (
    <BarChart
      series={coursesData}
      width={widthChart}
      height={heightChart}
      xAxis={[{ data: years, scaleType: 'band' }]}
      margin={marginChart}
    />
  )
}

export default Bars;