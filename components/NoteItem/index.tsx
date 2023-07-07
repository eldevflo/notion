import { Note } from "@/types/notes";
import React, { useState } from "react";
import ParagraphNode from "../ParagraphNote";
import ListNote from "../listNote";
import CheckListNote from "../checkListNote";

function NoteItem({ noteItem }: { noteItem: Note }) {
    const [note , setNote] = useState(noteItem)
  return (
    <>
      {!!note.blocks.length && (
        <>
          {note.blocks.map((block) => (
            <>
              {block.type !== "header" && (
                <div key={block.id}>
                  <div className="bg-black rounded-tl-lg rounded-tr-lg p-3 min-h-[50px]">
                    {note.blocks[0].type === "header" ? (
                      <h3 className="text-base text-white">
                        {note.blocks[0].type === "header" &&
                          note.blocks[0].data.text}
                      </h3>
                    ) : (
                      ""
                    )}
                  </div>
                  {block.type === "paragraph" ? (
                    <ParagraphNode
                      text={block.data.text}
                      heading={
                        note.blocks[0].type === "header" &&
                        note.blocks[0].data.text
                      }
                    />
                  ) : block.type === "list" ? (
                    <ListNote
                      items={block.data.items}
                      style={block.data.style}
                      heading={
                        note.blocks[0].type === "header" &&
                        note.blocks[0].data.text
                      }
                    />
                  ) : block.type === "checklist" ? (
                    <CheckListNote
                      heading={
                        note.blocks[0].type === "header" &&
                        note.blocks[0].data.text
                      }
                      items={block.data.items}
                      setNote={setNote}
                    />
                  ) : null}
                </div>
              )}
            </>
          ))}
        </>
      )}
    </>
  );
}

export default NoteItem;
