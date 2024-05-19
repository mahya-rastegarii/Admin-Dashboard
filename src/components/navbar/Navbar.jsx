import {
  ArrowDropDown,
  ChevronLeft,
  ChevronLeftTwoTone,
  ChevronRight,
  DarkMode,
  LightMode,
  Mail,
  Notifications,
  Palette,
  DoubleArrow,
  KeyboardDoubleArrowRight,
  KeyboardDoubleArrowLeft
} from "@mui/icons-material";


import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  AppBar as MuiAppBar,
  Toolbar
} from "@mui/material";
import {  pink, red, green } from '@mui/material/colors';
import { alpha, styled } from "@mui/material/styles";
import { useState } from "react";
import { LanguageMenu } from "./LanguageMenu";
import { PaletteMenu } from "./PaletteMenu";

const Navbar = ({ drawerWidth, handleDrawer, open, setDarkMode, darkMode }) => {

  // const [language, setLanguage] = useState("en")
 


  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    // zIndex: theme.zIndex.drawer + 1,
    // width: `calc(100% - ${drawerWidth}px)`,
    
    backdropFilter: 'blur(7px)',
    backgroundColor: alpha(theme.palette.background.paper, 0.5),
    // boxShadow: "none",
    // backgroundColor:"transparent",
    // backgroundImage:"none",
    width: "96%",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
 

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <Box
          sx={{
            position: "absolute",
            left: "0",
            
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <IconButton
            size="small"
            edge="end"
            // color="inherit"
            onClick={handleDrawer}
            aria-label="open drawer"
            // sx={{ ...(open && { display: "none" }) }}
          >
            {/* <MenuIcon /> */}
            {open ? <KeyboardDoubleArrowLeft /> : <KeyboardDoubleArrowRight/>}
          </IconButton>

        
        </Box>

        <Box sx={{ flexGrow: 1 }} />
        <Box  sx={{ display:' flex', justifyContent:"center", alignItems:'center'}}>
          {/* <IconButton
            size="large"
            aria-label="show  new mails"
            // color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
          </IconButton> */}
         <IconButton
            size="large"
            aria-label="show  new notifications"
            sx={{ mr: "2px"}}
            // color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <Notifications />
            </Badge>
          </IconButton>
         
         <PaletteMenu/>

          <IconButton
            size="large"
            edge="end"
            aria-label={darkMode ? " light Mode " : " dark Mode "}
            onClick={() => setDarkMode(!darkMode)}
            sx={{ mr: "1px"}}
            // color="inherit"
          >
            {darkMode ? <LightMode /> : <DarkMode />}
          </IconButton>
        
       

        <LanguageMenu/>

        </Box>

        {/* <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"

              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box> */}

     

    
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
