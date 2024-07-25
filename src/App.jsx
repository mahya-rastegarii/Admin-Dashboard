import { Box, createTheme } from "@mui/material";
import { useState } from "react";

import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
// import Dashboard from "./page/Dashboard";
import router from "./router";

import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./context/theme/ThemeContext";


function App() {
  

  

 
  return (
    <>
        <ThemeProvider>
          
          <RouterProvider router={router} />
        </ThemeProvider>
      
    </>
  );
}

export default App;
