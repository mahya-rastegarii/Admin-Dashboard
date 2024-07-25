
import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import { useThemeContext } from '../../context/theme/ThemeContext'

const NewUser = () => {

  const {theme } =useThemeContext()
  const typography = theme.palette.mode.typography

    const user =[
        {
          name:"Mahya rastegari",
          email:"mahya@gmail.com",
          avatar: "M",
          numberCourse: 0,
          data: "2024/3/1"
        },
        {
          name:"Mahya rastegari",
          email:"mahya@gmail.com",
          avatar: "M",
          numberCourse: 0,
          data: "2024/3/1"
        },
        {
          name:"Mahya rastegari",
          email:"mahya@gmail.com",
          avatar: "M",
          numberCourse: 0,
          data: "2024/3/1"
        },
        {
          name:"Mahya rastegari",
          email:"mahya@gmail.com",
          avatar: "M",
          numberCourse: 0,
          data: "2024/3/1"
        },
        {
          name:"Mahya rastegari",
          email:"mahya@gmail.com",
          avatar: "M",
          numberCourse: 0,
          data: "2024/3/1"
        }
       
      ]


  return (

    <Box 
    // width="100%"
    sx={{ width:"100%", overflow: {sx:"scroll", md:"hidden"}}}
    //  overflow= "scroll"
     >
    <List display="flex"  sx={{ width: '100%', padding:0 }}>
  
  {
   user.map( item => (
     <>
   
     <ListItem key={item.name} sx={{ paddingX:2}} alignItems="center"  >
        <ListItemAvatar>
          <Avatar > {item.avatar} </Avatar>
        </ListItemAvatar>
        <Stack
         width="100%"
         direction={{sx:"column", sm:"row"}}
         spacing={3}>

        <ListItemText
          primary={

            <Typography
            sx={{ display: 'inline', color: typography }}
            component="span"
            variant="body1"
            color= "black"
            
          >
           {item.name}
          </Typography>
          }

          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body3"
                color="gray"
              >
               {item.email}
              </Typography>
            
              {/* {"-Attended courses"} */}
            </>
          }
        />
      <Typography  
    component="span"
   
                variant="body3"
                sx={{color: typography, }}>
        {
            item.data
        }
      </Typography>

        </Stack>
      
      
      </ListItem>
     
      <Divider />
     </>
   ))
  }
      
    
    </List>
    </Box>
  )
}

export default NewUser