import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div>
      

      <div class="card" >
        <div class="card-body">
          <h5 class="card-title">{note.title}</h5>
          <p class="card-text">{note.description}</p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
