import React,{FormEvent, useState} from "react";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

// import { FormControl, Typography } from "@mui/material";
import { Note } from "../models/notemodel";
interface ICreateNotesProps {
    notes:Note[],
    setNotes:React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({notes,setNotes}) => {
    // const [error,setError]=useState<string>("");
    const [title,setTitle]=useState<string>("");
    const [description,setDescription]=useState<string>("");
    const [titleError,setTitleError]=useState<boolean>();
    const [descriptionError,setdescriptionError]=useState<boolean>();


    
    
    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault()
 
        setTitleError(false)
        setdescriptionError(false)
 
        if (title === '') {
            setTitleError(true)
        }
        if (description === '') {
            setdescriptionError(true)
        }
 
        if (title && description) {
            console.log(title, description)
        }
        setNotes([...notes,{
            id:(new Date()).toString(),
            title:title,
            text:description
            }])


        setTitle("");
        setDescription("");    

    }

    return (
    <>
    
      <React.Fragment >
        <form autoComplete="off" onSubmit={handleSubmit} >
            <h3>Create New Notes</h3>
                <TextField 
                
                    label="Title"
                    onChange={e => setTitle(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    sx={{mb: 3,mt:3}}
                    fullWidth
                    value={title}
                    error={titleError}
                 />
                 <TextField 
                    label="Description"
                    onChange={e => setDescription(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="password"
                    value={description}
                    error={descriptionError}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <Button variant="outlined" color="secondary" type="submit">Create</Button>
             
        </form>
        
        </React.Fragment>
    </>
  );
};

export default CreateNotes;
