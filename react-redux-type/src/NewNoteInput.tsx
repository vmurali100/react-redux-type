import React, { ChangeEvent, useState } from "react";

interface NewNoteInputProps {
  addNote(note: string): void;
}
export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setnote] = useState("");

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setnote(event.target.value);
  };

  const onAddNoteClick = () => {
    addNote(note);
    setnote("");
  };
  return (
    <div>
      <div className="userInput">
        <input
          type="text"
          name="note"
          value={note}
          placeholder="Note"
          onChange={updateNote}
        />
        <button onClick={onAddNoteClick}>Add Note</button>
      </div>
    </div>
  );
};
