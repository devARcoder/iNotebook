import React, { useContext }  from 'react'
import noteContext from "../context/notes/noteContext";
import NoteItem from './NoteItem';
const Notes = () => {
    const context = useContext(noteContext);
  const {notes, setNotes} = context;
  // eslint-disable-next-line
  return (
    <>
      <div className="">
        
          <h1 className="flex justify-center items-center text-4xl text-center font-bold mb-10 ">Your Notes</h1>
          <div className="row m-3 ">
            {notes.map((note)=>{
              return <NoteItem note={note}/>

            })}
          </div>
        </div>
    </>
  )
}

export default Notes
