import NotesHeader from "@/components/notesHeader";
import PrivateRoute from "@/components/privateRoute";
import React from "react";
import { OutputData } from "@editorjs/editorjs";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";

// important that we use dynamic loading here
// editorjs should only be rendered on the client side.
const EditorBlock = dynamic(() => import("@/components/editor"), {
  ssr: false,
});

const New:NextPage = ()=> {
    const [data, setData] = useState<OutputData>();    
    console.log(data);
    
  return (
    <>
      <NotesHeader title="New Note"/>
      <PrivateRoute className="block ">
          <EditorBlock data={data} onChange={setData} createMode />
      </PrivateRoute>
      
    </>
  );
}

export default New;
