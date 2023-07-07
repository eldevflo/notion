import { Note } from "@/types/notes";
import React, { useState } from "react";
import ParagraphNode from "../ParagraphNote";
import ListNote from "../listNote";
import CheckListNote from "../checkListNote";

function NoteItem({ noteItem }: { noteItem: Note }) {
  const [note, setNote] = useState(noteItem);
  return (
    <>
      {!!note.blocks.length && (
        <div className=" rounded-lg text-white bg-card">
          <div className="bg-black rounded-tl-lg rounded-tr-lg p-3 min-h-[50px]">
            <h3 className="text-base text-white">{note.title}</h3>
          </div>
          <div className="h-[400px] overflow-scroll pb-3 overflow-x-hidden border">
            {note.blocks.map((block) => (
              <div key={block.id}>
                {block.type === "paragraph" ? (
                  <ParagraphNode text={block.data.text} />
                ) : block.type === "list" ? (
                  <ListNote items={block.data.items} style={block.data.style} />
                ) : block.type === "checklist" ? (
                  <CheckListNote items={block.data.items} setNote={setNote} />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default NoteItem;
