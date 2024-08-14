import { Box, IconButton, Menu, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useThemeContext } from "../../../context/theme/ThemeContext";

import "../tableStyle.css";
import { ArrowDropDown } from "@mui/icons-material";
import MenuComponent from "../../menu/MenuComponent";
import MenuContainer from "../../menu/MenuContainer";
import { useTranslation } from "react-i18next";
import { useAppContext } from '../../../context/app/app-context';
const SortBox = ({ sortData }) => {
  // const [value, setValue] = useState("Newest");

  const { theme } = useThemeContext();
 const {language }= useAppContext()
  const {t}= useTranslation()


  const boxBg = theme.palette.mode.boxBg;
  const typography = theme.palette.mode.typography;
  const borderColor = theme.palette.mode.borderColor;

  const sort = language=== 'fa' ? "جدید ترین": 'Newest';
  const [selectedIndex, setSelectedIndex] = useState(sort);
  let menuItem = [t('sort.new'), t('sort.old')]
  const [anchorEl, setAnchorEl] = useState(null);
  // //  const openMenu = Boolean(anchorEl)

  const handleClickItem = (item) => {
    setSelectedIndex(item);
    sortData(item)
    setAnchorEl(null);

  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  
  
  return (
  
    <Box 
    sx={{ display:"flex", justifyContent:"center", padding:0, alignItems:"center", flexDirection:"column", border:`1px solid ${borderColor}`, borderRadius:2 }}
    >
   
   <IconButton
    size="small"
    edge="start"
    onClick={(e) => setAnchorEl(e.currentTarget)}
    sx={{
      color:typography,
      paddingX: 2,
      
      "&:hover":{
        backgroundColor:boxBg
      }
    }}
   
   
  >
    <Box 
    sx={{ display:"flex", justifyContent:"center", alignItems:"center",  borderColor:borderColor, fontSize: 16}}
    >
  {
   selectedIndex
  }
    <ArrowDropDown  />
</Box>
  </IconButton>

<MenuComponent anchorEl={anchorEl} handleCloseMenu={handleCloseMenu}>
  
  
  {
    menuItem.map((item, index) => (
   
           <MenuItem key={index}  value={item}
           sx={{ color:typography,  direction:language ==='fa'? "rtl": "ltr",}}
          selected={item === selectedIndex}
          onClick={() => handleClickItem(item)}
          >
   
          
              {item}
            </MenuItem>
    ))
  }

</MenuComponent>
   

 


  
  
    </Box>


/* <Box 
  sx={{
    // "& div , ul" :{
    //   backgroundColor:boxBg
    // }
      // backgroundColor:boxBg,
      // color:typography,
    //   "& .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper" : {
    //     backgroundColor: boxBg ,
  //   // } ,
  //   "& .css-6hp17o-MuiList-root-MuiMenu-list" : {
  //     backgroundColor: boxBg ,
  // } 
  }}>
 
      <Select
      value={value}
      size="small"
      sx={{
        color: typography,
        backgroundColor: boxBg,
        border:` 1px solid ${borderColor}`,
        " & svg":
        {
          color: typography,
        },

     
     
      }}
      onChange={handleChange}
      displayEmpty
      inputProps={{ "aria-label": "sort Table" }}
    >
        {menuItem.map((item, index) => (
     
          <MenuItem key={index}  value={item}>
            {item}
          </MenuItem>
       
        ))}
    </Select> 
    
    </Box>  */
  );
};

export default SortBox;
