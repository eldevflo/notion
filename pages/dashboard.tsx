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
          <div className="flex flex-col items-center w-full h-full justify-center">
            <Image src={image} alt="get started" />
            <h1 className="text-xl font-bold text-center mt-6">
              Start Your Journey
            </h1>
            <div className="text-sm font-regular text-dark-gray text-center mt-4">
              Every big step start with small step. Notes your first idea and
              start your journey!
            </div>
            <div className="mt-6">
              <svg
                width="151"
                height="106"
                viewBox="0 0 151 106"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.25"
                  d="M117.096 100.573C116.86 101.072 117.073 101.668 117.573 101.904L125.71 105.75C126.209 105.986 126.805 105.773 127.041 105.273C127.277 104.774 127.064 104.178 126.564 103.942L119.332 100.523L122.75 93.2905C122.986 92.7912 122.773 92.1951 122.274 91.9591C121.774 91.7231 121.178 91.9365 120.942 92.4358L117.096 100.573ZM118 0.999999C117.663 1.94146 117.663 1.94133 117.662 1.94124C117.662 1.94127 117.662 1.94122 117.663 1.94128C117.663 1.94139 117.664 1.94168 117.665 1.94215C117.667 1.94307 117.672 1.9447 117.678 1.94703C117.691 1.9517 117.711 1.95921 117.739 1.9696C117.794 1.99039 117.878 2.02275 117.99 2.06714C118.212 2.15592 118.544 2.2928 118.969 2.48155C119.819 2.85912 121.042 3.44378 122.512 4.26553C125.455 5.90983 129.382 8.4982 133.307 12.2682C141.143 19.793 149 32.0433 149 51L151 51C151 31.4151 142.857 18.6654 134.693 10.8256C130.619 6.91326 126.545 4.22819 123.488 2.51963C121.958 1.66494 120.681 1.05331 119.781 0.653698C119.331 0.453857 118.975 0.306928 118.729 0.209045C118.607 0.1601 118.511 0.123408 118.445 0.0984865C118.412 0.0860253 118.386 0.0765057 118.368 0.0698674C118.359 0.0665482 118.352 0.0639492 118.347 0.0620629C118.344 0.0611198 118.342 0.0603548 118.341 0.059767C118.34 0.0594733 118.339 0.0591646 118.339 0.0590181C118.338 0.0587542 118.337 0.0585344 118 0.999999ZM149 51C149 69.9567 141.143 82.207 133.307 89.7318C129.382 93.5018 125.455 96.0902 122.512 97.7345C121.042 98.5562 119.819 99.1409 118.969 99.5184C118.544 99.7072 118.212 99.8441 117.99 99.9329C117.878 99.9772 117.794 100.01 117.739 100.03C117.711 100.041 117.691 100.048 117.678 100.053C117.672 100.055 117.667 100.057 117.665 100.058C117.664 100.058 117.663 100.059 117.663 100.059C117.662 100.059 117.662 100.059 117.662 100.059C117.663 100.059 117.663 100.059 118 101C118.337 101.941 118.338 101.941 118.339 101.941C118.339 101.941 118.34 101.941 118.341 101.94C118.342 101.94 118.344 101.939 118.347 101.938C118.352 101.936 118.359 101.933 118.368 101.93C118.386 101.923 118.412 101.914 118.445 101.902C118.511 101.877 118.607 101.84 118.729 101.791C118.975 101.693 119.331 101.546 119.781 101.346C120.681 100.947 121.958 100.335 123.488 99.4804C126.545 97.7718 130.619 95.0867 134.693 91.1744C142.857 83.3346 151 70.5849 151 51L149 51Z"
                  fill="#6A3EA1"
                />
              </svg>
            </div>
          </div>
        )}
      </>
    </PrivateRoute>
  );
}

export default Dashboard;
