import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

import { useAppContext } from "../../context/app/app-context";

const NewUser = ({ newUser }) => {
  const { language, mode, themeColor } = useAppContext();

  const typography = mode.palette.typography;
  const borderColor = mode.palette.borderColor;

  return (
    <Box
    
      sx={{ width: "100%", overflow: { sx: "scroll", md: "hidden" } }}
  
    >
      <List display="flex" sx={{ width: "100%", padding: 0 }}>
        {newUser.map((item) => (
          <Box key={item.id}>
            <ListItem
              sx={{
                paddingX: 2,
                textAlign: language === "fa" ? "right" : "left",
              }}
              alignItems="center"
            >
              <ListItemAvatar>
                <Avatar> {item.userName?.slice(0, 1)} </Avatar>
              </ListItemAvatar>
              <Stack
                width="100%"
                alignItems= {{xs:"flex-start" , md:"center"}}
                direction={{ xs: "column", sm: "row" }}
                gap={1}
              >
                <ListItemText
                  primary={
                    <Typography
                      sx={{ display: "inline", color: typography }}
                      component="span"
                      variant="body1"
                      color="black"
                    >
                      {language === "fa" ? item.fullNameFa : item.fullNameEn}
                    </Typography>
                  }
                  secondary={
                    <Box>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body3"
                        color="gray"
                      >
                        {item.email}
                      </Typography>
                    </Box>
                  }
                />
                <Typography
                  component="span"
                  variant="body3"
                  sx={{ color: typography }}
                >
                  {item.date}
                </Typography>
              </Stack>
            </ListItem>

            <Divider sx={{backgroundColor: borderColor}}/>
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default NewUser;
