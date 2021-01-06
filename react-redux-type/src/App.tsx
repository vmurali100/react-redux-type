import React from "react";
import "./App.css";
import { NewNoteInput } from "./NewNoteInput";
import { NotesState } from "./notesReducer";
import { useDispatch, useSelector } from "react-redux";
import { addNoteAction } from "./actions";
function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );
  const dispatch = useDispatch();
  const addNote = (note: string) => {
    dispatch(addNoteAction(note));
  };
  return (
    <div className="App">
      <NewNoteInput addNote={addNote} />
      <hr />
      <ul>
        {notes.map((note) => (
          <li>{note}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
