import { MenuItem, OutlinedInput, Select, Stack, TextField } from "@mui/material"
import { useState } from "react";

export const StatusFilter = () => {

    const [filterData, setFilterData]= useState("completed")
const data = ["not Started", "completed", "in Progress" ]
    const handleChange = (event) => {
        setFilterData(event.target.value);
      };
 return  <Select
 value={filterData}
 size="small"
 onChange={handleChange}
 displayEmpty
 inputProps={{ "aria-label": "Without label" }}
>
 {data.map( (item, index) => (

 <MenuItem key={index} value={item}>
 {item}
 </MenuItem>

 ))}
 
</Select>
};


export const OtherFilter = () => {

  const [operator, setOperator] =useState("<")

    const handleChange = (event) => {
        setOperator(event.target.value);
      };
    return  <Stack direction="row" alignItems="center" spacing={2} >
    <Select
   value={operator}
   size="small"
   onChange={handleChange}
   displayEmpty
   inputProps={{ "aria-label": "Without label" }}
 >
   {
   ["<", ">", "="].map((item, index) => (
   <MenuItem key={index} value={item}>{item}</MenuItem>
 
 ))
}
 </Select>
 <OutlinedInput
            id="event-title"
            size="small"
            width={12}
            type="number"
            // placeholder="1"
            // aria-describedby="outlined-weight-helper-text"
          />
 </Stack>

}
// export const StudentFilter = () => {

// }
// export const TimeFilter = () => {

// }