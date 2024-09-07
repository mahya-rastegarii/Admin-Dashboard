import {
  alpha,
  Avatar,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer as MuiDrawer,
  Paper,
  styled,
} from "@mui/material";
import React, { useState } from "react";

import {
  CalendarMonth,
  ContactSupport,
  Home,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
  MultilineChart,
  School,
  SupervisedUserCircle
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { useAppContext } from "../../context/app/app-context";



const Sidebar = ({ drawerWidth, open }) => {

  
  const {language, themeMode, themeColor, mode}= useAppContext();
  
  const {t} = useTranslation()
  const activeMenu = themeColor.palette.primary.main;
  const hover = themeMode === "light"  ?   alpha(themeColor.palette.primary.light, 0.7) : alpha(themeColor.palette.primary.light, 0.1);
  const bgColor = mode.palette.boxBg;
  const typography = mode.palette.typography;
  const avatarColor = themeColor.palette.primary.main ;
  const iconColor =themeColor.palette.primary.main;

const [active, setActive] = useState(false)
  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: theme.spacing(0, 1),
    backgroundColor: bgColor,
  
  
    ...theme.mixins.toolbar,
  }));

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
   

    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
   direction:language === 'fa' ? 'rtl' : 'ltr',
   
    
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),

    "& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper , .css-1ciwpa8":{
      backgroundColor: bgColor,
      boxShadow: theme.shadows[2],
     },

     " & .css-18sg6k4-MuiPaper-root-MuiDrawer-paper , .css-1ciwpa8": {
      backgroundColor: bgColor,
      boxShadow: theme.shadows[2],
     }
  }));

 


 
  const sideBarMenu = [
    {
      title: t('sideBar.dashboard'),
      icon: <Home />,
      path: "/",
    },
    {
      title: t('sideBar.courses'),
      icon: <School />,
      path: "/course",
    },
    {
      title: t('sideBar.users'),
      icon: <SupervisedUserCircle />,
      path: "/user",
    },
    {
      title: t('sideBar.calendar'),
      icon: <CalendarMonth />,
      path: "/calendar",
    },
    {
      title: t('sideBar.analytics'),
      icon: <MultilineChart />,
      path: "/analytics",
    },
  
  ];

  return (
    <>
    <Drawer variant="permanent"


   open={open}
    anchor={language ==='fa' ? "right" : "left"}

    >
      <DrawerHeader
    >
        <List >
          <ListItem disablePadding sx={{display: open ? 'flex': 'none',}}>
            <ListItemIcon
              sx={{
                minWidth: 0,
                px: 1,
                mr: open ? 1 : "auto",
                justifyContent: "center",
                
              }}
            >
              <Avatar sx={{ width: 25, height: 25, padding: "4px", backgroundColor: avatarColor }}>M</Avatar>
            </ListItemIcon>
            <ListItemText primary={t('adminName')} sx={{ opacity: open ? 1 : 0, color: typography }} />

          
          </ListItem>
          
        </List>
      </DrawerHeader>
      <Divider  />
      <List sx={{ backgroundColor: bgColor, height:"100%" }}>
        {sideBarMenu.map((menu) => (
          <ListItem  component={NavLink} to={menu.path} key={menu.title} style={({isActive}) => ({ backgroundColor : isActive ?   hover : "", color: isActive ? activeMenu   :   typography, display:"black" })}  disablePadding >
            <ListItemButton
          
              sx={{
                minHeight: 48,
                justifyContent: open ? "flex-start" : "center",
                px: 2.5,
                "&:hover": {
                  backgroundColor: hover,
                }
              }}
              
           
              >
              <ListItemIcon
             
                sx= {{
                  minWidth: 0,
                  padding: "4px",
                  justifyContent: "center",
                  color: "inherit"
                }}

               
              >
                {menu.icon}
              </ListItemIcon>
              <ListItemText
                primary={menu.title}
                sx={{ opacity: open ? 1 : 0, textAlign:"start" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      
      </List>
    </Drawer>
    
    </>
  );
};

export default Sidebar;
