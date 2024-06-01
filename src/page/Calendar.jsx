import React, {useEffect, useState} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin  from '@fullcalendar/interaction';
import faLocale from '@fullcalendar/core/locales/fa';
import enLocale from '@fullcalendar/core/locales/en-au';
import { useModalContext } from "../context/modal/ModalContext";
import AddEvent from "../components/calendar/AddEvent";
import ModalComponent from '../components/modal/ModalComponent'
import { styled, Typography } from "@mui/material";


const Calendar = () => {



  const [event, setEvent]=  useState([
    {id:1, title:"test1", start:"2024-05-02",end:"2024-05-02", color:"red"},
    {id:2, title:"test2", start:"2024-06-02",end:"2024-06-04", color:"blue"},
    {id:3, title:"test3", start:"2024-06-04",end:"2024-06-06", color:"green"},
  ])
  const [language, setLanguage]= useState(enLocale)

  const [ modal, setModal]= useState(false)

  const [date, setDate]= useState();
 const {setOpen}= useModalContext()

  
  const CalendarEl = styled(FullCalendar)(({theme}) => ({

    
  })) 

  const addEventToCalendar = () => {

    // let testText =  prompt('Enter a title');
    // let testStartDate =  prompt('Enter a Start Date in YYYY-MM-DD format');
    // let testEndDate =  prompt('Enter a End Date in YYYY-MM-DD format');
    // let testColor = prompt("Enter BackgroundColor")
    // let newItem=  { title:testText, start: testStartDate, end:testEndDate, color: testColor}
    // // setEvent({...event}, newItem )
    
    // setEvent( prevEvent => [...prevEvent, newItem])

    alert("add Event ... !")
   
   }


 const deleteEventToCalendar = (itemId) =>{
  
   const newEventList = event.filter((item) => item.id !== itemId)
   
   setEvent(newEventList)
   
  setOpen(false)
  

 }
 


  return (
    <div>

<ModalComponent  align="flex-start" Title={ modal ? "Remove Event" : "Add Event" } titleButton={ modal ? " Remove " : " Add "} clicked={ modal ? () => deleteEventToCalendar(2): addEventToCalendar }>
      {
        modal ?  <Typography variant="body1"> Remove Event? </Typography>
       : <AddEvent  setEvent={setEvent} date={date}/>
      }
      
      </ModalComponent>
      <CalendarEl

        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        headerToolbar={{
          start: "dayGridMonth,dayGridWeek,dayGridDay",
          center: "title",
          end: "addEvent today prev,next",
          
        }}


          // eventClick=  {(info) =>  deleteEvent(info.event.title)}
          eventClick= { (info) => {

            // setModal(info.event.id)
            setModal(true) 

            //  alert("Delete Event" + info)
            setOpen(true)
          }}
    
           
           
        

      locale= {language}
     
        //  editable = {true}

        customButtons={{
          addEvent: {
            text:  language === faLocale ? 'افزودن رویداد' : "addEvent" ,
            click: () => {

            setModal(false)
              setDate(null)
              setOpen(true)
            }
          },

        }}
          
        // dateClick={ (info) =>  alert('clicked ' + info.dateStr)}

        select ={(info) => 
          {
          {

          setModal(false)
          setDate(info.startStr)
         setOpen(true)
        }
        }
        }


        // weekends={false}/
        eventColor="green"
        events={ event}
        
      />
    </div>
  );
};

export default Calendar;
