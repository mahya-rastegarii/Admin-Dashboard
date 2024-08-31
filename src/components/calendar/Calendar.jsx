
import React from 'react';

import FullCalendar from '@fullcalendar/react';
import enLocale from "@fullcalendar/core/locales/en-au";
import faLocale from "@fullcalendar/core/locales/fa";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import "./calendar.css";
import { Box, styled } from '@mui/material';
import { useAppContext } from '../../context/app/app-context';

const Calendar = ({setDate, setRemove, setOpen, setModal, events, setDateToday}) => {


  const {language }= useAppContext();
    const CalendarEl = styled(FullCalendar)(({ theme }) => ({

    
        ".fc.fc-button-primary": {
          backgroundColor: theme.palette.grey[200],
        },
        // ".fc.fc-toolbar-title": {
        //   display: "inline"
        // }
        // ".fc .fc-view-harness":{
        //   overflow:"scroll",
        // },
        // ".fc-scrollgrid-sync-inner" :{
        //   width:"35px",
        // },
      }));
  return (
   
 
    <CalendarEl
   
 
    plugins={[dayGridPlugin, interactionPlugin]}
    initialView="dayGridMonth"
    selectable={true}

    
    headerToolbar={
     {
       start: "dayGridMonth,dayGridWeek,dayGridDay",
      center: "prev title next",
      end: "today addEvent"
    }
     }
    
    
    // eventClick=  {(info) =>  deleteEvent(info.event.title)}
    eventClick={(info) => {
      const itemId = Number(info.event.id);

      // setModal(info.event.id)
      setModal("removeEvent");
      setOpen(true);
      setRemove(itemId);

      
    }}
    locale= { language === 'fa' ? faLocale : enLocale}
    //  editable = {true}

    customButtons={{
      addEvent: {
        text: language === 'fa' ? "افزودن رویداد" : "addEvent",
        click: () => {
          const date = new Date()
          const today = date.toISOString().split('T')[0];
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