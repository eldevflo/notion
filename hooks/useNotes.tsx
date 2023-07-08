import { User } from "@/types/User";
import { request } from "@/utils";
import { useEffect } from "react";
import useDebounce from "./useDebounce";
import { notesSlice, userSlice } from "@/store";

export function useNotes( query?: string) {
  const debouncedVal = useDebounce(query, 500);
  const { user } = userSlice();
  const {notes , setNotes} = notesSlice()

  async function getData() {
    const response = await request.get(`/notes?userId=${user?.id}&query=${query || ""}`);
    const { data } = response;
    setNotes(data.data)
  }
  useEffect(() => {
    getData()
  }, []);
  useEffect(() => {
    getData()
  }, [debouncedVal]);
  return {
    notes,
    query
  }
}
