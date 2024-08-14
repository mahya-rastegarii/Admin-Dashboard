// import Dashboard from "./page/Dashboard";
import router from "./router";

import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./context/theme/ThemeContext";
import "./core/i18next";
import { useAppContext } from "./context/app/app-context";

function App() {

  const {language}= useAppContext();

  const rtlDir =language ==='fa'? true : false;
  return (
    <>
      <ThemeProvider>
        <>
          <RouterProvider router={router} />
          <ToastContainer rtl={rtlDir}/>
        </>
      </ThemeProvider>
    </>
  );
}

export default App;
