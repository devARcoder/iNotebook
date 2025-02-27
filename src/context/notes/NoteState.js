import NoteContext from "./noteContext";
import React, { useState } from "react";

const NoteState = (props) => {
  const s1 = {
    name: "devARcoder",
    class: "2nd year",
  };
  const [state, setState] = useState(s1);

  const update = () => {
    setTimeout(() => {
      setState({
        name: "appdevWM",
        class: "UET peshawar",
      });
    }, 3000);
  };
  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
