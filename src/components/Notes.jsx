import React, { useContext, useEffect }  from 'react'
import noteContext from "../context/notes/noteContext";
import NoteItem from './NoteItem';
import AddNote from './AddingNote'; 
const Notes = () => {
  const context = useContext(noteContext);
  const {notes, getNotes} = context;
  useEffect(() => {
    getNotes();
  }, [])
  
  return (
    <>
      <div className="">
        <AddNote/>
          <h1 className="flex justify-center items-center text-4xl text-center font-bold mb-6 mt-10 ">Your Notes</h1>
          <div className="row m-3">
            {notes.map((note)=>{
              return <NoteItem key={note._id} note={note}/>

            })}
          </div>
        </div>
    </>
  )
}

export default Notes
