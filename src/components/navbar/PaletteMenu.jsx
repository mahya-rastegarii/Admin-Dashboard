import { ArrowDropDown, Palette } from "@mui/icons-material";
import { Box, Grid, IconButton, Menu, MenuItem } from "@mui/material";
import {amber, blue, cyan, deepPurple, green, lime, pink, purple, red, teal, yellow} from "@mui/material/colors"
import React, { useState } from "react";

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

  const themeColors = [teal[500], amber[500], lime[500], pink[500], cyan[500], purple[500]
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
      { themeColors.map((theme, index) => (
       
          <MenuItem
            // sx={}
            
            key={theme}
            selected={index === selectedIndex}
            onClick={() => handleClickItem(index)}
          >
            
            <Box
          
             sx={{
                width: 25,
                height: 25,
                borderRadius: 2,
                bgcolor: theme
                }}/>

          </MenuItem>
       

      ))}

      </Box>
    {/* </Grid> */}
      </Menu>
    </Box>
  );
};
