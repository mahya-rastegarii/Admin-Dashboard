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
import { useThemeContext } from "../../context/theme/ThemeContext";
import { LanguageMenu } from "./LanguageMenu";
import { PaletteMenu } from "./PaletteMenu";

const Navbar = ({ drawerWidth, handleDrawer, open }) => {
  // const [language, setLanguage] = useState("en")


  const { theme: customTheme, darkMode, setDarkMode } = useThemeContext();
  const iconColor = customTheme.palette.mode.typography;
  const bgColor = customTheme.palette.mode.boxBg;
  const avatarColor = customTheme.palette.primary.main ;

  const badgeColor = customTheme.palette.primary.dark;
 
  // const widthNavbar = `calc(${theme.spacing(7)} + 1px)`;

  const AppBar = styled(MuiAppBar, {



    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    // width: `calc(100% - ${drawerWidth}px)`,

    backdropFilter: "blur(3px)",
    backgroundColor: alpha(bgColor , 0.9),
    // boxShadow: "none",
    // backgroundColor:"transparent",
    // backgroundImage:"none",
    

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
      <Toolbar >
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
           
            onClick={handleDrawer}
            aria-label="open drawer"
           
            // sx={{ ...(open && { display: "none" }) }}
            sx={{ mx: 2, color: iconColor,  display: {xs:"none", md:"flex"}}}
          >
            {/* <MenuIcon /> */}
            {open ? <KeyboardDoubleArrowLeft  /> : <Menu/>}
          </IconButton>
        
        </Box>

        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            display: " flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
            sx={{ mr: "2px", color: iconColor }}
            // color="inherit"
            
          >
            <Badge badgeContent={17} color="error">
              <Notifications  />
            </Badge>
          </IconButton>

          <PaletteMenu />

          <IconButton
            size="large"
            edge="end"
            aria-label={darkMode ? " light Mode " : " dark Mode "}
            onClick={() => setDarkMode(!darkMode)}
            sx={{ mr: "1px", color: iconColor }}
            
          >
            {darkMode ? <LightMode/> : <DarkMode  />}
          </IconButton>

          <LanguageMenu />
            <ListItemIcon
              sx={{
                minWidth: 0,
              
               
                justifyContent: "center",
                display: open ? "none" : "flex",
              }}
            >
              <Avatar sx={{ width: 25, height: 25, padding: "4px", backgroundColor: avatarColor }}>M</Avatar>
            </ListItemIcon>
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
