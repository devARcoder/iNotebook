import NoteContext from "./noteContext";
import React, {useState}  from "react";

const NoteState = (props) => {

  const notesInitial = [
    {
      "_id": "67bc265664c0210666f0f825",
      "user": "67bc05eeaafa76e86ab5fccb",
      "title": "NewsMonkey App",
      "description": "newsmonkey app was created by abdurrazzaq his portfolio name devarcoder and using rectjs, tailwindcss and newsapi",
      "tag": "web application full Responsive",
      "date": "2025-02-24T07:57:10.402Z",
      "__v": 0
    },
    {
      "_id": "67bfec7c54b9b65c53c96c5d",
      "user": "67bc05eeaafa76e86ab5fccb",
      "title": "Youtube_Clone",
      "description": "Youtube Web App my favourit project and its my biggener app and using tailwindcss and newsapi",
      "tag": "YouTube Application",
      "date": "2025-02-27T04:39:24.149Z",
      "__v": 0
    },
    {
      "_id": "67bc265664c0210666f0f825",
      "user": "67bc05eeaafa76e86ab5fccb",
      "title": "NewsMonkey App",
      "description": "newsmonkey app was created by abdurrazzaq his portfolio name devarcoder and using rectjs, tailwindcss and newsapi",
      "tag": "web application full Responsive",
      "date": "2025-02-24T07:57:10.402Z",
      "__v": 0
    },
    {
      "_id": "67bfec7c54b9b65c53c96c5d",
      "user": "67bc05eeaafa76e86ab5fccb",
      "title": "Youtube_Clone",
      "description": "Youtube Web App my favourit project and its my biggener app and using tailwindcss and newsapi",
      "tag": "YouTube Application",
      "date": "2025-02-27T04:39:24.149Z",
      "__v": 0
    },
    {
      "_id": "67bc265664c0210666f0f825",
      "user": "67bc05eeaafa76e86ab5fccb",
      "title": "NewsMonkey App",
      "description": "newsmonkey app was created by abdurrazzaq his portfolio name devarcoder and using rectjs, tailwindcss and newsapi",
      "tag": "web application full Responsive",
      "date": "2025-02-24T07:57:10.402Z",
      "__v": 0
    },
    {
      "_id": "67bfec7c54b9b65c53c96c5d",
      "user": "67bc05eeaafa76e86ab5fccb",
      "title": "Youtube_Clone",
      "description": "Youtube Web App my favourit project and its my biggener app and using tailwindcss and newsapi",
      "tag": "YouTube Application",
      "date": "2025-02-27T04:39:24.149Z",
      "__v": 0
    },
  ]

  const [notes, setNotes] = useState(notesInitial)


  // add a note
  const addNote = (title, description, tag) =>{
    const note = {
      "_id": "67bfec7c54b9b65c53c96c5d",
      "user": "67bc05eeaafa76e86ab5fccb",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2025-02-27T04:39:24.149Z",
      "__v": 0
    }

    setNotes(notes.concat(note))

  }
  // delete a note
  const deleteNote = () =>{

  }
  // edit a note
  const editNote = () =>{

  }

  return (
    <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
