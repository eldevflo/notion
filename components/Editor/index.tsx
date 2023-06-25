"use client";
import React, { memo, useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import { useRouter } from "next/router";
import { request } from "@/utils";
import { EDITOR_JS_TOOLS } from "./EditorTools";
import { usePrevious } from "@uidotdev/usehooks";
import useAutosave from "@/hooks/useAutoSave";

type Props = {
  data?: OutputData;
  onChange(val: OutputData): void;
  createMode?: boolean
};
const holder = "notes-editor";
function Editor({ data, onChange , createMode }: Props) {
  //add a reference to editor
  const ref = useRef<EditorJS>();
  const router = useRouter();
  const sendDataToServer = async () => {
    if(!data || !data.blocks.length) return false;
    const url = `/api/notes/${createMode ? "create" : "update"}`
    // const res = await request.post('/notes/create' , data)
    console.log(data);
    
    return true;
  };
  // const previousData = usePrevious(data);   
  //   async function saveData(){
  //     if(data && previousData === undefined){
  //       console.log('hello');
  //       const response = await request.post('/notes/create' , {
  //         blocks: data.blocks,
  //         user: '5'
  //       })
  //       console.log(response , data);
        
        
  //     }
  //   }
  //   useAutosave(saveData)
    
  useEffect(() => {
    //initialize editor if we don't have a reference
    if (!ref.current) {
      const editor = new EditorJS({
        holder: holder,
        tools: EDITOR_JS_TOOLS,
        placeholder: "type something",
        data,
        async onChange(api, event) {
          const data = await api.saver.save();
          onChange(data);
        },
      });
      ref.current = editor;
    }
   //add a return function handle cleanup
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <div
        id={holder}
        className="p-4 pros max-w-full rounded border border-gray bg-white"
      />
      <p className="ml-4 py-2 px-2  inline-block">
        Use
        <kbd className="rounded-md border bg-gray px-1 text-white uppercase">
          Tab
        </kbd>
        to open the command menu.
      </p>
    </>
  );
}

export default memo(Editor);
