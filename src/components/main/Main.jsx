import { Outlet } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import React, { useState } from 'react'
import { ModalProvider } from '../../context/modal/ModalContext'
// import { FilterProvider } from '../../context/filter/FilterContext'

const Main = () => {

const drawerWidth = 240;

const [open, setOpen] = useState(false);
const [darkMode, setDarkMode] = useState(false);



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

  return (
    <Box  sx={{ display: "flex", px:15 }}>
      
   
    <Navbar
    drawerWidth={drawerWidth}
    open={open}
    handleDrawer={handleDrawer}
    darkMode={darkMode}
    setDarkMode={setDarkMode}
  />
  <Sidebar drawerWidth={drawerWidth} open={open} />
  <ModalProvider>

  <Box sx={{ my:14, mx:"auto", width:"100%" }}>
  <Outlet/>
  </Box>
  </ModalProvider>
  </Box>
  )
}

export default Main