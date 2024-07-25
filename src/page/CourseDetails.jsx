import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider, Paper, Rating, Slider, Stack, Typography } from '@mui/material'
import React from 'react'
import JsPic from "../assets/img/images.png"
import { AccessTime, CalendarToday, Delete, Edit, Info, People, Person, Grade, Favorite, ExpandMore} from '@mui/icons-material'
const CourseDetails = () => {
  const Data = 
    {
      title: " Js",
      desc: " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      pic: JsPic,
      price: 2_000_000,
      student: 230,
   }

  const data1 =[
    {
      title:"Teacher",
      icon:<Person/>,
      content:"mahya Rastegari"
    },
    {
      title:"Time",
      icon:<AccessTime/>,
      content:"2 hours "
    },
    {
      title:"Last update",
      icon:<CalendarToday/>,
      content:"2024/2/3"
    },
    {
      title:"Status",
      icon:<Info/>,
      content:"Complate"
    },
    {
      title: "student",
      icon:<People/>,
      content: "236 user"
    },
    {
      title:"Favour",
      icon: <Favorite/>,
      content:<Rating
      name="half-rating-read"
      defaultValue={4.5}
      precision={0.5}
      readOnly
      size="large"
    />,
    },
   
  ]


  return (
    <Box>
          <Stack direction="row" spacing={5}  mb={4} >
            <Button variant="contained" color="success" startIcon={<Edit/>}>
              edit course
            </Button>
            <Button variant="contained" color="error" startIcon={<Delete/>}>
              delete course
            </Button>
          </Stack>
         <Box display="flex" flexDirection="column" gap={3} justifyContent="flex-start" >
        
          <img src={Data.pic} alt={Data.title} width="100%" height={400}  loading='lazy'/>
          <Typography variant="h3">
            {
              Data.title 
            }
            
          </Typography>
          <Typography variant="body1">
            {
              Data.desc
            }
          </Typography>

           <Box display="grid"   gridTemplateColumns="repeat(12, 1fr)" gap={3} sx={{justifyContent:"flex-end", alignItems:"center"}}  my={4} px={9} >
            {
           data1.map((item) => (

            <Box  component={Paper}  elevation={2} gridColumn="span 3" key={item.title} px={1} py={2}  sx={{ borderRadius:3}} >
            <Stack  direction="row" display="flex" alignItems="center"  justifyContent="flex-start"   spacing={1} mb={1}>
            {
                item.icon
              }
               <Typography variant="h6" sx={{fontWeight:"bold"}}>
                {
                  item.title
                }
                 :
              </Typography>
             

            </Stack>
             <Typography variant="h6" display="flex" justifyContent="center">
                {
                  item.content
                }
              </Typography>

            </Box>
          ))
          }
<Box component={Paper} elevation={2} sx={{paddingX:5, height:"100%", display:"flex", flexDirection:"column", justifyContent:"center",gap:2, alignItems:"flex-start", borderRadius:3}} gridColumn="span 6">
              <Stack direction="row" display="flex" alignItems="center" justifyContent="space-between" spacing={3} width="100%" >
<Typography variant="h6" sx={{fontWeight:"bold"}}>
              Course progress
              </Typography>
<Typography variant="h6" >
30%
</Typography>
</Stack>
<Box  sx={{width:"100%", height:"15%", backgroundColor:"#f5f5f5", borderRadius:2}} >
<Box  sx={{width:"30%", height:"100%", backgroundColor:"#ccc", borderRadius:2}} >
 </Box>
</Box>
 </Box>
          
           </Box>
          <Box sx={{ border:"1px solid #f5f5f5",  borderRadius:3, padding: 3}}>
           <Typography variant="h5" sx={{fontWeight:"bold", marginBottom: 4}}>
          heading
      </Typography>
         
         
           <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
         
        >
           <Typography variant="body1" sx={{fontWeight:"bold"}}>
           season 1
      </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      </Box>
         </Box>

    </Box>

  )
}

export default CourseDetails