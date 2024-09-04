import {
  DarkMode,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
  LightMode,
  Menu,
  Notifications,
} from "@mui/icons-material";

import {
  Avatar,
  Badge,
  Box,
  IconButton,
  ListItemIcon,
  AppBar as MuiAppBar,
  Toolbar,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

import { LanguageMenu } from "./LanguageMenu";
import { PaletteMenu } from "./PaletteMenu";
import { useAppContext } from "../../context/app/app-context";

const Navbar = ({ drawerWidth, handleDrawer, open }) => {
 


  

  const {language, themeColor, mode, darkMode, darkTheme }= useAppContext();


  const iconColor = mode.palette.typography;
  const bgColor = mode.palette.boxBg;
  const avatarColor = themeColor.palette.primary.main ;

  const badgeColor = themeColor.palette.primary.dark;
 

const arrow = language=== 'fa' ? <KeyboardDoubleArrowRight/> : <KeyboardDoubleArrowLeft  />
  const AppBar = styled(MuiAppBar, {



    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
   
    direction: language === 'fa' ? 'rtl' : 'ltr',
    backdropFilter: "blur(3px)",
    backgroundColor: alpha(bgColor , 0.9),
   
    

    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: language === 'en' ? `${drawerWidth}px` : 0,
      marginRight: language === 'fa' ? `${drawerWidth}px` : 0,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

 
 
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar >
        <Box
          sx={{
            position: "absolute",
           
            right: language === 'fa' && 0,
            left: language === 'en' && 0,
            display: "flex",
            justifyContent: "flex-start",
          }}
        >


          <IconButton
            size="small"
            edge="end"
           
            onClick={handleDrawer}
            aria-label="open drawer"
           
          
            sx={{ mx: 2, color: iconColor,  display: {xs:"none", md:"flex"}}}
          >
             
            {open ? arrow : <Menu/>}
          </IconButton>
        
        </Box>

        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            display: " flex",
            justifyContent: "center",
            alignItems: "center",
            gap:1
          }}
        >
        
          <IconButton
            size="large"
            aria-label="show  new notifications"
            sx={{ color: iconColor }}
            // color="inherit"
            
          >
            <Badge badgeContent={17}  color="error">
              <Notifications  />
            </Badge>
          </IconButton>

          <PaletteMenu />

          <IconButton
            size="large"
            edge="end"
            aria-label={darkMode  ? " light Mode " :  " dark Mode "}
            onClick={() => darkTheme(!darkMode)}
            sx={{ color: iconColor }}
            
          >
            { darkMode  ? <LightMode /> :   <DarkMode/>}
          </IconButton>

          <LanguageMenu />
            <ListItemIcon
              sx={{
                minWidth: 0,
              
                 mx:2,
                justifyContent: "center",
                display: open ? "none" : "flex",
              }}
            >
              <Avatar sx={{ width: 25, height: 25, padding: "4px", backgroundColor: avatarColor }}>M</Avatar>
            </ListItemIcon>
        </Box>

       
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
