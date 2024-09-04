import { Box, OutlinedInput, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ModalComponent from "../modal/ModalComponent";
import PaletteBox from "../box/PaletteBox";

import { useForm } from "react-hook-form";
import { useModalContext } from "../../context/modal/ModalContext";

import Form from "../form/Form";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../context/app/app-context";

const AddEvent = ({ date, dateToday, insertEvent }) => {
  const { themeColor, mode } = useAppContext();
  const { setOpen } = useModalContext()
  const {t} =useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const borderColor = mode.palette.borderColor;
  const typography = mode.palette.typography;
 

  
  const [eventColor, setEventColor] = useState("#009688");

 
  const addEventToCalendar = async (data) => {
    let { title, start, end } = data;
    const newData = {
      title,
      start: date ? date : start,
      end: end ? end : date,
      color: eventColor,
    };

    insertEvent(newData);

    reset();
    setOpen(false);
  };

  const cancelSubmit = () => {
    setOpen(false);
    reset();
  };

  return (
    <ModalComponent title={t('calendar.addEvent.titleModal')} closeForm={cancelSubmit}>
      <Form
        align={{xs:"center", md:"flex-start"}}
        titleButton= {t('calendar.addEvent.addBtn')}
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
          <Stack direction={{ xs: "column", md:"row"}} alignItems={{ sm:"flex-start", md:"center"}} gap={{xs:1, md:3}}>
            <Typography variant="body1">{t('calendar.addEvent.titleText')} :</Typography>
            <Stack direction="column">
              <OutlinedInput
                id="event-title"
                size="small"
                {...register("title", {
                  required: t('calendar.addEvent.required.titleTextError')
                })}

              
              />
              {errors.title && (
                <Typography sx={{ color: "red" }}>
                  {errors.title?.message}
                </Typography>
              )}
            </Stack>
          </Stack>

          <Stack
            direction="column"
            sx={{ marginTop: 4 }}
            alignItems="flex-start"
            spacing={2}
          >
            <Stack direction={{ xs: "column", md:"row"}} alignItems={{ sm:"flex-start", md:"center"}} gap={{xs:1, md:3}}>
            

              {date ? (
                <>
                 <Typography variant="body1">{t('calendar.addEvent.date')} :</Typography>
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
                </>
              ) : (
                <>
                  <Typography variant="body1">{t('calendar.addEvent.startDate')} :</Typography>
                  <OutlinedInput
                    id="event-startDate"
                    size="small"
                    type="date"
                    {...register("start")}
                    defaultValue={dateToday}
                   
                  />
                </>
              )}
            </Stack>

            {dateToday && (
              <Stack direction={{ xs: "column", md:"row"}} alignItems={{ sm:"flex-start", md:"center"}} gap={{xs:1, md:3}}>
             
                <Typography variant="body1">{t('calendar.addEvent.endDate')} :</Typography>

                <OutlinedInput
                  id="event-endDate"
                  
                  size="small"
                  type="date"
                  {...register("end")}
                  defaultValue={dateToday}
                 
                />
              </Stack>
            )}
          </Stack>
        </Stack>
        <Box   display={{xs:"grid", md:"flex"}} justifyContent='center' alignItems="center"   gridTemplateColumns="repeat(3, 1fr)" mt={3}>
          <PaletteBox
          
            component="event"
            selectedColor={eventColor}
            setSelectedColor={setEventColor}
          />
        </Box>
       
      </Form>
    </ModalComponent>
  );
};

export default AddEvent;
