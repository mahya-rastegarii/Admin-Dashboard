import React, { useState } from 'react';
import { FilterList, Sort } from '@mui/icons-material'
import { Box, IconButton, Menu, MenuItem, Select, Stack, Typography } from '@mui/material'
import SearchBox from '../search/SearchBox';
import FilterBox from './FilterBox';
import SortBox from './SortBox';

const HeaderTable = ({children}) => {


  return (
    <Box  display="flex" justifyContent="flex-start" gap={4}  sx={{ padding: 2, marginBottom:  2}} >
    <Stack direction="row" spacing={1}>
   <FilterBox/>
   <SortBox/>

    </Stack>
      <SearchBox />
      {
        children
      }
      </Box>
  )
}

export default HeaderTable