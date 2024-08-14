
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import { Box, Paper, styled } from "@mui/material";
import React, { Suspense, useEffect, useState } from "react";
import AddEvent from "../../components/calendar/AddEvent";
import { useModalContext } from "../../context/modal/ModalContext";
// import {makeStyles} from '@mui/styles'
// import RemoveEvent from "../components/course/RemoveEvent";

import RemoveComponent from "../../components/remove/RemoveComponent";
import { useThemeContext } from "../../context/theme/ThemeContext";
import Calendar from "./Calendar";

import "./calendar.css";
import { supabase } from "../../core/createClient";

import LoadComponent from "../../components/Loading/LoadComponent";
import { Await, useLoaderData, defer, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const ContainerCalendar = () => {

  const data = useLoaderData();
const navigate = useNavigate()

  const { theme } = useThemeContext();

  const {t} =useTranslation();

  
  const boxBgColor = theme.palette.mode.boxBg;
  const typography = theme.palette.mode.typography;
  const themeColor = theme.palette.primary.main;


  const [event, setEvent] = useState([]);
  // const [language, setLanguage] = useState(enLocale);
  const [modal, setModal] = useState("");
  const [date, setDate] = useState();
  const [dateToday, setDateToday]= useState();

  const { setOpen } = useModalContext();
  
  const [remove, setRemove] = useState(0);

  

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

  

  const removeHandler = async () => {
    // const newEventList = event.filter((item) => item.id !== remove);
    setOpen(false)
     const response =  supabase
     .from("event")
    .delete()
     .eq('id', remove)
   
     toast.promise(
      response,
      {
        pending: t('promise.pendingDelete'),
        success: {

          render() {
           
           const url = new URL(window.location.href)
           navigate(url.pathname);

              return t('promise.success')
          }
        },
        error: {
          render() {
            return t('promise.error');
          }
        }
      },

      
    )
    //  if( response.status === 204) {
    //   const url = new URL(window.location.href)
    //   navigate(url.pathname);
     
      
    //  };



   
    //  setRemove(false)
  };

 

  // console.log("colorTheme", themeColor);
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


      const insertEvent = async (newData) =>{
        const response =  supabase.from('event')
        .insert(newData)
        .select('*')
         


        toast.promise(
          response,
          {
            pending: t('promise.pending'),
            success: {
    
              render() {
                    const url = new URL(window.location.href)
                     navigate(url.pathname);
    
                  return t('promise.success')
              }
            },
            error: {
              render() {
                return t('promise.error')
              }
            }
          },
    
        
        )
      //   if(data){
      //     const url = new URL(window.location.href)
      // navigate(url.pathname);
        
      //   }

        console.log( 'events', data)
        // setEvent( prevEvent => [...prevEvent, events])
        // fetchEvent()
       
      };

      // useEffect(() => {
      //   // setModal("backdrop")
      //   fetchEvent();
      //   // setOpen(false)
      // }, [])

  return (
<>
    
   
    {
      modal === "backdrop" ?
       <LoadingBackdrop/> 
       : modal === "removeEvent" ? (
        // <RemoveEvent setEvent={setEvent} event={event} remove={remove} />
        <RemoveComponent
          title={t('calendar.removeEvent.titleModal')}
          body={t('calendar.removeEvent.text')}
          clicked={removeHandler}
        />
      ) : modal === "addEvent" ? (
        <AddEvent setEvent={setEvent} insertEvent={insertEvent} event={event} date={date} dateToday={dateToday} />
      ) : null}
    <Box
      component={Paper}
      elevation={3}
      p={3}
      sx={{ backgroundColor: boxBgColor, borderRadius: 2, color: typography,  }}
    >
      <Box className={classNameTheme} sx={{ 
        
          "& .fc .fc-toolbar":{
            flexDirection:{xs:"column", md:"row"}

          },
          "& .fc .fc-daygrid-day-frame" :{
            cursor:"cell",
          },
          "& .fc-h-event .fc-event-title-container": {
            cursor:"pointer",
          }
       
       }}>
      
     <Suspense fallback={<LoadComponent/>}>
     <Await resolve={data.events}>

    
       {
        (loadEvents) => <Calendar setModal={setModal} setOpen={setOpen} setDate={setDate} setDateToday={setDateToday} setRemove={setRemove} events={loadEvents}/>
       }
        </Await>
    </Suspense>
      </Box>
    </Box>
    </>
  );
};

export async function eventLoader() {
  return defer({
    events: fetchEvent()
  })
}

const fetchEvent = async() =>{
   
  let { data, error } = await supabase
  .from('event')
  .select('*')

  //  const events = {
  //   id: id,
  //   title: title,
  //   start:startDate,
  //   end: endDate,
  //   color:color,
  //  }

  // setEvent(events);
  return data

} 

export default ContainerCalendar;
