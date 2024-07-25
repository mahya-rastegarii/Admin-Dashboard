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
import { useThemeContext } from "../../context/theme/ThemeContext";


// const navigate = useNavigate();
// const clickHandler = (path) => {
//   navigate(path);
// };
const Sidebar = ({ drawerWidth, open }) => {

  const { theme: customTheme } = useThemeContext();
  const activeMenu = customTheme.palette.primary.main;
  const hover = customTheme.palette.mode.hover;
  const bgColor = customTheme.palette.mode.boxBg;
  const typography = customTheme.palette.mode.typography;
  const avatarColor = customTheme.palette.primary.main ;
  const iconColor =customTheme.palette.primary.main;

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
    
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    // boxShadow: theme.shadows[3],
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",

   
    
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),

    "& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper":{
      backgroundColor: bgColor,
      boxShadow: theme.shadows[2],
     }
  }));

 


  const AdminName = "Mahya Rastegari";
  const sideBarMenu = [
    {
      title: "Dashboard",
      icon: <Home />,
      path: "/",
    },
    {
      title: "Courses",
      icon: <School />,
      path: "/course",
    },
    {
      title: "User",
      icon: <SupervisedUserCircle />,
      path: "/user",
    },
    {
      title: "Calender",
      icon: <CalendarMonth />,
      path: "/calendar",
    },
    {
      title: "Analytics",
      icon: <MultilineChart />,
      path: "/analytics",
    },
    // {
    //   title: "Support",
    //   icon: <ContactSupport />,
    //   path: "/support",
    // },
  ];

  return (
    <>
    <Drawer variant="permanent" open={open}>
      <DrawerHeader
    >
        <List >
          <ListItem disablePadding sx={{display: open ? 'flex': 'none'}}>
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
            <ListItemText primary={AdminName} sx={{ opacity: open ? 1 : 0, color: typography }} />

          
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
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                "&:hover": {
                  backgroundColor: hover,
                }
              }}
              
              // onClick={() => clickHandler(menu.path)}
              >
              <ListItemIcon
              // style={({isActive}) => ({ color: isActive ? active : typography})}
                sx= {{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "inherit"
                }}

               
              >
                {menu.icon}
              </ListItemIcon>
              <ListItemText
                primary={menu.title}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      
      </List>
    </Drawer>
    {/* <IconButton
            size="small"
            edge="end"
            component={Paper}
           
            // onClick={handleDrawer}
            aria-label="open drawer"
            // sx={{ ...(open && { display: "none" }) }}
            sx={{position:"absolute", color: iconColor, left:"3%"}}
          >
            {/* <MenuIcon /> 
            {open ? <KeyboardDoubleArrowLeft  /> : <KeyboardDoubleArrowRight />}
          </IconButton> */}
    </>
  );
};

export default Sidebar;
