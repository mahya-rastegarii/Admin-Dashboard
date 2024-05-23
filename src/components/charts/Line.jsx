
import React from 'react';

import { styled } from '@mui/material';
import { LineChart, markElementClasses, lineElementClasses } from '@mui/x-charts';

const Line = ({numberOfUser, monthChart, labelChart, colorChart, widthChart, heightChart}) => {

  const CustomChart = styled(LineChart)( () => ({
    [`& .${lineElementClasses.root}`]: {
      stroke: '#8884d8',
      strokeWidth: 2,
    },
    [`& .${markElementClasses.root}`]: {
        stroke: '#8884d8',
      scale: '0.6',
      fill: '#fff',
      strokeWidth: 0,
    },
  }));
  return (
   
    <CustomChart
   
    xAxis={[{ data: monthChart, scaleType:"point" }]}
    series={[
      {
        data: numberOfUser,
        label:labelChart,
        color:colorChart
      },
    ]}


    width={widthChart}
    height={heightChart}
/>
  )
}

export default Line;