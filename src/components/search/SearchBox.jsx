
import { Search } from '@mui/icons-material'
import { alpha, InputBase, Paper, Stack } from '@mui/material'
import React, { useState } from 'react'
import { useThemeContext } from '../../context/theme/ThemeContext'

const SearchBox = ({handleSearch}) => {

 const { theme } =useThemeContext()
//  const bgColor = theme.palette.mode.bg

const bgColor = theme.palette.mode.boxBg;
const borderColor = theme.palette.mode.borderColor;
 const iconColor = theme.palette.primary.dark;
 const typography = theme.palette.mode.typography;

  const [searchInput, setSearchInput]= useState('')

 const searchValue= () => {
  
  handleSearch(searchInput)
 }
  return (
    <Stack direction="row"  spacing={1}   sx={{ border:` 1px solid ${borderColor}`, borderRadius: 1, display:"flex", alignItems:"center", paddingX:1, backgroundColor:bgColor}}>
       {/* <IconButton aria-label="search"> */}
        <Search sx={{ color: iconColor}}/>
      {/* </IconButton> */}
             <InputBase
             value={searchInput}
        placeholder="Search ..."
        
        sx={{color: typography}}
        onChange={(event) => setSearchInput(event.target.value)}
        onKeyUp={searchValue}
      />
      
       </Stack>
  )
}

export default SearchBox