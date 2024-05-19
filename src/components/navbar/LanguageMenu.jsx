import iranFlag from '../../assets/img/iran.svg';
import enFlag from "../../assets/img/united kingdom.svg";

import { ArrowDropDown } from "@mui/icons-material";
import { Avatar, Box, IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";

export const LanguageMenu = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  //  const openMenu = Boolean(anchorEl)

  const handleClickItem = (index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  let language = [
    {
      text: "English",
      img: enFlag,
    },
    {
      text: "فارسی",
      img: iranFlag,
    },
  ];
  return (
    <Box sx={{ mr:"20px", ml:"7px"}}>
      <IconButton
        // id="basic-button"
        size="large"
        edge="start"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        // aria-controls={openMenu ? 'basic-menu' : undefined}
        // aria-haspopup="true"
        // aria-expanded={openMenu ? 'true' : undefined}

        // color="inherit"
      >
        <Avatar
          alt=" united kingdom Flag "
          src={language[selectedIndex].img}
          sx={{ width: 24, height: 24 }}
        />
        <ArrowDropDown sx={{ position: "absolute", left: "66%", top: "35%" }} />
      </IconButton>

      <Menu
        // id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        // value={language}
        // MenuListProps={{
        //   'aria-labelledby': 'basic-button',
        // }}
        //     transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        // anchorOrigin={{ horizontal:'left', vertical: 'bottom' }}
      >
        {language.map((option, index) => (
          <MenuItem
            sx={{ display: "flex" }}
            key={option.text}
            selected={index === selectedIndex}
            onClick={() => handleClickItem(index)}
          >
            <Avatar
              alt=" united kingdom Flag "
              src={option.img}
              sx={{ width: 24, height: 24, mr: "5px" }}
            />
            {option.text}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
