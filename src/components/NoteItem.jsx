import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <>


<div class="card text-center col-md-3 m-2">
  <div class="card-header">
    <p className="font-semibold font-serif">{note.tag}</p>
  </div>
  <div class="card-body">
    <h5 class="card-title text-xl font-bold font-serif">{note.title}</h5>
    <p class="card-text text-[18px] font-serif">{note.description}.</p>
    
  </div>
  <div class="card-footer text-muted">
    {note.date}
  </div>
</div>


</>
  );
};

export default NoteItem;
