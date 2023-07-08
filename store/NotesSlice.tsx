import { Note } from "@/types/notes";
import { create } from "zustand";
export const userLocalKey = "__USER";
interface NotesSlice {
  notes: Note[];
  setNotes(notes: Note[]): void;
}
export const notesSlice = create<NotesSlice>((set) => ({
  notes: [],
  setNotes: (notes) => {
    set({ notes });
  },
}));
