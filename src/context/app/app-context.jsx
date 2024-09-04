import { amber, cyan, lime, pink, purple, teal } from "@mui/material/colors";
import { createContext, useContext, useEffect, useReducer } from "react";

import { alpha, createTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import appReducer from "./app-reducer";

const AppContext = createContext();
const initialState = {
  language: localStorage.getItem("language") || "fa",
  darkMode: localStorage.getItem("darkMode") || false,
  theme: localStorage.getItem("theme") || "teal",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { i18n } = useTranslation();
  // const colors = {
  //   lightColor: state.theme[50],
  //   mainColor: state.theme[500],
  //   darkColor: state.theme[900],
  // };

  const colors =
    state.theme === "teal"
      ? { light: teal[50], main: teal[500], dark: teal[900] }
      : state.theme === "amber"
      ? { light: amber[50], main: amber[500], dark: amber[900] }
      : state.theme === "lime"
      ? { light: lime[50], main: lime[500], dark: lime[900] }
      : state.theme === "pink"
      ? { light: pink[50], main: pink[500], dark: pink[900] }
      : state.theme === "cyan"
      ? { light: cyan[50], main: cyan[500], dark: cyan[900] }
      : { light: purple[50], main: purple[500], dark: purple[900] };

  const themeColor = createTheme({
    palette: {
      primary: colors,

      // light: colors.lightColor,
      // main: colors.mainColor,
      // dark: colors.darkColor,
    },
  });

  const mode = createTheme({
    palette: {
      bg: state.darkMode   ? alpha("#000", 0.9) : "#fff",
      typography: state.darkMode   ? alpha("#fff", 0.9) : alpha("#000", 0.8),
      boxBg: state.darkMode  ? "#212121" : "#fff",
      borderColor: state.darkMode  ? alpha("#fff", 0.1) : alpha("#000", 0.1),
      shadow: state.darkMode  ? "#242424" : "#ccc",
    },
  });

  const changeLanguage = (language) => {
    dispatch({ type: "CHANGE_LANGUAGE", payload: language });
  };

  const darkTheme = (theme) => {
    dispatch({ type: "DARK_THEME", payload: theme });
  };

  const changeTheme = (color) => {
    dispatch({ type: "CHANGE_THEME", payload: color });
  };

  useEffect(() => {
    i18n.changeLanguage(state.language);
    document.dir = state.language === "fa" ? "rtl" : "ltr";
    localStorage.setItem("language", state.language);
  }, [state.language]);

  useEffect(() => {
    localStorage.setItem("darkMode", state.darkMode);
    document.body.style.background = mode.palette.bg;
  }, [state.darkMode]);

  useEffect(() => {
    localStorage.setItem("theme", state.theme);
  }, [state.theme]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        changeLanguage,
        darkTheme,
        changeTheme,
        themeColor,
        mode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
