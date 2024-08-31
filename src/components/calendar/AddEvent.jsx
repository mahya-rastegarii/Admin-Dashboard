import { Box, OutlinedInput, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ModalComponent from "../modal/ModalComponent";
// import { PaletteMenu } from '../navbar/PaletteMenu';
import PaletteBox from "../box/PaletteBox";

import { useForm } from "react-hook-form";
import { useModalContext } from "../../context/modal/ModalContext";

import Form from "../form/Form";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../context/app/app-context";

const AddEvent = ({ setEvent, event, date, dateToday, insertEvent }) => {
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

                // aria-describedby="outlined-weight-helper-text"
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
              <Typography variant="body1">{t('calendar.addEvent.startDate')} :</Typography>

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

            {dateToday && (
              <Stack direction={{ xs: "column", md:"row"}} alignItems={{ sm:"flex-start", md:"center"}} gap={{xs:1, md:3}}>
                {/* <CheckBox /> */}
                <Typography variant="body1">{t('calendar.addEvent.endDate')} :</Typography>

                <OutlinedInput
                  id="event-endDate"
                  // defaultValue={date || ''}
                  size="small"
                  type="date"
                  {...register("end")}
                  defaultValue={dateToday}
                  // aria-describedby="outlined-weight-helper-text"
                />
              </Stack>
            )}
          </Stack>
        </Stack>
        <Box   display={{xs:"grid", md:"flex"}} justifyContent='center' alignItems="center"   gridTemplateColumns="repeat(3, 1fr)" mt={3}>
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
