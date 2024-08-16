import React, { useState } from 'react'

import MenuComponent from './MenuComponent';
import { Box, IconButton, MenuItem } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import { useAppContext } from '../../context/app/app-context';

const MenuContainer  = ({menuItem, selectedItem, setSelectedItem}) => {

    
    const {language, mode,  themeColor }= useAppContext();

    const boxBg = mode.palette.boxBg;
    const typography = mode.palette.typography;
    const borderColor = mode.palette.borderColor;
  
    
    const [anchorEl, setAnchorEl] = useState(null);
  
  
    const handleClickItem = (item) => {
      setSelectedItem(item);
    
      setAnchorEl(null);
    };
  
    const handleCloseMenu = () => {
      setAnchorEl(null);
    };
  
    // const handleChange = (e) => {
    //   setValue(e.target.value);
    //   sortDate();
    // };
  
  return (
    <>

<IconButton
    size="small"
    edge="start"
    onClick={(e) => setAnchorEl(e.currentTarget)}
    sx={{
      color:typography,
      paddingX: 2,
      
      "&:hover":{
        backgroundColor:"inherit"
      }
    }}
   
   
  >
    <Box 
    sx={{ display:"flex", justifyContent:"center", alignItems:"center",  borderColor:borderColor, fontSize: 16}}
    >
  {
   selectedItem
  }
    <ArrowDropDown  />
</Box>
  </IconButton>

<MenuComponent anchorEl={anchorEl} handleCloseMenu={handleCloseMenu}>
  
  
  {
    menuItem.map((item, index) => (
   
           <MenuItem key={index}  value={item}
           sx={{ color:typography, direction:language ==='fa'? "rtl": "ltr"}}
          selected={item === selectedItem}
          onClick={() => handleClickItem(item)}>
   
          
              {item}
            </MenuItem>
    ))
  }

</MenuComponent>
    </>
   

  )
}

export default MenuContainer;