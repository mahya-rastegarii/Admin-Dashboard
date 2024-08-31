import { Box, Paper } from "@mui/material";
import React, { Suspense, useState } from "react";
import AddEvent from "../../components/calendar/AddEvent";
import { useModalContext } from "../../context/modal/ModalContext";
// import {makeStyles} from '@mui/styles'
// import RemoveEvent from "../components/course/RemoveEvent";

import RemoveComponent from "../../components/remove/RemoveComponent";

import Calendar from "../../components/calendar/Calendar";

import "../../components/calendar/calendar.css";
import { supabase } from "../../core/createClient";

import { useTranslation } from "react-i18next";
import { Await, defer, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoadComponent from "../../components/Loading/LoadComponent";
import { useAppContext } from "../../context/app/app-context";

const ContainerCalendar = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  const { mode, themeColor: customColor } = useAppContext();

  const { t } = useTranslation();

  const boxBgColor = mode.palette.boxBg;
  const typography = mode.palette.typography;
  const themeColorMain = customColor.palette.primary.main;
  const themeColorDark = customColor.palette.primary.dark;

  const [event, setEvent] = useState([]);
  // const [language, setLanguage] = useState(enLocale);
  const [modal, setModal] = useState("");
  const [date, setDate] = useState();
  const [dateToday, setDateToday] = useState();

  const { setOpen } = useModalContext();

  const [remove, setRemove] = useState(0);

  const removeHandler = async () => {
    // const newEventList = event.filter((item) => item.id !== remove);
    setOpen(false);
    const response = supabase.from("event").delete().eq("id", remove);

    toast.promise(response, {
      pending: t("promise.pendingDelete"),
      success: {
        render() {
          const url = new URL(window.location.href);
          navigate(url.pathname);

          return t("promise.success");
        },
      },
      error: {
        render() {
          return t("promise.error");
        },
      },
    });
    //  if( response.status === 204) {
    //   const url = new URL(window.location.href)
    //   navigate(url.pathname);

    //  };

    //  setRemove(false)
  };
 

  const classNameTheme =
   themeColorMain == "#009688"
      ? "teal"
      : themeColorMain == "#ffc107"
      ? "amber"
      : themeColorMain == "#cddc39"
      ? "lime"
      : themeColorMain == "#e91e63"
      ? "pink"
      : themeColorMain == "#00bcd4"
      ? "cyan"
      : themeColorMain == "#9c27b0"
      ? "purple"
      : "";

  const insertEvent = async (newData) => {
    const response = supabase.from("event").insert(newData).select("*");

    toast.promise(response, {
      pending: t("promise.pending"),
      success: {
        render() {
          const url = new URL(window.location.href);
          navigate(url.pathname);

          return t("promise.success");
        },
      },
      error: {
        render() {
          return t("promise.error");
        },
      },
    });
    //   if(data){
    //     const url = new URL(window.location.href)
    // navigate(url.pathname);

    //   }

    console.log("events", data);
    // setEvent( prevEvent => [...prevEvent, events])
    // fetchEvent()
  };

  return (
    <>
      {modal === "backdrop" ? (
        <LoadingBackdrop />
      ) : modal === "removeEvent" ? (
        // <RemoveEvent setEvent={setEvent} event={event} remove={remove} />
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
        sx={{ backgroundColor: boxBgColor, borderRadius: 2, color: typography, marginX:{xs: 2, md: 4}}}
      >
        <Box
          className={classNameTheme}
          sx={{
            "& .fc .fc-toolbar": {
              flexDirection: { xs: "column", md: "row" },
              gap:{xs:3, md:0},
              margin:4,
            },

            "& .fc .fc-view-harness" :{
              overflow: {xs:"scroll" , md:"hidden"},
              // height: {xs:"400px !important", sm:"600px !important", md:"1190px !important"},
            },

            "& .fc .fc-view-harness-active > .fc-view":{
              width:{xs:"600px", sm:"100%"},
              // height:"400px",
              // overflow: "scroll",
            },
            "& .fc-daygrid-block-event .fc-event-title" :{
              overflow: "auto",
            },
          
            "& .fc .fc-daygrid-day-frame": {
              cursor: "cell",
            },
            "& .fc-h-event .fc-event-title-container": {
              cursor: "pointer",
            },

            ".fc-toolbar-chunk" :{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
            },

            ".fc .fc-toolbar-title" :{
              // display: 'inline-block',
              // margin: 0,
              marginX: {xs:1, sm:2, md:3},
            },
            ".fc .fc-prev-button , .fc .fc-next-button" :{
              backgroundColor:"transparent",
              border: 'none',
              margin: 0,
              padding:0 ,
            },
            ".fc  .fc-prev-button:active  , .fc .fc-next-button:active" :{
              backgroundColor:"transparent !important",
              border: 'none !important',
              color: themeColorDark,

            },
            ".fc .fc-prev-button span , .fc .fc-next-button span" :{
              color: themeColorMain,
            //  width:12,
            },
            ".fc .fc-prev-button .fc-icon , .fc .fc-next-button .fc-icon" :{
              fontSize: "2em",
            }
          }}
        >
          <Suspense fallback={<LoadComponent />}>
            <Await resolve={data.events}>
              {(loadEvents) => (
             
            
                <Calendar
               
                  setModal={setModal}
                  // headerCalendar={headerCalendar}
                  setOpen={setOpen}
                  setDate={setDate}
                  setDateToday={setDateToday}
                  setRemove={setRemove}
                  events={loadEvents}
                />
             
              
            
              )}
            </Await>
          </Suspense>
        </Box>
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

  //  const events = {
  //   id: id,
  //   title: title,
  //   start:startDate,
  //   end: endDate,
  //   color:color,
  //  }

  // setEvent(events);
  return data;
};

export default ContainerCalendar;
