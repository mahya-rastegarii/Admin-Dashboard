import { createContext, useContext, useEffect, useReducer } from "react";

import { useTranslation } from "react-i18next";
import appReducer from "./app-reducer";

const AppContext = createContext();
const initialState = {
  language: localStorage.getItem("language") || "fa",
  darkMode: localStorage.getItem("darkMode") || false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { i18n } = useTranslation();
  const changeLanguage = (language) => {
    dispatch({ type: "CHANGE_LANGUAGE", payload: language });
  };

  const darkTheme = (theme) => {
    dispatch({ type: "DARK_THEME", payload: theme });
  };

  useEffect(() => {
    i18n.changeLanguage(state.language);
    document.dir = state.language === "fa" ? "rtl" : "ltr";
    localStorage.setItem("language", state.language);
  }, [state.language]);

  useEffect(() => {
    localStorage.setItem("darkMode", state.darkMode);
  }, [state.darkMode]);
  return (
    <AppContext.Provider value={{ ...state, changeLanguage, darkTheme }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
