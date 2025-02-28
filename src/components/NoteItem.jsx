import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <>


<div className="card text-center col-md-3 m-2">
  <div className="card-header bg-black text-white p-2">
    <p className="font-semibold font-serif tracking-wide">{note.tag}</p>
  </div>
  <div className="card-body bg-yellow-100 shadow-lg rounded-b-lg mb-3">
    <h5 className="card-title text-xl font-bold font-serif">{note.title}</h5>
    <p className="card-text text-gray-600 text-[18px] font-serif">{note.description}.</p> 
    
  </div>
  <div className="">
  <i className="fa-solid fa-trash mx-2 my-2 bg-red-500 p-2 text-white text-xl rounded-md cursor-pointer"></i>
  <i className="fa-solid fa-pen-to-square mx-2 bg-blue-500 p-2 text-white text-xl rounded-md cursor-pointer"></i>
  <i className="fa-solid fa-plus mx-2 bg-green-500 p-2 text-white text-xl rounded-md cursor-pointer"></i>
  </div>
  <div className="card-footer text-muted">
    {note.date}
  </div>
</div>


</>
  );
};

export default NoteItem;
