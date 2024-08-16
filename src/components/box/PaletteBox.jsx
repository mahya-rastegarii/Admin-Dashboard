import { Box, MenuItem } from "@mui/material";
import React, { useState } from "react";

const PaletteBox = ({ themeColors, selectedColor, setSelectedColor, color }) => {
  

  const handleClickItem = (theme) => {
    setSelectedColor(theme);
    console.log("theme", theme);
  }

  return (
    <>
      {themeColors.map((theme) => (
        <MenuItem
          // sx={}

          key={theme.id}
          selected={ color ? theme.color == color : theme.color === selectedColor}
          onClick={() => handleClickItem(theme.color)}
        >
          <Box

            sx={{
              width: 25,
              height: 25,
              borderRadius: 2,
              bgcolor: theme.hexColor ? theme.hexColor : theme.color,
            }}
          />
        </MenuItem>
      ))}
    </>
  );
};

export default PaletteBox;
