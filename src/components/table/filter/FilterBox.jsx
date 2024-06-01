import { FilterList } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Menu,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useFilterContext } from "../../../context/filter/FilterContext";
import { OtherFilter, StatusFilter } from "./SelectData";

const FilterBox = () => {
  const { selectValue } = useFilterContext();

  // const filterData = ["Status", "Student", "Time(Hour)", "Favour"];
  const [filterBy, setFilterBy] = useState(selectValue[0]);
  const [boxItem, setBoxItem] = useState(selectValue);
  const [anchorEl, setAnchorEl] = useState(null);
  //  const openMenu = Boolean(anchorEl)

  // const handleClickItem = (index) => {
  //   setSelectedIndex(index);
  //   setAnchorEl(null);
  // };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

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
        sx={{ width: "33%" }}
      >
        <Stack
          direction="row"
          sx={{ padding: 2 }}
          alignItems="center"
          spacing={2}
        >
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={filterBy}
              size="small"
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              {boxItem.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              {filterBy === "Status" ? <StatusFilter /> : <OtherFilter />}
              {/* <OtherFilter /> */}
              {/* <StatusFilter />  */}
            </FormControl>
          </Box>
        </Stack>
        <Stack
          sx={{ marginX: 2 }}
          alignItems="center"
          justifyContent="center"
          direction="row"
        >
          <Button variant="contained" size="small" color="success">
            {" "}
            Search{" "}
          </Button>
        </Stack>
      </Menu>
    </Box>
  );
};

export default FilterBox;
