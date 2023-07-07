import React from "react";
import image from "@/assets/images/getStarted.png";
import Page from "@/components/page";
import Image from "next/image";
import PrivateRoute from "@/components/privateRoute";
import useSWR, { Fetcher } from "swr";
import { User } from "@/types/User";
import { userSlice } from "@/store";
import { request } from "@/utils";
import { Note } from "@/types/notes";
import NotesList from "@/components/notesList";
import Button from "@/components/Ui/button";
import Link from "next/link";

const getData = async (userId: User["id"]) => {
  try {
    const res = await request.get(`/notes?userId=${userId}`);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
const fetcher: Fetcher<Note[]> = (id: User["id"]) => getData(id);

function Dashboard() {
  const { user } = userSlice();
  const {data} = useSWR(user?.id, fetcher);
  console.log(data);
        

  return (
    <PrivateRoute>
      <>
        {data?.length ? (
        <NotesList notes={data} />
        ) : (
          <div className="flex flex-col items-center w-full h-full justify-center min-h-[60vh]">
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
