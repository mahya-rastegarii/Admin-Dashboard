import { Menu } from "@mui/material";
import React from "react";
import { useThemeContext } from "../../context/theme/ThemeContext";

const MenuComponent = ({ children, anchorEl, handleCloseMenu }) => {
  const { theme } = useThemeContext();

  const bgColor = theme.palette.mode.boxBg;
  // const borderColor = theme.palette.mode.borderColor;

  return (
    <Menu
      sx={{
      
        "& .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper": {
          backgroundColor: bgColor,
        
        },
        // "& .css-6hp17o-MuiList-root-MuiMenu-list" : {

        // }
      }}
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleCloseMenu}
      // sx={{
      //   "&.css-6hp17o-MuiList-root-MuiMenu-list" :{
      //     paddingTop:0,
      //   }
      // }}
    >
      {children}
    </Menu>
  );
};

export default MenuComponent;
