import React from 'react'
import ChartContainer from './ChartContainer';
import { Favorite, Person2 } from '@mui/icons-material';
import Bars from '../charts/Bar/Bars';
import { Box } from '@mui/material';

const PopularCourses = ({chartWidth, boxWidth}) => {
    
    const coursesData = [
        { data: [35, 46, 22, 32, 54, 66, 87, 49], label: "frontEnd" },
        { data: [33, 52, 15, 34, 56, 88, 76, 51], label: "backEnd" },
        { data: [25, 67, 39, 45, 37, 78, 98, 43], label: "AI" },
        { data: [15, 88, 44, 25, 67, 14, 33, 42], label: "security" },
      ];
    
    //   const years = ["2021", "2022", "2023", "2024"];
    const years = [ "Jun", "Feb", "Mar", "Apr", "May", "Jua", "Jul", "Aug"];

    
      const barsChartData = {
        coursesData,
        years,
        widthChart: chartWidth,
        heightChart: 400,
        marginChart: { top: 50, bottom: 20, left: 10, right: 10 },
        //  layout:true
      };
  
    return (

      <Box width={boxWidth}>
      <ChartContainer icon={<Favorite />} title="popular Courses" >
      <Bars {...barsChartData}/>
       </ChartContainer>
       </Box>
    )
}

export default PopularCourses;