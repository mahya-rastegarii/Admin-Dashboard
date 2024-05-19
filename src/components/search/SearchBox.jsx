
import { Search } from '@mui/icons-material'
import { InputBase, Paper, Stack } from '@mui/material'
import React from 'react'

const SearchBox = () => {
  return (
    <Stack direction="row"  spacing={1} elevation={4}   sx={{boxShadow:" 0 2px #fafafa" , border:"1px solid #eee", borderRadius:3, display:"flex", alignItems:"center", paddingX:1 }}>
       {/* <IconButton aria-label="search"> */}
        <Search color="#eee"/>
      {/* </IconButton> */}
             <InputBase
        placeholder="Search ..."
        
      />
      
       </Stack>
  )
}

export default SearchBox