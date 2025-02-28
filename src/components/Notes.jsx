import React, { useContext }  from 'react'
import noteContext from "../context/notes/noteContext";
import NoteItem from './NoteItem';
const Notes = () => {
    const context = useContext(noteContext);
  const {notes, setNotes} = context;
  return (
    <>
      <div className="note my-6 text-center">
          <h1 className="text-4xl text-center font-bold my-3">Your Notes</h1>
          <div className="">
            {notes.map((note)=>{
              return <NoteItem note={note}/>

            })}
          </div>
        </div>
    </>
  )
}

export default Notes
