
import React from 'react';

import FullCalendar from '@fullcalendar/react';
import enLocale from "@fullcalendar/core/locales/en-au";
import faLocale from "@fullcalendar/core/locales/fa";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import "./calendar.css";
import { styled } from '@mui/material';

const Calendar = ({setDate, language, setRemove, setOpen, setModal, events, setDateToday}) => {

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
  return (
   

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
          const date = new Date()
          const today = date.toISOString().split('T')[0]
          setModal("addEvent");
          setDate(null);
          setDateToday(today)
          setOpen(true);
        
        },
      },
    }}
    // dateClick={ (info) =>  alert('clicked ' + info.dateStr)}

    select={(info) => {
      {
        setModal("addEvent");
        setDateToday(null)
        setDate(info.startStr);
        setOpen(true);
      }
    }}
    // weekends={false}/
    eventColor="green"
    events={events}
  />
  )
}

export default Calendar