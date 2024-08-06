import React from 'react';
import ChartContainer from './ChartContainer';

import Pie from '../charts/Pie/Pie';
import Bars from "../charts/Bar/Bars"
import { Person } from '@mui/icons-material';
import { Box } from '@mui/material';



const VisitSite = ({chartWidth, boxWidth}) => {

  const coursesData = [
    { data: [35, 51, 74, 60, 80, 35, 86] },
  ];

  const years = ["str", "sun", "mon", "tues", "wend", "Thurs", "fri"];

  const barsChartData = {
    coursesData,
    years,
    widthChart: chartWidth,
    heightChart: 400,
    marginChart: { top: 50, bottom: 20, left: 10, right: 10 },
    //  layout: false
  };
  return (
    <Box width={boxWidth}>

    <ChartContainer icon={<Person />} title="Visit site">
   <Bars {...barsChartData}/>
    </ChartContainer>
    </Box>
  )
}

export default VisitSite