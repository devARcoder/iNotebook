import NoteContext from "./noteContext";
import React, { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

   // get all  notes
   const getNotes = async () => {
    // api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdiYzA1ZWVhYWZhNzZlODZhYjVmY2NiIn0sImlhdCI6MTc0MDM3NTUzNH0.3NdgMOsPtjXxD52Ow5N8J-EhDtWNWQ8yZ__9UKS2f9E",
      },
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }

  // add a note
  const addNote = async (title, description, tag) => {
    // api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdiYzA1ZWVhYWZhNzZlODZhYjVmY2NiIn0sImlhdCI6MTc0MDM3NTUzNH0.3NdgMOsPtjXxD52Ow5N8J-EhDtWNWQ8yZ__9UKS2f9E",
      },
      body: JSON.stringify({title, description, tag}),
    });
    const json = await response.json()
    console.log(json)

    const note = {
      _id: "67bfec7c54b9b65c53c96c5d",
      user: "67bc05eeaafa76e86ab5fccb",
      title: title,
      description: description,
      tag: tag,
      date: "2025-02-27T04:39:24.149Z",
      __v: 0,
    };

    setNotes(notes.concat(note));
  };
  // delete a note
  const deleteNote = async (id) => {
    // api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      
      method: "DELETE",
      headers: {
        "content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdiYzA1ZWVhYWZhNzZlODZhYjVmY2NiIn0sImlhdCI6MTc0MDM3NTUzNH0.3NdgMOsPtjXxD52Ow5N8J-EhDtWNWQ8yZ__9UKS2f9E",
      },
      
    });
    const json = await response.json()
    console.log(json)

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
    console.log("delete note by id: ", id);
  };
  // edit a note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdiYzA1ZWVhYWZhNzZlODZhYjVmY2NiIn0sImlhdCI6MTc0MDM3NTUzNH0.3NdgMOsPtjXxD52Ow5N8J-EhDtWNWQ8yZ__9UKS2f9E",
      },
      body: JSON.stringify({title, description, tag}),
    });
    const json = await response.json()
    console.log(json)

    let newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
      setNotes(newNotes)
    }
  };
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
