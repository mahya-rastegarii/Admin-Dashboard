import { Box, IconButton, Menu, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useThemeContext } from "../../../context/theme/ThemeContext";

import "../tableStyle.css";
import { ArrowDropDown } from "@mui/icons-material";
import MenuComponent from "../../menu/MenuComponent";

const SortBox = ({ sortDate, value, setValue }) => {
  // const [value, setValue] = useState("Newest");
  const { theme } = useThemeContext();
  const boxBg = theme.palette.mode.boxBg;
  const typography = theme.palette.mode.typography;
  const borderColor = theme.palette.mode.borderColor;

  // const [selectedIndex, setSelectedIndex] = useState(0);
  // const [anchorEl, setAnchorEl] = useState(null);
  // //  const openMenu = Boolean(anchorEl)

  // const handleClickItem = (index) => {
  //   setSelectedIndex(index);
  //   setAnchorEl(null);
  // };

  // const handleCloseMenu = () => {
  //   setAnchorEl(null);
  // };
  const handleChange = (e) => {
    setValue(e.target.value);
    sortDate();
  };

  let menuItem = ["Newest", "Oldest"]
  return (
  
//     <Box 
//     sx={{ display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}
//     >
//     <IconButton
    
//     size="small"
//     edge="start"
//     onClick={(e) => setAnchorEl(e.currentTarget)}
    
   
   
//   >
//     <Box 
    
//     sx={{ display:"flex", justifyContent:"center", alignItems:"center", border: "1px solid #f1f1f1", padding: 1, borderRadius:2}}
//     >
//   {
//     menuItem[selectedIndex]
//   }
//     <ArrowDropDown  />
// </Box>
//   </IconButton>

//   <MenuComponent anchorEl={anchorEl} handleCloseMenu={handleCloseMenu}>
  
  
//     {
//       menuItem.map((item, index) => (
     
//              <MenuItem key={index}  value={item}
           
//             selected={index === selectedIndex}
//             onClick={() => handleClickItem(index)}>
//                 {item}
//               </MenuItem>
//       ))
//     }
  
//   </MenuComponent>
  
//     </Box>
<Box 
  sx={{
   
      backgroundColor:boxBg,
      color:typography,
  
  }}>

      <Select
      value={value}
      size="small"
      sx={{
        color: typography,
        backgroundColor: boxBg,
        border:` 1px solid ${borderColor}`,
        " & .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon , .css-bpeome-MuiSvgIcon-root-MuiSelect-icon":
        {
          color: typography,
        },

       "& .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper" : {
          backgroundColor: boxBg ,
      } 
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
    
    </Box>
  );
};

export default SortBox;
