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
import MenuContainer from "../../menu/MenuContainer";
import { supabase } from "../../../core/createClient";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../../context/app/app-context";

const FilterBox = ({ setCoursesData, setLoading }) => {
  // const { selectValue } = useFilterContext();

  const { theme } = useThemeContext();
  const {language}= useAppContext();

  const {t}= useTranslation();
  // const iconColor = theme.palette.primary.dark;
  const typography = theme.palette.mode.typography;
  const borderColor = theme.palette.mode.borderColor
  const boxBg = theme.palette.mode.boxBg;
  // const filterData = ["Status", "Student", "Time(Hour)", "Favour"];
  // const [filterBy, setFilterBy] = useState(selectValue);
  // const [boxItem, setBoxItem] = useState(selectValue);
  const [anchorEl, setAnchorEl] = useState(null);
 const filter = language ==='fa'? "همه" : "All";
  const [filterData, setFilterData] = useState(filter);
  //  const openMenu = Boolean(anchorEl)

  const data = [t('filter.status.all'), t('filter.status.presell'), t('filter.status.completed'), t('filter.status.inProgress')];
  const navigate = useNavigate()
  // const handleClickItem = (index) => {
  //   setSelectedIndex(index);
  //   setAnchorEl(null);
  // };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const filterHandler = async() => {

    setLoading(true)
    if (filterData !== t('filter.status.all')) {
    
      const {data, error } = await supabase.from("course").select("*").eq('statusEn', filterData).order("lastUpdate", { ascending: false });;
      
      console.log("data",data)
      setCoursesData(data)
    } else {
      setCoursesData(null)
     
    }

    
    handleCloseMenu();
    setLoading(false)
  };

  // const handleChange = (event) => {
  //   setFilterBy(event.target.value);
  // };

  return (
    <Box
      sx={{ border:`1px solid ${borderColor}`, borderRadius:2 }}
    >
      <IconButton
        aria-label="Filter"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <FilterList sx={{ fontSize: 27, color:typography }} />
        <Typography variant="body2" component="span" sx={{ color: typography }}>
          {t('filter.filterTitle')} {filterData !==  filter ? "*(" + filterData + ")" : ""}
        </Typography>
      </IconButton>
      <MenuComponent anchorEl={anchorEl} handleCloseMenu={handleCloseMenu}>
        {/* <Box sx={{ width: "100%", backgroundColor: bgColor, color: typography }}> */}
          <Box
           display='flex'
            sx={{ padding: 2, color: typography, direction:language ==='fa'? "rtl": "ltr" }}
            alignItems="center"
            gap={1}
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
            <Typography>{t('filter.status.title')}</Typography>
            <Box>
            
              <FormControl variant="standard"

              sx={{
                m: 1,
                minWidth: 120,
                " & .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper":{
                  backgroundColor: boxBg
                }
               }}>
                  <Box sx={{ borderBottom:" 1px solid", }}>
             <MenuContainer menuItem={data} selectedItem={filterData} setSelectedItem={setFilterData} />
                  </Box>
                {/* <OtherFilter /> */}
                {/* <StatusFilter />  */}
              </FormControl>
            </Box>
          </Box>
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
             
             {
             t('filter.filterBtn')

             }
            </Button>
          </Stack>
        {/* </Box> */}
      </MenuComponent>
    </Box>
  );
};

export default FilterBox;
