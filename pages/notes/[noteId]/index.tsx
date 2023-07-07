import NotesHeader from "@/components/NotesHeader";
import PrivateRoute from "@/components/PrivateRoute";
import { Note } from "@/types/notes";
import { request } from "@/utils";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const getNote = async (id: string) => {
  const response = await request.get(`/note/id?id=${id}`);
  return response.data;
};
 const EditorBlock = dynamic(() => import("@/components/Editor"), {
    ssr: false,
  });
function Page({ note }: { note: Note }) { 
  const [title, setTitle] = useState(note.title);
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation()
    setTitle(e.target.value);
  };
  
  return (
    <PrivateRoute className="block ">
      <>
        <NotesHeader title="Note" />
        <div className="w-full mb-5 flex items-center flex-col ">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e)=>handleTitleChange(e)}
            className="w-full border border-gray-100 focus:outline-none focus:border-indigo-700 rounded w-full text-sm text-gray-500 bg-gray-100 pl-6 py-2"
          />
        </div>
        <EditorBlock data={note}  />
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
