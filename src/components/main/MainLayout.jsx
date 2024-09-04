import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import { useAppContext } from "../../context/app/app-context";
import { ModalProvider } from "../../context/modal/ModalContext";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

import "../../App.css";

const MainLayout = () => {
  const drawerWidth = 240;

  const [open, setOpen] = useState(false);

  const Main = styled(Box, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    display:'flex',
    flexDirection:"column",
   
    margin: theme.spacing(6, 0),
    padding: theme.spacing(9, 0),

    width: `calc(100% - (${theme.spacing(7)} + 1px))`,

    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
     
      padding: theme.spacing(9, 0),
    }),
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - (${theme.spacing(8)} + 1px))`,
    
      padding: theme.spacing(9, 0),
    },
  }));

  const { language, themeColor, mode, themeMode } = useAppContext();

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
        width: "100%",
        direction: language === "fa" ? "rtl" : "ltr",
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

      <Main
      
        className={themeMode === "dark"  ? "dark" : "light"}
      >
        <ModalProvider>
          <Outlet />
        </ModalProvider>
      </Main>
    </Box>
  );
};

export default MainLayout;
