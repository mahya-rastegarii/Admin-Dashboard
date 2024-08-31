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
  // const [language, setLanguage] = useState("en")


  

  const {language, themeColor, mode, darkMode, darkTheme }= useAppContext();


  const iconColor = mode.palette.typography;
  const bgColor = mode.palette.boxBg;
  const avatarColor = themeColor.palette.primary.main ;

  const badgeColor = themeColor.palette.primary.dark;
 
  // const widthNavbar = `calc(${theme.spacing(7)} + 1px)`;
const arrow = language=== 'fa' ? <KeyboardDoubleArrowRight/> : <KeyboardDoubleArrowLeft  />
  const AppBar = styled(MuiAppBar, {



    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    // width: `calc(100% - ${drawerWidth}px)`,
    direction: language === 'fa' ? 'rtl' : 'ltr',
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
      marginLeft: language === 'en' ? `${drawerWidth}px` : 0,
      marginRight: language === 'fa' ? `${drawerWidth}px` : 0,
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
           
            // sx={{ ...(open && { display: "none" }) }}
            sx={{ mx: 2, color: iconColor,  display: {xs:"none", md:"flex"}}}
          >
            {/* <MenuIcon /> */}
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
            aria-label={!darkMode  ? " dark Mode " :  " light Mode "}
            onClick={() => darkTheme(!darkMode)}
            sx={{ color: iconColor }}
            
          >
            {!darkMode  ?   <DarkMode/> : <LightMode />}
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
