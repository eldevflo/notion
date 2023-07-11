import { Note } from "@/types/notes";
import React, { useState } from "react";
import ParagraphNode from "../noteTypes/paragraphNote";
import ListNote from "../noteTypes/listNote";
import CheckListNote from "../noteTypes/checkListNote";
import WarningNote from "../noteTypes/warningNote";
import CodeNote from "../noteTypes/codeNote/indedx";

function NoteItem({ noteItem }: { noteItem: Note }) {
  console.log(noteItem);
  
  return (
    <>
      {!!noteItem.blocks.length && (
        <div className=" rounded-lg  bg-card">
          <div className="bg-black rounded-tl-lg rounded-tr-lg p-3 min-h-[50px]">
            {noteItem.title ? <h3 className="text-base text-white">{noteItem.title}</h3> : <h3 className="text-base text-muted opacity-50">No Title</h3>}
          </div>
          <div className="h-[400px] overflow-scroll pb-3 overflow-x-hidden border">
            {noteItem.blocks.map((block) => (
              <div key={block.id}>
                {block.type === "paragraph" ? (
                  <ParagraphNode text={block.data.text} />
                ) : block.type === "list" ? (
                  <ListNote items={block.data.items} style={block.data.style} />
                ) : block.type === "checklist" ? (
                  <CheckListNote items={block.data.items} />
                ) : block.type === "warning" ? <WarningNote note={block.data}/> : block.type === "header" ? <h3 className="p-3">{block.data.text}</h3> : block.type === "code" ? <CodeNote code={block.data.code}/> : block.type}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default NoteItem;
