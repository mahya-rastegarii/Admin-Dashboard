import React, { useEffect, useState } from "react";
import { Box, IconButton, Menu, MenuItem, Select } from "@mui/material";


import { ArrowDropDown } from "@mui/icons-material";
import MenuComponent from "../../menu/MenuComponent";
import MenuContainer from "../../menu/MenuContainer";
import { useTranslation } from "react-i18next";
import { useAppContext } from '../../../context/app/app-context';
const SortBox = ({ sortData }) => {
 

  
 const {language, mode, themeColor }= useAppContext()
  const {t}= useTranslation()


  const boxBg = mode.palette.boxBg;
  const typography = mode.palette.typography;
  const borderColor = mode.palette.borderColor;

  const [selected, setSelected] = useState();

  const [anchorEl, setAnchorEl] = useState(null);

  let menuItem = [t('sort.new'), t('sort.old')]
  

  const handleClickItem = (item) => {
    setSelected(item);
    sortData(item)
    setAnchorEl(null);

  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

 useEffect(() => {
  const sort = language=== 'fa' ? "جدید ترین": 'Newest';
   setSelected(sort)
 }, [language])
  
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
      },
      "&:active":{
        backgroundColor:boxBg
      }
    }}
   
   
  >
    <Box 
    sx={{ display:"flex", justifyContent:"center", alignItems:"center",  borderColor:borderColor, fontSize: 16}}
    >
  {
   selected
  }
    <ArrowDropDown  />
</Box>
  </IconButton>

<MenuComponent anchorEl={anchorEl} handleCloseMenu={handleCloseMenu}>
  
  
  {
    menuItem.map((item, index) => (
   
           <MenuItem key={index}  value={item}
           sx={{ color:typography,  direction:language ==='fa'? "rtl": "ltr",}}
          selected={item === selected}
          onClick={() => handleClickItem(item)}
          >
   
          
              {item}
            </MenuItem>
    ))
  }

</MenuComponent>
  
    </Box>



  );
};

export default SortBox;
