import * as React from 'react';
import { Note } from '../models/notemodel';
import { Box, Button, Paper, Typography } from '@mui/material';

interface  NotesProps {
    note:Note,
    handleDelete:(id:string)=>void
}

const Notes: React.FunctionComponent< NotesProps> = ({note,handleDelete}) => {
  return (
    <Paper elevation={5} sx={{width:"77.8vw",ml:-3 ,mt:3,mb:5}}>
        <Box sx={{ml:5,p:1 }}>
        <Box sx={{mt:4}}>
        <Typography variant='h3' component='h2'>
            {note.title}
        </Typography>
        </Box>
        <Box>
            <Typography>
                {note.text}
            </Typography>
            
        </Box>
        <Box sx={{mt:1,display:"flex" ,justifyContent:"flex-end"}}>
            <Button variant="contained" sx={{backgroundColor:"red" ,'&:hover':{backgroundColor:"red"}}} onClick={()=>handleDelete(note.id)}>Delete</Button>
        </Box>
        </Box>

    </Paper>
  )
};

export default Notes;
