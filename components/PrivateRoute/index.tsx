import { userSlice } from "@/store/userSlice";
import React, { useEffect, useState } from "react";
import Page from "../page";
import { useRouter } from "next/router";
import TabBar from "../tabBar";
import SideBar from "../sideBar";
import Navigation from "../navigation";

type Props = {
  children: JSX.Element | string;
  className?: string;
};
function PrivateRoute({ children, className }: Props) {
  const { user } = userSlice();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(false);
  const [menu, setMenu] = useState(false);
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [menu3, setMenu3] = useState(false);
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
            <div className="  py-10  px-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default PrivateRoute;
