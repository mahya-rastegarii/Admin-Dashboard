import { Menu } from "@mui/material";
import React from "react";

import { useAppContext } from "../../context/app/app-context";

const MenuComponent = ({ children, anchorEl, handleCloseMenu }) => {
  const { themeColor, mode } = useAppContext();

  const bgColor = mode.palette.boxBg;
 

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
