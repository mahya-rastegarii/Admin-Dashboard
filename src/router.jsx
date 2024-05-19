import { createBrowserRouter } from "react-router-dom";

import Analytics from "./page/Analytics";
import Calendar from "./page/Calendar";
import Course from "./page/Course";
import Dashboard from "./page/Dashboard";
import Support from "./page/Support";
import User from "./page/User";
import Main from "./components/main/Main";
import AddCourse from './page/AddCourse';
import CourseDetails from "./page/CourseDetails";

const router = createBrowserRouter([
  {
  element: <Main/>,
  children :[
    {
      path: "/",
      element: <Dashboard />
    },
    {
      path: "user",
      element: <User />
    
    },
    {
      path: "course",
      element: <Course />,

    },
  
      {
        path: "course/addCourse",
      element: <AddCourse/>
    },
      {
        path: "course/:name",
      element: <CourseDetails/>
    },
  
    {
      path: "calendar",
      element: <Calendar />
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
