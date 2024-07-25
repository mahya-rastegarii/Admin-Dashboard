import { alpha, createTheme } from "@mui/material";
import { teal } from "@mui/material/colors";
// import { blue } from "@mui/material/colors";

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const [color, setColor] = useState(teal);
  const theme = createTheme({
    palette: {
      primary: {
        light: color[50],
        main: color[500],
        dark: color[900],
       
      },
      mode: {
        bg: darkMode ? alpha("#000", 0.9) : "#fff",
        typography: darkMode ? alpha("#fff", 0.9) : alpha("#000", 0.8),
        boxBg: darkMode ? "#212121" : "#fff",
        borderColor: darkMode ? alpha("#fff", 0.1) : alpha("#000", 0.1),
        shadow: darkMode ? "#242424" : "#ccc",
        hover:darkMode ? alpha(color[50], 0.1) : alpha(color[50], 0.7),
      },
    },
  });

  return (
    <ThemeContext.Provider
      value={{ setColor, theme, color, darkMode, setDarkMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export const useThemeContext = () => {
  return useContext(ThemeContext);
};
