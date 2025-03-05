import React, {useContext, useState} from "react";
import noteContext from "../context/notes/noteContext";
const AddingNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({title: "", description: "", tag: ""})

  
  const handleClick = (e) =>{
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({title: "", description: "", tag: ""})
    props.showAlert("Note Added Successfully", "success");
  }
  const onChange = (e) =>{
    setNote({...note, [e.target.name]: e.target.value})
  }
  return (
    <>
      <div className=" m-3">
        <h1 className="text-4xl text-center font-bold my-3">Add a Note</h1>
        <form className="mx-4 my-3">
          <div className="mb-3 ">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
            minLength={3} required
              type="text"
              className="form-control"
              id="title" name="title"
              aria-describedby="emailHelp" value={note.title} onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
            minLength={5} required
              type="text"
              className="form-control"
              id="description" name="description" value={note.description} onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag" name="tag" value={note.tag} onChange={onChange}
            />
          </div>
          
          <button disabled={note.title.length<5 || note.description.length<5} type="submit" onClick={handleClick} className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddingNote;
