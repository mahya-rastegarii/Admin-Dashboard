import React, { useState } from "react";
import { ArrowDropDown, Palette } from "@mui/icons-material";
import { Box, Grid, IconButton, Menu, MenuItem } from "@mui/material";
import {amber, blue, cyan, deepPurple, green, lime, pink, purple, red, teal, yellow} from "@mui/material/colors";
import PaletteBox from '../box/PaletteBox'
import { useThemeContext } from "../../context/theme/ThemeContext";
import MenuComponent from "../menu/MenuComponent";
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
  const {setColor, theme, color}= useThemeContext()
  const iconColor = theme.palette.mode.typography;
  // const themeColors = [teal, amber, lime, pink, cyan, purple ]
  const themeColors = [

    {
      id:1,
      color: teal,
      
    },
    {
      id:2,
       color:amber,

    },
      {
        id:3,
        color:lime,

      },
      {
        id:4,
         color:pink,

      },
        {
          id: 5,
          color: cyan,

        },
        
        
        {
          id: 6,
          color:purple,
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
     <PaletteBox themeColors={themeColors} value={500}  selectedColor={theme} color={color} setSelectedColor={setColor}  />
      </Box>
    {/* </Grid> */}
      </MenuComponent>
    </Box>
  );
};
