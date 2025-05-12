
import React from 'react';

import FullCalendar from '@fullcalendar/react';
import enLocale from "@fullcalendar/core/locales/en-au";
import faLocale from "@fullcalendar/core/locales/fa";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

// import "./calendar.css";
import { Box, styled } from '@mui/material';
import { useAppContext } from '../../context/app/app-context';

const Calendar = ({setDate, setRemove, setOpen, setModal, events, setDateToday}) => {


  const {language }= useAppContext();
    const CalendarEl = styled(FullCalendar)(({ theme }) => ({

    
      
      }));
  return (
   
 
    <FullCalendar
   
 
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
    
    
  
    eventClick={(info) => {
      const itemId = Number(info.event.id);

    
      setModal("removeEvent");
      setOpen(true);
      setRemove(itemId);

      
    }}
    locale= { language === 'fa' ? faLocale : enLocale}
   

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
   

    select={(info) => {
      {
        setModal("addEvent");
        setDateToday(null)
        setDate(info.startStr);
        setOpen(true);
      }
    }}
   
    eventColor="green"
    events={events}
  />
  
  )
}

export default Calendar