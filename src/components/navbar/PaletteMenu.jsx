import React, { useState } from "react";
import { ArrowDropDown, Palette } from "@mui/icons-material";
import { Box, Grid, IconButton, Menu, MenuItem } from "@mui/material";
// import {amber, blue, cyan, deepPurple, green, lime, pink, purple, red, teal, yellow} from "@mui/material/colors";
import PaletteBox from '../box/PaletteBox'
import MenuComponent from "../menu/MenuComponent";
import { useAppContext } from "../../context/app/app-context";
export const PaletteMenu = () => {
 
  const [anchorEl, setAnchorEl] = useState(null);
  //  const openMenu = Boolean(anchorEl)


  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

;
  const {changeTheme, theme, mode }= useAppContext()
  const iconColor = mode.palette.typography;
  
 

  return (
    <Box>
      <IconButton
        id="palette-menu-button"
        size="large"
        edge="end"
        aria-label="PaletteMenu"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{  color : iconColor }}
        
      >
        <Palette />
        <ArrowDropDown sx={{ position: "absolute", left: "52%", top: "44%" }} />
      </IconButton>

    <MenuComponent anchorEl={anchorEl}  handleCloseMenu={handleCloseMenu}>
   
   
 
   
     <Box display="grid" gap={1}
      gridTemplateColumns="repeat(3, 1fr)">
     <PaletteBox component="menu"   selectedColor={theme} setSelectedColor={changeTheme}  />
      </Box>
   
      </MenuComponent>
    </Box>
  );
};
