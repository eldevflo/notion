import NotesHeader from "@/components/notesHeader";
import PrivateRoute from "@/components/privateRoute";
import React, { useContext } from "react";
import { OutputData } from "@editorjs/editorjs";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";
import useAutosave from "@/hooks/useAutoSave";
import { usePrevious } from "@uidotdev/usehooks";
import { ToastContext } from '@/context'
import { request } from "@/utils";
import { userSlice } from "@/store";

// important that we use dynamic loading here
// editorjs should only be rendered on the client side.
const EditorBlock = dynamic(() => import("@/components/editor"), {
  ssr: false,
});

const New:NextPage = ()=> {
    const [data, setData] = useState<OutputData>(); 
  const toast = useContext(ToastContext)
  const { user  } = userSlice()

    async function saveData(){
        if(!data) {
          toast?.show({
            type: "error",
            message: 'Oops! you have no notes to save...'
          })
          return
        }
        const response = await request.post('/notes/create' , {
          blocks: data.blocks,
          user: user?.id 
        })
        console.log(response , data);
    }
  return (
    <>
      <NotesHeader title="New Note" saveData={saveData}/>
      <PrivateRoute className="block ">
          <EditorBlock data={data} onChange={setData}  />
      </PrivateRoute>
      
    </>
  );
}

export default New;
