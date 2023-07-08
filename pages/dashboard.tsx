import React from "react";
import NotesList from "@/components/notesList";
import Button from "@/components/Ui/button";
import Link from "next/link";
import PrivateRoute from "@/components/PrivateRoute";
import { useNotes } from "@/hooks/useNotes";



function Dashboard() {
  const {notes , query} = useNotes()  
  return (
    <PrivateRoute>
      <>
        {notes?.length ? (
           <NotesList notes={notes} />
        ) : (
          query ? <div className="flex flex-col items-center w-full h-full justify-center min-h-[60vh]">
            {"Sorry we couldn't find what you're looking for :("}
          </div> : <div className="flex flex-col items-center w-full h-full justify-center min-h-[60vh]">
            <h1 className="text-xl font-bold text-center mt-6">
              Start Your Journey
            </h1>
            <div className="text-sm font-regular text-dark-gray text-center mt-4">
              Every big step start with small step. Notes your first idea and
              start your journey!
            </div>
            <Link href='/notes/new' className="mt-2">
            <Button type="button" text="create a new note" backgroundColor="primary" width="md"/>
            </Link>
          </div>
        )}
      </>
    </PrivateRoute>
  );
}

export default Dashboard;
