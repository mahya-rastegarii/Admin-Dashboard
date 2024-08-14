import faFlag from '../../assets/img/iran.svg';
import enFlag from "../../assets/img/united kingdom.svg";

import { ArrowDropDown } from "@mui/icons-material";
import { Avatar, Box, IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useThemeContext } from '../../context/theme/ThemeContext';
import MenuComponent from '../menu/MenuComponent';
import { useAppContext } from '../../context/app/app-context';

export const LanguageMenu = () => {

  const {language, changeLanguage}= useAppContext()
  const { theme} =useThemeContext()
const iconColor = theme.palette.mode.typography;
const bgBox = theme.palette.mode.boxBg;
const typography = theme.palette.mode.typography;

  const [selectedIndex, setSelectedIndex] = useState(language);
  const [anchorEl, setAnchorEl] = useState(null);
  //  const openMenu = Boolean(anchorEl)

  const handleClickItem = (lang) => {
    setSelectedIndex(lang);
    changeLanguage(lang);
    setAnchorEl(null);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  let languageInfo = [
    
    {
      id:1,
      text: "فارسی",
      img: faFlag,
      lang: 'fa'
    },
    {
      id:2,
      text: "English",
      img: enFlag,
      lang:'en'
    },
  ];
  return (
    <Box sx={{ }}>
      <IconButton
        // id="basic-button"
        size="large"
        edge="start"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        // aria-controls={openMenu ? 'basic-menu' : undefined}
        // aria-haspopup="true"
        // aria-expanded={openMenu ? 'true' : undefined}
        sx={{ color: iconColor}}
        // color="inherit"
      >
        <Avatar
          alt=" united kingdom Flag "
          src={ language === 'fa' ? faFlag : enFlag }
          sx={{ width: 24, height: 24 }}
        />
        <ArrowDropDown sx={{ position: "absolute", left: "66%", top: "35%" }} />
      </IconButton>

       <MenuComponent anchorEl={anchorEl}  handleCloseMenu={handleCloseMenu}>
        {languageInfo.map((option) => (
          <MenuItem
            sx={{ display: "flex",  color: typography }}
            key={option.text}
            selected={option.lang === selectedIndex}
            onClick={() => handleClickItem(option.lang)}
          >
            <Avatar
              alt=" united kingdom Flag "
              src={option.img}
              sx={{ width: 24, height: 24, mr: "5px" }}
            />
            {option.text}
          </MenuItem>
        ))}
      </MenuComponent>
    </Box>
  );
};
