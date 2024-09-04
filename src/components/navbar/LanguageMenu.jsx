import faFlag from '../../assets/img/iran.svg';
import enFlag from "../../assets/img/united kingdom.svg";

import { ArrowDropDown } from "@mui/icons-material";
import { Avatar, Box, IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";

import MenuComponent from '../menu/MenuComponent';
import { useAppContext } from '../../context/app/app-context';

export const LanguageMenu = () => {

  const {themeColor, language, changeLanguage, mode }= useAppContext()

const iconColor = mode.palette.typography;
const bgBox = mode.palette.boxBg;
const typography = mode.palette.typography;

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
    <Box sx={{ml:language ==='en' && 2  }}>
      <IconButton
        // id="basic-button"
        size="large"
        edge="start"
        onClick={(e) => setAnchorEl(e.currentTarget)}
       
        sx={{ color: iconColor}}
        
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
              sx={{ width: 24, height: 24, mr: language=== 'en' && "5px", ml:language ==='fa' && "5px" }}
            />
            {option.text}
          </MenuItem>
        ))}
      </MenuComponent>
    </Box>
  );
};
