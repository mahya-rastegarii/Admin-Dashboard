import { createBrowserRouter } from "react-router-dom";

import Analytics from "./page/Analytics";

import MainLayout from "./components/main/MainLayout";
import ContainerCalendar, { eventLoader } from "./page/ContainerCalendar";
import Courses, { courseLoader } from "./page/Courses";
import Dashboard, { NewDataLoader } from "./page/Dashboard";
import NotFound from "./page/NotFound";
import UnhandledException from "./page/UnhandledException";
import User, { userLoader } from "./page/User";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <UnhandledException />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        loader: NewDataLoader,
      },
      {
        path: "user",
        element: <User />,
        loader: userLoader,
      },
      {
        path: "course",
        element: <Courses />,
        loader: courseLoader,
      },

      {
        path: "calendar",
        element: <ContainerCalendar />,
        loader: eventLoader,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },

      {
        path: "*",

        element: <NotFound />,
      },
    ],
  },
]);

export default router;
