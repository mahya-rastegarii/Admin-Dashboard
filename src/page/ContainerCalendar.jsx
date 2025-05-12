import { alpha, Box, Paper, styled } from "@mui/material";
import React, { Suspense, useState } from "react";
import AddEvent from "../components/calendar/AddEvent";
import { useModalContext } from "../context/modal/ModalContext";

import RemoveComponent from "../components/remove/RemoveComponent";

import Calendar from "../components/calendar/Calendar";

// import "../components/calendar/calendar.css";
import { supabase } from "../core/createClient";

import { useTranslation } from "react-i18next";
import { Await, defer, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoadComponent from "../components/Loading/LoadComponent";
import { useAppContext } from "../context/app/app-context";

const ContainerCalendar = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  const { mode, themeColor: customColor } = useAppContext();

  const { t } = useTranslation();

  const boxBgColor = mode.palette.boxBg;
  const typography = mode.palette.typography;
  const themeColorMain = customColor.palette.primary.main;
  const themeColorDark = customColor.palette.primary.dark;
  const themeColorLight = alpha(themeColorMain, 0.2);
  const borderColor =alpha(themeColorDark, 0.6);
  const [event, setEvent] = useState([]);
 
  const [modal, setModal] = useState("");
  const [date, setDate] = useState();
  const [dateToday, setDateToday] = useState();

  const { setOpen } = useModalContext();

  const [remove, setRemove] = useState(0);

  const removeHandler = async () => {
   
    const toastId = toast.loading(t("promise.pending"));

    setOpen(false);

    try{

      const {data, error} = await supabase.from("event").delete().eq("id", remove);
      if(error){
        throw error;
      } else{
        console.log("CalendarDataDelete", data)
        toast.update(toastId, {
                    render:t("promise.success"),
                    type: "success",
                    isLoading: false,
                    autoClose: 3000, 
                  });

                  const url = new URL(window.location.href);
                  navigate(url.pathname);
                
      }
    } catch(err){
      toast.update(toastId, {
        render:  t("promise.error"),
        type: "error",
        isLoading: false,
        autoClose: 5000, 
      });
    }

  };

  // const classNameTheme =
  //   themeColorMain == "#009688"
  //     ? "teal"
  //     : themeColorMain == "#ffc107"
  //     ? "amber"
  //     : themeColorMain == "#cddc39"
  //     ? "lime"
  //     : themeColorMain == "#e91e63"
  //     ? "pink"
  //     : themeColorMain == "#00bcd4"
  //     ? "cyan"
  //     : themeColorMain == "#9c27b0"
  //     ? "purple"
  //     : "";

  const BoxContainer = styled(Box)(({ theme }) => ({
 
    "& .fc .fc-view-harness": {
    
   [theme.breakpoints.down('sm')]: {
    height:"400px !important",
   },
  //  overflow: { xs: "scroll", md: "hidden" },
  }

  }));
  const insertEvent = async (newData) => {

    const toastId = toast.loading(t("promise.pending"));

    try{

      const {data, error} =await supabase.from("event").insert(newData).select("*");
      if(error){
        throw error;
      }else{
        console.log("CalendarData", data)
        toast.update(toastId, {
                    render:t("promise.success"),
                    type: "success",
                    isLoading: false,
                    autoClose: 3000, 
                  });

                  const url = new URL(window.location.href);
                  navigate(url.pathname);
                }
    } catch(err){
      toast.update(toastId, {
        render:  t("promise.error"),
        type: "error",
        isLoading: false,
        autoClose: 5000, 
      });
    }

  

   
  };

  return (
    <>
      {modal === "removeEvent" ? (
        <RemoveComponent
          title={t("calendar.removeEvent.titleModal")}
          body={t("calendar.removeEvent.text")}
          clicked={removeHandler}
        />
      ) : modal === "addEvent" ? (
        <AddEvent
          setEvent={setEvent}
          insertEvent={insertEvent}
          event={event}
          date={date}
          dateToday={dateToday}
        />
      ) : null}
      <Box
        component={Paper}
        elevation={3}
        // p={3}
        sx={{
          backgroundColor: boxBgColor,
          borderRadius: 2,
          color: typography,
          marginX: { xs: 2, md: 4 },
        }}
      >
        <BoxContainer
          // className={classNameTheme}
          sx={{
            
            "& .fc .fc-button-primary" :{
              backgroundColor: themeColorMain,
              borderColor:borderColor,
              color: '#fff !important',
              outline: 'none',
            },

            "& .fc .fc-button-active" :{
              backgroundColor: `${themeColorDark} !important`,
              borderColor: themeColorDark,
            },
            "& .fc .fc-button-primary:active" :{
            backgroundColor: `${themeColorDark} !important`,
            
            },
            "& .fc .fc-daygrid-day.fc-day-today" :{

              backgroundColor: themeColorLight,
            },
            "& .fc .fc-toolbar": {
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 3, md: 0 },
              margin: 4,
            },

            "& .fc .fc-view-harness": {
              overflow: { xs: "scroll", md: "hidden" },
              // height: {xs:"400px !important", sm:"600px !important", md:"1190px !important",},
            },

            "& .fc .fc-view-harness-active > .fc-view": {
              width: { xs: "650px", sm: "100%" },
              // height:"400px",
              // overflow: "scroll",
            },
            "& .fc-daygrid-block-event .fc-event-title": {
              overflow: "auto",
            },

            "& .fc .fc-daygrid-day-frame": {
              cursor: "cell",
            },
            "& .fc-h-event .fc-event-title-container": {
              cursor: "pointer",
            },

            ".fc-toolbar-chunk": {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },

            ".fc .fc-toolbar-title": {
              // display: 'inline-block',
              // margin: 0,
              fontSize: {xs:'1.1em', sm:'1.5em', md:'1.75em'},
              marginX: { xs: 1, sm: 2, md: 3 },
              textAlign:"center",
            },
            ".fc .fc-prev-button , .fc .fc-next-button": {
              backgroundColor: "transparent",
              border: "none",
              margin: 0,
              padding: 0,
            },
            ".fc  .fc-prev-button:active  , .fc .fc-next-button:active": {
              backgroundColor: "transparent !important",
              border: "none !important",
              color: themeColorDark,
            },
            ".fc .fc-prev-button span , .fc .fc-next-button span": {
              color: themeColorMain,
              //  width:12,
            },
            ".fc .fc-prev-button .fc-icon , .fc .fc-next-button .fc-icon": {
              fontSize: "2em",
            },

          }}
        >
          <Suspense fallback={<LoadComponent />}>
            <Await resolve={data.events}>
              {(loadEvents) => (
                <Calendar
                  setModal={setModal}
                 
                  setOpen={setOpen}
                  setDate={setDate}
                  setDateToday={setDateToday}
                  setRemove={setRemove}
                  events={loadEvents}
                />
              )}
            </Await>
          </Suspense>
        </BoxContainer>
      </Box>
    </>
  );
};

export async function eventLoader() {
  return defer({
    events: fetchEvent(),
  });
}

const fetchEvent = async () => {
  let { data, error } = await supabase.from("event").select("*");

 
  return data;
};

export default ContainerCalendar;
