"use client";
import React, { memo, useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "./EditorTools";

type Props = {
  data?: OutputData;
  onChange(val: OutputData): void;
  createMode?: boolean;
};
const holder = "notes-editor";
function Editor({ data, onChange }: Props) {
  //add a reference to editor
  const ref = useRef<EditorJS>();

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
