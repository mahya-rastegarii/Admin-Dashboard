import React, { useState } from "react";
import { ArrowDropDown, Palette } from "@mui/icons-material";
import { Box, Grid, IconButton, Menu, MenuItem } from "@mui/material";
// import {amber, blue, cyan, deepPurple, green, lime, pink, purple, red, teal, yellow} from "@mui/material/colors";
import PaletteBox from '../box/PaletteBox'
import MenuComponent from "../menu/MenuComponent";
import { useAppContext } from "../../context/app/app-context";
export const PaletteMenu = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  //  const openMenu = Boolean(anchorEl)

  const handleClickItem = (index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  // const [themePage, setThemePage] = useState(teal[500]);
  const {changeTheme, theme, themeColor, mode }= useAppContext()
  const iconColor = mode.palette.typography;
  // const themeColors = [teal, amber, lime, pink, cyan, purple ]
  const Colors = [

    {
      id:1,
      color: 'teal',
      hexColor: '#009688'
      
    },
    {
      id:2,
       color:'amber',
       hexColor: '#ffc107'

    },
      {
        id:3,
        color:'lime' ,
        hexColor: '#d4e157'

      },
      {
        id:4,
         color: 'pink',
         hexColor: '#e91e63'

      },
        {
          id: 5,
          color: 'cyan',
          hexColor: '#00bcd4'

        },
        
        
        {
          id: 6,
          color:'purple',
          hexColor: '#9c27b0'
        }

        ]

  return (
    <Box>
      <IconButton
        // id="palette-button"
        size="large"
        edge="end"
        // aria-label="Palette"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{  color : iconColor }}
        
      >
        <Palette />
        <ArrowDropDown sx={{ position: "absolute", left: "52%", top: "44%" }} />
      </IconButton>

    <MenuComponent anchorEl={anchorEl}  handleCloseMenu={handleCloseMenu}>
   
   
 
   
     <Box display="grid" gap={1}
      gridTemplateColumns="repeat(3, 1fr)">
     <PaletteBox themeColors={Colors}   selectedColor={themeColor} color={theme} setSelectedColor={changeTheme}  />
      </Box>
    {/* </Grid> */}
      </MenuComponent>
    </Box>
  );
};
