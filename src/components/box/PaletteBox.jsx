import { Box, MenuItem } from "@mui/material";
import React, { useState } from "react";

const PaletteBox = ({ themeColors, selectedColor, setSelectedColor }) => {
  
  const handleClickItem = (theme) => {
    setSelectedColor(theme);
  };

  return (
    <>
      {themeColors.map((theme) => (
        <MenuItem
          // sx={}

          key={theme.id}
          selected={theme.color === selectedColor}
          onClick={() => handleClickItem(theme.color)}
        >
          <Box
            sx={{
              width: 25,
              height: 25,
              borderRadius: 2,
              bgcolor: theme.color,
            }}
          />
        </MenuItem>
      ))}
    </>
  );
};

export default PaletteBox;
