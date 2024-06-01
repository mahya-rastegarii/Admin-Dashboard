
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'

const NewUser = () => {

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

    <List display="flex"  sx={{ width: '100%', maxWidth: 500, padding:0 }}>
  
  {
   user.map( item => (
     <>
   
     <ListItem key={item.name} sx={{ paddingX:2}} alignItems="center" >
        <ListItemAvatar>
          <Avatar > {item.avatar} </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={

            <Typography
            sx={{ display: 'inline' }}
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
                color="gray">
        {
            item.data
        }
      </Typography>
      </ListItem>
     
      <Divider />
     </>
   ))
  }
      
    
    </List>
  )
}

export default NewUser