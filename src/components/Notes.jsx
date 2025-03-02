import React, { useState, useContext, useEffect, useRef } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddingNote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote} = context;
  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({
    etitle: "",
    edescription: "",
    etag: "",
  });
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag})
  };

  const handleClick = (e) => {
    
    editNote(note.id, note.etitle, note.edescription, note.etag)
    refClose.current.click()
    
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="">
        <AddNote />
        {/* <!-- Button trigger modal --> */}
        {/* <button
          ref={ref}
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button> */}

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Edit Note
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form className="mx-4 my-3">
                  <div className="mb-3 ">
                    <label htmlFor="etitle" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etitle"
                      name="etitle"
                      aria-describedby="emailHelp"
                      value={note.etitle}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edescription" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="edescription"
                      name="edescription"
                      value={note.edescription}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="etag" className="form-label">
                      Tag
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etag"
                      name="etag"
                      value={note.etag}
                      onChange={onChange}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                ref={refClose}
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button ref={ref} data-bs-target="#exampleModal" data-bs-toggle="modal" onClick={handleClick} type="button" className="btn btn-primary">
                  Update Note
                </button>
              </div>
            </div>
          </div>
        </div>

        <h1 className="flex justify-center items-center text-4xl text-center font-bold mb-6 mt-10 ">
          Your Notes
        </h1>
        <div className="row m-3">
          {notes.map((note) => {
            return (
              <NoteItem key={note._id} updateNote={updateNote} note={note} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
