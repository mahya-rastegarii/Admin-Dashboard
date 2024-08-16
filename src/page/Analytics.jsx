import React, { useState } from "react";

import { Box, Stack } from "@mui/material";

import PopularCourses from "../components/analytics/PopularCourses";
import Sales from "../components/analytics/Sales";
import UserCount from "../components/analytics/UserCount";
import VisitSite from "../components/analytics/VisitSite";


const Analytics = () => {
  

  
  const [value, setValue] = useState("1");




  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 3,
      }}
    >
    

      <Stack
        width="90%"
        direction={{ xs: "column", md: "row" }}
      
        gap={{ xs: 1, sm: 2, md: 4 }}
      >
        <UserCount chartWidth={800} boxWidth="60%" />
        <VisitSite chartWidth={450} boxWidth="40%" />
      </Stack>

      <Stack
        width="90%"
        direction={{ xs: "column", md: "column" }}
        mt={10}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Sales chartWidth={1200} boxWidth="100%" />
        <PopularCourses chartWidth={1200} boxWidth="100%" />
      </Stack>
    </Box>
  );
};

export default Analytics;
