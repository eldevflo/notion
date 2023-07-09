import NotesHeader from "@/components/NotesHeader";
import PrivateRoute from "@/components/PrivateRoute";
import { ToastContext } from "@/context";
import { Note } from "@/types/notes";
import { request } from "@/utils";
import { OutputData } from "@editorjs/editorjs";
import dynamic from "next/dynamic";
import {  useContext, useState } from "react";

 const EditorBlock = dynamic(() => import("@/components/Editor"), {
    ssr: false,
  });


function Page({ note }: { note: Note }) { 
  const [title, setTitle] = useState(note.title);
  const toast = useContext(ToastContext)
  const [data, setData] = useState<OutputData>(note);
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const saveData = async()=>{
    try {
      const response = await request.post('/note/edit' , {
      id: note.id,
      title,
      blocks: data.blocks

    })
    if(response.status === 200){
      if(response.data.includes(0)){
        toast?.show({
        type: 'error',
        message: 'something went wrong'
      })
        return
      } 
      toast?.show({
        type: 'success',
        message: 'note saved successfully'
      })
    }
    } catch (error) {
      toast?.show({
        type: 'error',
        message: 'something went wrong'
      })
    }
  }
  return (
    <PrivateRoute className="block">
      <>
        <NotesHeader title="Note" saveData={saveData} />
        <div className="w-full mb-5 flex items-center flex-col ">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e)=>handleTitleChange(e)}
            className="w-full border border-gray-100 focus:outline-none focus:border-indigo-700 rounded w-full text-sm text-gray-500 bg-gray-100 pl-6 py-2"
          />
        </div>
        <EditorBlock data={note} onChange={setData}  />
      </>
    </PrivateRoute>
  );
}

export const getServerSideProps = async (context: {
  query: {
    noteId: string;
  };
}) => {
  const response = await request.get(`/note/id?id=${context.query.noteId}`);  
  return {
    props: {
      note: response.data.data,
    },
  };
};

export default Page;
