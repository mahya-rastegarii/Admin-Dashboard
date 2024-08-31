import { createBrowserRouter } from "react-router-dom";

import Analytics from "./page/Analytics";

import Courses, { courseLoader }  from "./page/Courses";
import Dashboard, { NewDataLoader } from "./page/Dashboard";
import User, { userLoader } from "./page/User";
import MainLayout from "./components/main/MainLayout";
import ContainerCalendar, { eventLoader } from "./page/calendar/ContainerCalendar";
import NotFound from "./page/NotFound";
import UnhandledException from "./page/UnhandledException";
// import CourseDetails from "./page/CourseDetails";

const router = createBrowserRouter([
  {
  element: <MainLayout/>,
  errorElement: <UnhandledException/>,
  children :[
    {
      path: "/",
      element: <Dashboard />,
      loader: NewDataLoader
    },
    {
      path: "user",
      element: <User />,
      loader: userLoader
    },
    {
      path: "course",
      element: <Courses />,
      loader: courseLoader
      // loader: FetchCourses

    },
  
   
  
    {
      path: "calendar",
      element: <ContainerCalendar />,
      loader: eventLoader
    },
    {
      path: "analytics",
      element: <Analytics />
    },

    {
      path: "*",

      element: <NotFound/>
    }

  ]
  }
]);

export default router;
