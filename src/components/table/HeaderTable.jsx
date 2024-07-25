import { Box, Stack } from "@mui/material";
import React from "react";
import { useThemeContext } from "../../context/theme/ThemeContext";
import SearchBox from "../search/SearchBox";
import FilterBox from "./filter/FilterBox";
import SortBox from "./sort/SortBox";
// import SortBox from './SortBox';

const HeaderTable = ({ children, direction, filter, HandleSearch }) => {
  const { theme } = useThemeContext();
  const boxBg = theme.palette.mode.boxBg;
  return (
    <Box
      display="flex"
      flexDirection={direction}
      alignItems="flex-start"
      gap={4}
      sx={{ padding: 2, marginBottom: 2 }}
    >
      <Stack direction="row" spacing={3}>
        {filter && <FilterBox />}

        <SortBox />
        <SearchBox HandleSearch={HandleSearch} />
        {children}
      </Stack>
    </Box>
  );
};

export default HeaderTable;
