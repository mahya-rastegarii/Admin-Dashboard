import React, { useState } from 'react'
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Paper, Tab } from '@mui/material';
import Bars from '../components/charts/Bars';
import Line from '../components/charts/Line';
import Pie from '../components/charts/Pie';

const Analytics = () => {

  const numberOfUser = [20, 45, 35, 15, 60, 80];
  const monthChart = ["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور"];


  const LineChartData = {
    monthChart,
    numberOfUser,
    labelChart:"User ",
    colorChart:'#8884d8',
    widthChart:1000,
    heightChart:500
  }

  const coursesData = [
    { data: [35, 44, 24, 34],label:"frontEnd" },
    { data: [51, 6, 49, 30], label:"backEnd"  },
    { data: [15, 25, 30, 50], label:"AI"  },
    { data: [60, 50, 15, 25], label:"security"  },
  ]

  const years = ['2021', '2022', '2023', '2024'];

  const barsChartData = {
    coursesData,
    years,
    widthChart: 1000,
    heightChart : 500,
    marginChart:{ top: 10, bottom: 30, left: 40, right: 10 }
  }
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value} sx={{ width: '100%'}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="chart Tab">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"> 
<Box  display="flex" mx="auto"  mt={6}>

        <Line {...LineChartData}/>
        </Box>
        </TabPanel>
        <TabPanel value="2">
  <Box mx="auto" display="flex"      mt={6}>
          <Bars {...barsChartData}/>
        </Box>
          </TabPanel>
       
        {/* <TabPanel value="3"><Pie/> </TabPanel> */}
      </TabContext>
    </Box>
  );
}

export default Analytics;