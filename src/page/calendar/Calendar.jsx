import enLocale from "@fullcalendar/core/locales/en-au";
import faLocale from "@fullcalendar/core/locales/fa";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import { Box, Paper, styled } from "@mui/material";
import React, { useState } from "react";
import AddEvent from "../../components/calendar/AddEvent";
import { useModalContext } from "../../context/modal/ModalContext";
// import {makeStyles} from '@mui/styles'
// import RemoveEvent from "../components/course/RemoveEvent";

import RemoveComponent from "../../components/remove/RemoveComponent";
import { useThemeContext } from "../../context/theme/ThemeContext";
import "./calendar.css";

const Calendar = () => {
  const { theme } = useThemeContext();
  const boxBgColor = theme.palette.mode.boxBg;
  const typography = theme.palette.mode.typography;
  const themeColor = theme.palette.primary.main;

  const [event, setEvent] = useState([
    {
      id: 1,
      title: "test1",
      start: "2024-05-02",
      end: "2024-05-02",
      color: "red",
    },
    {
      id: 2,
      title: "test2",
      start: "2024-06-02",
      end: "2024-06-04",
      color: "blue",
    },
    {
      id: 3,
      title: "test3",
      start: "2024-06-04",
      end: "2024-06-06",
      color: "green",
    },
  ]);
  const [language, setLanguage] = useState(enLocale);

  const [modal, setModal] = useState("");

  const [date, setDate] = useState();
  const { setOpen } = useModalContext();
  const [remove, setRemove] = useState(0);

  const CalendarEl = styled(FullCalendar)(({ theme }) => ({

    
    ".fc.fc-button-primary": {
      backgroundColor: theme.palette.grey[200],
    },
    // ".fc .fc-view-harness":{
    //   overflow:"scroll",
    // },
    // ".fc-scrollgrid-sync-inner" :{
    //   width:"35px",
    // },
  }));

  // const addEventToCalendar = () => {

  // let testText =  prompt('Enter a title');
  // let testStartDate =  prompt('Enter a Start Date in YYYY-MM-DD format');
  // let testEndDate =  prompt('Enter a End Date in YYYY-MM-DD format');
  // let testColor = prompt("Enter BackgroundColor")
  // let newItem=  { title:testText, start: testStartDate, end:testEndDate, color: testColor}
  // // setEvent({...event}, newItem )

  // setEvent( prevEvent => [...prevEvent, newItem])

  //  }

  //  const makeStyle = makeStyles( {
  //   root : {
  //    '& .fc.fc-button-primary ': {

  //       backgroundColor: "#fafafa"
  //      }
  //     }

  //  })

  // const classes = makeStyle()

  const removeHandler = () => {
    const newEventList = event.filter((item) => item.id !== remove);

    setEvent(newEventList);

    setOpen(false);
    //  setRemove(false)
  };

  console.log("colorTheme", themeColor);
  const classNameTheme =
    themeColor == "#009688"
      ? "teal"
      : themeColor == "#ffc107"
      ? "amber"
      : themeColor == "#cddc39"
      ? "lime"
      : themeColor == "#e91e63"
      ? "pink"
      : themeColor == "#00bcd4"
      ? "cyan"
      : themeColor == "#9c27b0"
      ? "purple"
      : "";

      // const toolbar = xs ? {
      //   start: "title addEvent",
      //   center: "dayGridMonth,dayGridWeek,dayGridDay ",
      //   end: "today prev,next",
      // }: md ? {
      //   start: "dayGridMonth,dayGridWeek,dayGridDay",
      //   center: "title",
      //   end: "addEvent today prev,next",
      // } : {}
  return (
    <Box
      component={Paper}
      elevation={3}
      p={3}
      sx={{ backgroundColor: boxBgColor, borderRadius: 2, color: typography,  }}
    >
      <Box className={classNameTheme} sx={{ 
        
          "& .fc .fc-toolbar":{
            flexDirection:{xs:"column", md:"row"}

          }
       
       }}>
        {modal === "removeEvent" ? (
          // <RemoveEvent setEvent={setEvent} event={event} remove={remove} />
          <RemoveComponent
            title="Remove Event"
            body="Remove Event?"
            clicked={removeHandler}
          />
        ) : modal === "addEvent" ? (
          <AddEvent setEvent={setEvent} event={event} date={date} />
        ) : null}

        <CalendarEl
          // className={classes.root}
         
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable={true}

          
          headerToolbar={{
          
           
            start:  "dayGridMonth,dayGridWeek,dayGridDay",
            center: "title",
            end: "addEvent today prev,next",

          } }
          // eventClick=  {(info) =>  deleteEvent(info.event.title)}
          eventClick={(info) => {
            const itemId = Number(info.event.id);

            // setModal(info.event.id)
            setModal("removeEvent");
            setOpen(true);
            setRemove(itemId);

            // if(remove){

            //   const newEventList = event.filter((item) => item.id !== info.event.id )

            //   setEvent(newEventList)

            // }

            //  setOpen(false)
            //  setRemove(false)
            //  alert("Delete Event" + info)
          }}
          locale={language}
          //  editable = {true}

          customButtons={{
            addEvent: {
              text: language === faLocale ? "افزودن رویداد" : "addEvent",
              click: () => {
                setModal("addEvent");
                setDate(null);
                setOpen(true);
              },
            },
          }}
          // dateClick={ (info) =>  alert('clicked ' + info.dateStr)}

          select={(info) => {
            {
              setModal("addEvent");
              setDate(info.startStr);
              setOpen(true);
            }
          }}
          // weekends={false}/
          eventColor="green"
          events={event}
        />
      </Box>
    </Box>
  );
};

export default Calendar;
