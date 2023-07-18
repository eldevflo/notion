import { Note } from "@/types/notes";
import React from "react";

function CheckListNote({
  items,
}: {
  items: {
    text: string;
    checked: boolean;
  }[];
}) {
  return (
    <div>
      <div className="text-black p-3">
        {items.map((item, i) => (
          <div key={i}>
            <input
              type="checkbox"
              className="w-4 h-4 text-purple bg-purple border-purple rounded"
              readOnly
            />
            <span className="pl-2">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CheckListNote;
