import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Form = ({ children, align, titleButton, onSubmit, cancelSubmit }) => {
  const { t } = useTranslation();
  // const onSubmit = (data) =>{
  //     console.log(data)
  // }

  return (
    <form onSubmit={onSubmit}>
      <Box
        px={{xs: 2, md:5}}
        pt={{xs: 2, md:5}}
        pb={2}
        display="flex"
        flexDirection="column"
        gap={2}
        justifyContent="center"
        alignItems={align}
      >
        {children}
      </Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={2}
        mt={{xs: 2, md:5}}
        mb={{xs: 1, md:3}}
      >
        <Button variant="contained" color="success" type="submit">
          {" "}
          {titleButton}{" "}
        </Button>
        <Button variant="contained" color="error" onClick={cancelSubmit}>
          
         { t('cancelBtn')}
        </Button>
      </Stack>
    </form>
  );
};

export default Form;
