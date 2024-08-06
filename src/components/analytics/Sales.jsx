
import React, {useEffect} from 'react'
import ChartContainer from './ChartContainer'
import { AttachMoney, Person } from '@mui/icons-material'
import Line from '../charts/Line/Line'
import { Box } from '@mui/material'
// import { useChartContext } from '../../context/chart/ChartContext'

const Sales = ({chartWidth, boxWidth}) => {


//  const {chartValue}= useChartContext()
    
  const numberOfUser = [30, 55, 60, 42, 85, 50];
  const monthChart = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور"];
    
  const LineChartData = {
    monthChart,
    numberOfUser,
    // labelChart: "Sales ",
    colorChart: "#8884d8",
    widthChart: chartWidth,
    heightChart: 400,
    area: true,
    showMark: true
  };

  // useEffect(()=>{
  //   console.log('chartValue', chartValue)
  // },[])
  return (
    <Box width={boxWidth}>
    <ChartContainer icon={<AttachMoney/>} title="sales">
    <Line {...LineChartData}  />
     </ChartContainer>
     </Box>
  )
}

export default Sales