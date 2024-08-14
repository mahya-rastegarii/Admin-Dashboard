// import Dashboard from "./page/Dashboard";
import router from "./router";

import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppContext } from "./context/app/app-context";
import { useThemeContext } from "./context/theme/ThemeContext";
import "./core/i18next";

function App() {
  const { language } = useAppContext();
  const { darkMode } = useThemeContext();

  
  const rtlDir = language === "fa" ? true : false;
  return (
  
        <>
          <RouterProvider router={router} />
          <ToastContainer
            rtl={rtlDir}
            theme={darkMode ? "dark" : "light"}
            position={language === "fa" ? "top-right" : "top-left"}
          />

    
    </>
  );
}

export default App;
