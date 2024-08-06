import { Box, OutlinedInput, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ModalComponent from "../modal/ModalComponent";
// import { PaletteMenu } from '../navbar/PaletteMenu';
import PaletteBox from "../box/PaletteBox";

import { useForm,  } from "react-hook-form";
import { useModalContext } from "../../context/modal/ModalContext";
import { useThemeContext } from "../../context/theme/ThemeContext";
import { supabase } from "../../core/createClient";
import Form from "../form/Form";

const AddEvent = ({ setEvent, event, date, dateToday, insertEvent }) => {
  const { theme } = useThemeContext();
  const { setOpen } = useModalContext();
  const { register, handleSubmit,  formState: { errors }, reset } = useForm();

  const borderColor = theme.palette.mode.borderColor;
  const typography = theme.palette.mode.typography;
  // const focusColor =theme.palette.primary.light;
  //   {
  //   defaultValues: {
  //     start: date ,
  //     end : date
  //   }
  // }

  // const themeColors = [teal[500], amber[500], lime[500], pink[500], cyan[500], purple[500]]
  const themeColors = [
    {
      id: 1,
      color: "#009688",
    },
    {
      id: 2,
      color: "#ffc107",
    },
    {
      id: 3,
      color: "#cddc39",
    },
    {
      id: 4,
      color: "#e91e63",
    },
    {
      id: 5,
      color: "#00bcd4",
    },
    {
      id: 6,
      color: "#9c27b0",
    },
  ];

  const [eventColor, setEventColor] = useState("#009688");

  // const {setOpen }= useModalContext()
  const addEventToCalendar = async (data) => {
    let { title, start, end } = data;
    const newData = {
      title,
      start: date ? date : start,
      end : end ? end : start,
      color: eventColor,
    };

    insertEvent(newData);
     
    reset();
    setOpen(false);
  };



  const cancelSubmit= () => {
    setOpen(false)
    reset()
  }

  return (
    <ModalComponent title="Add Event" closeForm={cancelSubmit}>
      <Form
        align="flex-start"
        titleButton=" Add "
        onSubmit={handleSubmit(addEventToCalendar)}
        cancelSubmit={cancelSubmit}
      >
        <Stack
          direction="column"
          alignItems="flex-start"
          spacing={3}
          sx={{
            "& label ": {
              color: typography,
              opacity: 0.6,
            },

            "& input ": {
              color: typography,
            },
            "& fieldset ": {
              borderColor: borderColor,
            },
          }}
        >
          <Stack direction="row" alignItems="center" spacing={3}>
            <Typography variant="body1">Text</Typography>
              <Stack direction="column">
            <OutlinedInput
              id="event-title"
              size="small"
              {...register("title", {required:" this Field Can't Empty..."})}
               
              // aria-describedby="outlined-weight-helper-text"
            />
            {
            errors.title && (
              <Typography sx={{color:"red"}}>
                {
                  errors.title?.message
                }
              </Typography>
            )
          }
          </Stack>
          </Stack>
      

            

          <Stack
            direction="column"
            sx={{ marginTop: 4 }}
            alignItems="flex-start"
            spacing={2}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body1">start Date</Typography>

              {date ? (
                <Typography
                  variant="body2"
                  sx={{
                    paddingX: 2,
                    paddingY: 1,
                    border: "1px solid #ccc",
                    borderRadius: 1,
                  }}
                >
                  {" "}
                  {date}{" "}
                </Typography>
              ) : (
                <OutlinedInput
                  id="event-startDate"
                  size="small"
                  type="date"
                  {...register("start")}
                  defaultValue={dateToday}
                  // aria-describedby="outlined-weight-helper-text"
                />
              )}
            </Stack>

           {

              dateToday &&  <Stack direction="row" spacing={1} alignItems="center">
              {/* <CheckBox /> */}
              <Typography variant="body1">end Date</Typography>

              <OutlinedInput
                id="event-endDate"
                // defaultValue={date || ''}
                size="small"
                type="date"
                {...register("end")}
              
                defaultValue={dateToday }
                // aria-describedby="outlined-weight-helper-text"
              />
            </Stack> 

           }
          </Stack>
        </Stack>
        <Box display="flex" mt={3}>
          <PaletteBox
            themeColors={themeColors}
            selectedColor={eventColor}
            setSelectedColor={setEventColor}
          />
        </Box>
        {/* <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={2} mt={5}>
    <Button variant="contained" color="success" onClick={ addEventToCalendar}> Add </Button> 
    <Button variant="contained" color="error" onClick={() => setOpen(false)}> Cancel</Button> 
 </Stack> */}
      </Form>
    </ModalComponent>
  );
};

export default AddEvent;
