
import React from 'react';

import { LineChart, markElementClasses, lineElementClasses } from '@mui/x-charts';
import { styled } from '@mui/material';

const Line = ({xAxisData, seriesData, labelChart, colorChart, widthChart, heightChart}) => {

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
   
    xAxis={[{ data: {xAxisData}, scaleType:"point" }]}
    series={[
      {
        data: {seriesData},
        label:{labelChart},
        color:{colorChart}
      },
    ]}


    width={widthChart}
    height={heightChart}
/>
  )
}

export default Line