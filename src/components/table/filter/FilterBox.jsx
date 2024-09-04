import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import { FilterList } from "@mui/icons-material";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../context/app/app-context";
import { supabase } from "../../../core/createClient";
import MenuComponent from "../../menu/MenuComponent";
import MenuContainer from "../../menu/MenuContainer";

const FilterBox = ({ setCoursesData, setLoading }) => {
 

  const { language, mode } = useAppContext();

  const { t } = useTranslation();

  const typography = mode.palette.typography;
  const borderColor = mode.palette.borderColor;
  const boxBg = mode.palette.boxBg;

  const [anchorEl, setAnchorEl] = useState(null);
  const [filterData, setFilterData] = useState();

  const data = [
    t("filter.status.all"),
    t("filter.status.presell"),
    t("filter.status.completed"),
    t("filter.status.inProgress"),
  ];

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const filterHandler = async () => {
    const columnStatus = language ==='en'? "statusEn" : "statusFa" 
    setLoading(true);
    if (filterData !== t("filter.status.all")) {
      const { data, error } = await supabase
        .from("course")
        .select("*")
        .eq(columnStatus, filterData)
        .order("lastUpdate", { ascending: false });

     
      setCoursesData(data);
    } else {
      setCoursesData(null);
    }

    handleCloseMenu();
    setLoading(false);
  };

  
  const filter = language === "fa" ? "همه" : "All";

  useEffect(() => {
    setFilterData(filter);
  }, [language]);


  return (
    <Box sx={{ border: `1px solid ${borderColor}`, borderRadius: 2 }}>
      <IconButton
        aria-label="Filter"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{
          "&:hover": {
            backgroundColor : boxBg,
          }
        }}
      >
        <FilterList sx={{ fontSize: 27, color: typography }} />
        <Typography variant="body2" component="span" sx={{ color: typography }}>
          {t("filter.filterTitle")}{" "}
          {filterData !== filter ? "*(" + filterData + ")" : ""}
        </Typography>
      </IconButton>
      <MenuComponent anchorEl={anchorEl} handleCloseMenu={handleCloseMenu}>
       
        <Box
          display="flex"
          sx={{
            padding: 2,
            color: typography,
            direction: language === "fa" ? "rtl" : "ltr",
          }}
          alignItems="center"
          gap={1}
        >
          <Typography>{t("filter.status.title")}</Typography>
          <Box>
            <FormControl
              variant="standard"
              sx={{
                m: 1,
                minWidth: 120,
                " & .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper": {
                  backgroundColor: boxBg,
                },
              }}
            >
              <Box sx={{ borderBottom: " 1px solid" }}>
                <MenuContainer
                  menuItem={data}
                  selectedItem={filterData}
                  setSelectedItem={setFilterData}
                />
              </Box>
            </FormControl>
          </Box>
        </Box>
        <Stack
          sx={{ marginX: 2 }}
          alignItems="center"
          justifyContent="center"
          direction="row"
        >
          <Button
            variant="contained"
            size="small"
            color="success"
            onClick={filterHandler}
          >
            {t("filter.filterBtn")}
          </Button>
        </Stack>
      </MenuComponent>
    </Box>
  );
};

export default FilterBox;
