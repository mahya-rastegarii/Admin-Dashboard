import { Box, MenuItem } from "@mui/material";
import React  from "react";

const PaletteBox = ({component,  selectedColor, setSelectedColor }) => {
  

  const handleClickItem = (theme) => {
    if(component === "menu"){

      setSelectedColor(theme.color)
    }
  else if(component === "event") {

    setSelectedColor(theme.hexColor)
  }
    console.log("theme", theme);
  }

  const Colors = [

    {
      id:1,
      color: 'teal',
      hexColor: '#009688'
      
    },
    {
      id:2,
       color:'amber',
       hexColor: '#ffc107'

    },
      {
        id:3,
        color:'lime' ,
        hexColor: '#d4e157'

      },
      {
        id:4,
         color: 'pink',
         hexColor: '#e91e63'

      },
        {
          id: 5,
          color: 'cyan',
          hexColor: '#00bcd4'

        },
        
        
        {
          id: 6,
          color:'purple',
          hexColor: '#9c27b0'
        }

        ]
  return (
    <>
      {Colors.map((theme) => (
        <MenuItem
         

          key={theme.id}
          selected={component === "menu" ?  theme.color == selectedColor : component ==="event" ? theme.hexColor === selectedColor : null}
          onClick={() => handleClickItem(theme)}
        >
          <Box

            sx={{
              width: 25,
              height: 25,
              borderRadius: 2,
              bgcolor: theme.hexColor,
            }}
          />
        </MenuItem>
      ))}
    </>
  );
};

export default PaletteBox;
