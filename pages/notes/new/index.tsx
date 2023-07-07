import NotesHeader from "@/components/notesHeader";
import PrivateRoute from "@/components/privateRoute";
import React, { useContext } from "react";
import { OutputData } from "@editorjs/editorjs";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";
import { ToastContext } from "@/context";
import { request } from "@/utils";
import { userSlice } from "@/store";

// important that we use dynamic loading here
// editorjs should only be rendered on the client side.
const EditorBlock = dynamic(() => import("@/components/editor"), {
  ssr: false,
});

const New: NextPage = () => {
  const [data, setData] = useState<OutputData>();
  const toast = useContext(ToastContext);
  const { user } = userSlice();
  const [title , setTitle] = useState('')

  async function saveData() {
    if (!data) {
      toast?.show({
        type: "error",
        message: "Oops! you have no notes to save...",
      });
      return;
    }
    try {
      const response = await request.post("/notes/create", {
        blocks: data.blocks,
        user: user?.id,
        title
      });
      toast?.show({
        type: "success",
        message: "data saved successfully",
      });
    } catch (error) {
      console.log("Error saving data: " + error);
      toast?.show({
        type: "error",
        message: "Oops! something went wrong",
      });
    }
  }
  return (
      <PrivateRoute className="block ">
        <>
          <NotesHeader title="New Note" saveData={saveData} />
          <div className="w-full mb-5 flex items-center flex-col ">
          <input type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} className="w-full border border-gray-100 focus:outline-none focus:border-indigo-700 rounded w-full text-sm text-gray-500 bg-gray-100 pl-6 py-2" />
          </div>
          <EditorBlock data={data} onChange={setData} />
          
        </>
      </PrivateRoute>
  );
};

export default New;
