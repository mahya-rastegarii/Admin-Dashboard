import React from 'react'
import ChartContainer from './ChartContainer'
import Bars from '../charts/Bar/Bars'
import { Person2 } from '@mui/icons-material';
import Line from '../charts/Line/Line';
import { Box } from '@mui/material';

const UserCount = ({chartWidth, boxWidth}) => {

    const numberOfUser = [20, 45, 35, 15, 60, 80, 73, 30];
    const monthChart = [ "Jun", "Feb", "Mar", "Apr", "May", "Jua", "Jul", "Aug"];
//   const monthChart = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور"];

  const LineChartData = {
    monthChart,
    numberOfUser,
    labelChart: "User ",
    colorChart: "#8884d8",
    widthChart: chartWidth,
    heightChart: 400,
    area:false,
    showMark: false,
  };

    
    


      
  return (
    <Box width={boxWidth}>
    <ChartContainer icon={<Person2/>} title=" User Count" >
          <Line {...LineChartData}/>
    </ChartContainer>
    </Box>
  )
}

export default UserCount