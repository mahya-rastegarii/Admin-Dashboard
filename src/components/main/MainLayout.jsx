import { Box } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import { FilterProvider } from "../../context/filter/FilterContext";
import { ModalProvider } from "../../context/modal/ModalContext";
import { useThemeContext } from "../../context/theme/ThemeContext";
import { useAppContext } from "../../context/app/app-context";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
// import { FilterProvider } from '../../context/filter/FilterContext'

import "../../App.css";


const MainLayout = () => {
  const drawerWidth = 240;

  const [open, setOpen] = useState(false);
 const {language} = useAppContext()

  const handleDrawer = () => {
    setOpen(!open);
  };

  // const theme = createTheme({
  //     palette: {
  //       primary: {
  //         light: "#757ce8",
  //         main: "#3f50b5",
  //         dark: "#002884",
  //         contrastText: "#fff",
  //       },
  //       secondary: {
  //         light: "#ff7961",
  //         main: "#f44336",
  //         dark: "#ba000d",
  //         contrastText: "#000",
  //       },
  //     },
  //   });

  const { theme, darkMode } = useThemeContext();


  const bgColor = theme.palette.mode.bg;
  const boxBg = theme.palette.mode.boxBg;
  return (
    <Box
      sx={{
        display: "flex",
        // p: 3,
        direction: language === 'fa' ? 'rtl' : 'ltr'  ,
        overflowX: "hidden",
        backgroundColor: bgColor,
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
        className={darkMode ? "dark" : "light"}
      >
        <FilterProvider>
          <ModalProvider>
           
            
              <Outlet />
          
            
          </ModalProvider>
        </FilterProvider>
      </Box>
    </Box>
  );
};

export default MainLayout;
