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
        px={5}
        pt={5}
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
        mt={5}
        mb={3}
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
