import { createBrowserRouter } from "react-router-dom";

import Analytics from "./page/Analytics";

import Courses, { courseLoader }  from "./page/Courses";
import Dashboard, { NewDataLoader } from "./page/Dashboard";
import Support from "./page/Support";
import User, { userLoader } from "./page/User";
import MainLayout from "./components/main/MainLayout";
import ContainerCalendar, { eventLoader } from "./page/calendar/ContainerCalendar";
// import CourseDetails from "./page/CourseDetails";

const router = createBrowserRouter([
  {
  element: <MainLayout/>,
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
  
    //   {
    //     path: "course/:name",
    //   element: <CourseDetails/>
    // },
  
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
      path: "support",
      element: <Support />
    },
  ]
  }
]);

export default router;
