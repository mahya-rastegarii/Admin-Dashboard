import React, { useState } from 'react'
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import Bars from '../components/charts/Bars';
import Line from '../components/charts/Line';
import Pie from '../components/charts/Pie';

const Analytics = () => {

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><Bars/></TabPanel>
        <TabPanel value="2"> <Line/></TabPanel>
        <TabPanel value="3"><Pie/> </TabPanel>
      </TabContext>
    </Box>
  );
}

export default Analytics;