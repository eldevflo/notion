import { navigationItems } from "@/utils/navigationItems";
import React, { useState } from "react";
import SideBarItem from "./SideBarItem";
import Logo from "../Ui/icons/Logo";
import MenuIcon from "../Ui/icons/MenuIcon";
import SearchBar from "../searchBar";
import Profile from "../profile";
import useLockedBody from "@/hooks/useLockedBody";
import { userSlice } from "@/store";

function SideBar() {
  const [show, setShow] = useState(false);
  const { locked, setLocked } = useLockedBody();
  const { user } = userSlice();

  return (
    <>
      <div className="absolute lg:relative w-64 h-screen shadow bg-gray-100 hidden lg:block">
        {/* logo */}
        <div className="h-full flex flex-col">
          <div className="h-16 w-full flex items-center px-5">
            <Logo />
            <h3 className="ml-2">Simple Notion</h3>
          </div>
          <ul className=" py-6">
            {navigationItems.map((item) => (
              <SideBarItem key={item.title} item={item} />
            ))}
          </ul>
          <div className="mt-auto mb-3">
            <Profile user={user} />
          </div>
        </div>
      </div>
      {/*Mobile responsive sidebar*/}
      <div
        className="text-gray-600 mr-8 visible lg:hidden z-50 absolute top-5 right-0"
        onClick={() => {
          setLocked(!locked);
          setShow(!show);
        }}
      >
        <MenuIcon />
      </div>
      <div
        className={
          show
            ? "w-full h-full absolute z-40  transform  translate-x-0 origin-left	ease-in-out duration-300 "
            : "   w-full h-full absolute z-40  transform -translate-x-full ease-in-out duration-300"
        }
        id="mobile-nav"
      >
        <div
          className="bg-gray-800 opacity-50 absolute h-full w-full lg:hidden"
          onClick={() => {
            setLocked(!locked);
            setShow(!show);
          }}
        />
        <div className="absolute z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-white  lg:hidden transition duration-150 ease-in-out h-full">
          <div className="flex flex-col justify-between h-screen w-full ">
            <div className=" w-full flex items-center px-5">
              <Logo />
              <h3 className="ml-2">Simple Notion</h3>
            </div>
            <ul className=" py-6">
              {navigationItems.map((item) => (
                <SideBarItem key={item.title} item={item} />
              ))}
            </ul>
            <div className="mt-auto mb-3">
              <Profile user={user} />
            </div>
          </div>
        </div>
      </div>
      {/*Mobile responsive sidebar*/}
    </>
  );
}

export default SideBar;
