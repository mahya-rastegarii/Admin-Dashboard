import { Box, MenuItem, Select, Stack } from "@mui/material";
import React, { useState } from "react";
import SearchBox from "../search/SearchBox";
import FilterBox from "./filter/FilterBox";
// import SortBox from './SortBox';

const HeaderTable = ({ children, direction, filter }) => {
  const [value, setValue] = useState("Newest");

  return (
    <Box
      display="flex"
      flexDirection={direction}
      alignItems="flex-start"
      gap={4}
      sx={{ padding: 2, marginBottom: 2 }}
    >
      <Stack direction="row" spacing={2}>
        <SearchBox />
        {children}
      </Stack>
      <Stack direction="row" spacing={4}>
        {
          filter && <FilterBox />
        }
        
        <Select
          value={value}
          size="small"
          onChange={(event) => setValue(event.target.value)}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          {["Newest", "Oldest"].map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </Stack>
    </Box>
  );
};

export default HeaderTable;
