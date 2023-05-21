import React,{useState} from 'react';

import './App.css';
import {Note} from './models/notemodel';
import Header from './components/Header';
import NotesList from './components/NotesList';
import { Container } from '@mui/material';
import CreateNotes from './components/CreateNotes';
function App() {
  const [notes,setNotes]=useState<Note[]>([{
    id:(new Date()).toString(),
    title:"Note Making",
    text:"Create your own notes, and delete them on completion",
    
  }]);

  return (
    <>
    <Header/>
    <Container  fixed sx={{mt:3}}>
      <CreateNotes notes={notes} setNotes={setNotes}/>
      <NotesList notes={notes} setNotes={setNotes}/>
      
    </Container>

    </>
  );
}

export default App;
