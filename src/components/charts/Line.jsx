
import { LineChart } from '@mui/x-charts'
import React from 'react'

const Line = () => {
  return (
   
    <LineChart
  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
  series={[
    {
      data: [2, 5.5, 2, 8.5, 1.5, 5],
    },
  ]}
  width={500}
  height={300}
/>
  )
}

export default Line