import React, { useState } from "react";
import { FilterList } from "@mui/icons-material";
import {
  Box,
  Chip,
  FormControl,
  IconButton,
  Menu,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";

const FilterBox = () => {
  const filterData = ["Status", "Student","Time", "LastUpdate", "Favour"]
  const [value, setValue] = useState(filterData);
  // const [selectedIndex, setSelectedIndex] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  //  const openMenu = Boolean(anchorEl)

  // const handleClickItem = (index) => {
  //   setSelectedIndex(index);
  //   setAnchorEl(null);
  // };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const [filterBy, setFilterBy] = useState("Status");

  const handleChange = (event) => {
    setFilterBy(event.target.value);
  };

  return (
    <Box>
      <IconButton
        aria-label="Filter"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <FilterList sx={{ fontSize: 27 }} />
        <Typography variant="body2" component="span" color="#000">
          filter
        </Typography>
      </IconButton>
      <Menu
       
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      
      >
        <Stack direction="row" sx={{padding:2}} alignItems="center"  spacing={2}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={filterBy}
              size="small"
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
            {
              value.map(item => (

              <MenuItem key={item} value={item}>{item}</MenuItem>
              ))
            }
            
            </Select>
          </FormControl>
          <Box>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={filterBy}
              size="small"
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>
              
              </MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          </Box>
        </Stack>
      </Menu>
    </Box>
  );
};

export default FilterBox;
