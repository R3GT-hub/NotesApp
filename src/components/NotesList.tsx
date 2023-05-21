import * as React from 'react';
import {Typography} from "@mui/material"
import { Note } from '../models/notemodel';
import Notes from './Notes';
interface INotesListProps {
    notes:Note[],
    setNotes:React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList: React.FunctionComponent<INotesListProps> = ({notes,setNotes}) => {
    const handleDelete=(id:string)=>{
        setNotes(notes.filter(note=>note.id!==id));
    }
  const renderNotes=():JSX.Element[]=>{
    return notes.map(note=>{
        return <Notes key ={note.id} note={note} handleDelete={handleDelete}/>
    })
  }
    return (
    <>
    <Typography variant="h2" component="h1"sx={{mt:3,textAlign:"center"}}>Notes</Typography>
    <Typography>{renderNotes()}</Typography>
    </>
  );
};

export default NotesList;
