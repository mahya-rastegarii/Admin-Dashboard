import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer as MuiDrawer,
  styled,
} from "@mui/material";
import React from "react";

import {
  CalendarMonth,
  ContactSupport,
  Home,
  MultilineChart,
  School,
  SupervisedUserCircle
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";


// const navigate = useNavigate();
// const clickHandler = (path) => {
//   navigate(path);
// };
const Sidebar = ({ drawerWidth, open }) => {
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
    {
      title: "Support",
      icon: <ContactSupport />,
      path: "/support",
    },
  ];

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <List>
          <ListItem disablePadding>
            <ListItemIcon
              sx={{
                minWidth: 0,
                px: 1,
                mr: open ? 1 : "auto",
                justifyContent: "center",
              }}
            >
              <Avatar sx={{ width: 25, height: 25, padding: "4px" }}>M</Avatar>
            </ListItemIcon>
            <ListItemText primary={AdminName} sx={{ opacity: open ? 1 : 0 }} />
          </ListItem>
        </List>
      </DrawerHeader>
      <Divider />
      <List>
        {sideBarMenu.map((menu) => (
          <ListItem  component={NavLink} to={menu.path} key={menu.title} style={({isActive}) => ({ backgroundColor : isActive ? "#fafafa" : "", display:"black", color:"#000"})}  disablePadding >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              
              // onClick={() => clickHandler(menu.path)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
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
  );
};

export default Sidebar;
