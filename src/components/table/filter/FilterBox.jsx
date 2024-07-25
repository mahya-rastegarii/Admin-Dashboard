import { FilterList } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Menu,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useFilterContext } from "../../../context/filter/FilterContext";
import { useThemeContext } from "../../../context/theme/ThemeContext";
import { rowCourse } from "../../course/CourseData";
import { StatusFilter } from "./SelectData";
import MenuComponent from "../../menu/MenuComponent";

const FilterBox = ({ setCourses }) => {
  const { selectValue } = useFilterContext();
  const { theme } = useThemeContext();
  // const iconColor = theme.palette.primary.dark;
  const typography = theme.palette.mode.typography;
  const borderColor = theme.palette.mode.borderColor;
  const boxBg = theme.palette.mode.boxBg;
  // const filterData = ["Status", "Student", "Time(Hour)", "Favour"];
  // const [filterBy, setFilterBy] = useState(selectValue);
  // const [boxItem, setBoxItem] = useState(selectValue);
  const [anchorEl, setAnchorEl] = useState(null);
  const [filterData, setFilterData] = useState("none");
  //  const openMenu = Boolean(anchorEl)

  // const handleClickItem = (index) => {
  //   setSelectedIndex(index);
  //   setAnchorEl(null);
  // };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const filterHandler = () => {
    if (filterData !== "none") {
      const data = rowCourse.filter((item) => item.status === filterData);
      setCourses(data);
    } else {
      setCourses(rowCourse);
    }
    handleCloseMenu();
  };

  // const handleChange = (event) => {
  //   setFilterBy(event.target.value);
  // };

  return (
    <Box
   
    >
      <IconButton
        aria-label="Filter"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <FilterList sx={{ fontSize: 27, color:typography }} />
        <Typography variant="body2" component="span" sx={{ color: typography }}>
          filter {filterData !== "none" ? "*(" + filterData + ")" : ""}
        </Typography>
      </IconButton>
      <MenuComponent anchorEl={anchorEl} handleCloseMenu={handleCloseMenu}>
        {/* <Box sx={{ width: "100%", backgroundColor: bgColor, color: typography }}> */}
          <Stack
            direction="row"
            sx={{ padding: 2, color: typography }}
            alignItems="center"
            spacing={2}
          >
            {/* <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
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
          </FormControl> */}
            <Typography>{selectValue}</Typography>
            <Box>
            
              <FormControl variant="standard"

              sx={{
                m: 1,
                minWidth: 120,
                " & .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper":{
                  backgroundColor: boxBg
                }
               }}>
                <StatusFilter
                  filterData={filterData}
                  setFilterData={setFilterData}
                />
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
            <Button
              variant="contained"
              size="small"
              color="success"
              onClick={filterHandler}
            >
              {" "}
              Search{" "}
            </Button>
          </Stack>
        {/* </Box> */}
      </MenuComponent>
    </Box>
  );
};

export default FilterBox;
