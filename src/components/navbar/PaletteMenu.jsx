import React, { useState } from "react";
import { ArrowDropDown, Palette } from "@mui/icons-material";
import { Box, Grid, IconButton, Menu, MenuItem } from "@mui/material";
import {amber, blue, cyan, deepPurple, green, lime, pink, purple, red, teal, yellow} from "@mui/material/colors";
import PaletteBox from '../box/PaletteBox'
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

  const [themePage, setThemePage] = useState('#009688');
  // const themeColors = [teal[500], amber[500], lime[500], pink[500], cyan[500], purple[500] ]
  const themeColors = [
    {
      id:1,
      color:"#009688",

    },
    {
      id:2,
       color:"#ffc107",

    },
      {
        id:3,
        color:"#cddc39",

      },
      {
        id:4,
         color:"#e91e63",

      },
        {
          id: 5,
          color:"#00bcd4",

        },
        
        
        {
          id: 6,
          color:"#9c27b0"
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
        sx={{ mr: "1px" }}
      >
        <Palette />
        <ArrowDropDown sx={{ position: "absolute", left: "52%", top: "44%" }} />
      </IconButton>

      <Menu
        // id="basic-menu"
        // sx={{display: 'flex'}}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        // value={language}
        // MenuListProps={{
        //   'aria-labelledby': 'basic-button',
        // }}
        //     transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        // anchorOrigin={{ horizontal:'left', vertical: 'bottom' }}
      >
  
   
   
 
   
     <Box display="grid" gap={1}
      gridTemplateColumns="repeat(3, 1fr)">
     <PaletteBox themeColors={themeColors} selectedColor={themePage} setSelectedColor={setThemePage}  />
      </Box>
    {/* </Grid> */}
      </Menu>
    </Box>
  );
};
