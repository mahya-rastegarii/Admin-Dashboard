import { Box } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { FilterProvider } from "../../context/filter/FilterContext";
import { ModalProvider } from "../../context/modal/ModalContext";
import { useThemeContext } from "../../context/theme/ThemeContext";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
// import { FilterProvider } from '../../context/filter/FilterContext'
import "../../App.css";
import { ChartProvider } from "../../context/chart/ChartContext";
import { NotificationProvider } from "../../context/notification/NotificationContext";

const MainLayout = () => {
  const drawerWidth = 240;

  const [open, setOpen] = useState(false);

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
           <NotificationProvider>
            
              <Outlet />
           </NotificationProvider>
            
          </ModalProvider>
        </FilterProvider>
      </Box>
    </Box>
  );
};

export default MainLayout;
