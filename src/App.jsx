// import Dashboard from "./page/Dashboard";
import router from "./router";

import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppContext } from "./context/app/app-context";

import "./core/i18next";

function App() {
  const { language, themeMode } = useAppContext();

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        rtl={language === "fa" ? true : false}
        theme={themeMode === "dark"  ? "dark" : "light"}
        position={language === "fa" ? "top-right" : "top-left"}
      />
    </>
  );
}

export default App;
