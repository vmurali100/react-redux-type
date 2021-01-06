export type Action = { type: "ADD_NOTE"; payLoad: string };

export const addNoteAction = (note: string): Action => ({
  type: "ADD_NOTE",
  payLoad: note,
});
