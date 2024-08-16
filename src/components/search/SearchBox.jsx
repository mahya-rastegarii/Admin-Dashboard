
import { Search } from '@mui/icons-material'
import { alpha, InputBase, Paper, Stack } from '@mui/material'
import React, { useState } from 'react'

import { useTranslation } from 'react-i18next'
import { useAppContext } from '../../context/app/app-context'

const SearchBox = ({handleSearch, placeholderText}) => {

 const { themeColor, mode } =useAppContext()

 const {t} = useTranslation();



const bgColor = mode.palette.boxBg;
const borderColor = mode.palette.borderColor;
 const iconColor = themeColor.palette.primary.dark;
 const typography = mode.palette.typography;

  const [searchInput, setSearchInput]= useState('')

 const searchValue= () => {
  
  handleSearch(searchInput)
 }
  return (
    <Stack direction="row"  spacing={1}   sx={{ border:` 1px solid ${borderColor}`, borderRadius: 1, display:"flex", alignItems:"center", paddingX:1, backgroundColor:bgColor}}>
       {/* <IconButton aria-label="search"> */}
        <Search sx={{ color: typography}}/>
      {/* </IconButton> */}
             <InputBase
             value={searchInput}
        placeholder= {placeholderText}
        
        sx={{color: typography}}
        onChange={(event) => setSearchInput(event.target.value)}
        onKeyUp={searchValue}
      />
      
       </Stack>
  )
}

export default SearchBox