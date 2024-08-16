import { Box } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";


import { ModalProvider } from "../../context/modal/ModalContext";
import { useAppContext } from "../../context/app/app-context";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";


import "../../App.css";


const MainLayout = () => {
  const drawerWidth = 240;

  const [open, setOpen] = useState(false);
 const {language, themeColor, mode, darkMode} = useAppContext();

  const handleDrawer = () => {
    setOpen(!open);
  };

  


  const bgColor = mode.palette.bg;
  const boxBg = mode.palette.boxBg;
  return (
    <Box
      sx={{
        display: "flex",
        // p: 3,
        direction: language === 'fa' ? 'rtl' : 'ltr'  ,
        overflowX: "hidden",
        // backgroundColor: bgColor,
      }}
    >
      <Navbar
        drawerWidth={drawerWidth}
        open={open}
        handleDrawer={handleDrawer}
      />
      <Sidebar drawerWidth={drawerWidth} open={open} />

      <Box
        sx={{
          my: 14,
          mx: "auto",
          padding: 3,
          width: "100%",
          overflow: { sx: "scroll", md: "hidden" },
        }}
        className={darkMode == true ? "dark" : "light"}
      >
       
          <ModalProvider>
           
            
              <Outlet />
          
            
          </ModalProvider>
        
      </Box>
    </Box>
  );
};

export default MainLayout;
