import useDebounce from "@/hooks/useDebounce";
import { useNotes } from "@/hooks/useNotes";
import { userSlice } from "@/store";
import { request } from "@/utils";
import React, { useContext, useState } from "react";

function SearchBar() {
  const [value, setValue] = useState("");
  const notes = useNotes(value)

  return (
    <input
      className="border border-gray-100 focus:outline-none focus:border-indigo-700 rounded w-full text-sm text-gray-500 bg-gray-100 pl-12 py-2"
      type="text"
      placeholder="Search for note title..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default SearchBar;
