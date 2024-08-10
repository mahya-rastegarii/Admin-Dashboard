import { Box, MenuItem, Select } from "@mui/material";
import { useThemeContext } from "../../../context/theme/ThemeContext";

import MenuContainer from "../../menu/MenuContainer";
import "../tableStyle.css";

export const StatusFilter = ({ filterData, setFilterData }) => {
  const data = ["none", "not Started", "completed", "in Progress"];
  const handleChange = (event) => {
    setFilterData(event.target.value);
  };

  const { darkMode, theme } = useThemeContext();
  const boxBg = theme.palette.mode.boxBg;
  const typography = theme.palette.mode.typography;
  const borderColor = theme.palette.mode.borderColor;

  return (
    <MenuContainer menuItem={data} selectedItem={filterData} setSelectedItem={setFilterData} />
   
  
  );
};

// export const OtherFilter = () => {

//   const [operator, setOperator] =useState("<")

//     const handleChange = (event) => {
//         setOperator(event.target.value);
//       };
//     return  <Stack direction="row" alignItems="center" spacing={2} >
//     <Select
//    value={operator}
//    size="small"
//    onChange={handleChange}
//    displayEmpty
//    inputProps={{ "aria-label": "Without label" }}
//  >
//    {
//    ["<", ">", "="].map((item, index) => (
//    <MenuItem key={index} value={item}>{item}</MenuItem>

//  ))
// }
//  </Select>
//  <OutlinedInput
//             id="event-title"
//             size="small"
//             width={12}
//             type="number"
//             // placeholder="1"
//             // aria-describedby="outlined-weight-helper-text"
//           />
//  </Stack>

// }
// export const StudentFilter = () => {

// }
// export const TimeFilter = () => {

// }
