import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SideBar from "../sideBar";
import Navigation from "../navigation";
import { userSlice } from "@/store";
import Page from "../Page";

type Props = {
  children: JSX.Element | string;
  className?: string;

};
function PrivateRoute({ children, className }: Props) {
  const { user } = userSlice();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, []);
  return (
    <Page className={className}>
      <div className="w-full h-full bg-gray-200">
        <div className="flex flex-no-wrap">
          <SideBar />
          <div className="w-full">
            <Navigation />
            <div className="py-10  px-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default PrivateRoute;
