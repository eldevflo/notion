import { navigationItems } from "@/utils/navigationItems";
import React, { useState } from "react";
import SideBarItem from "./SideBarItem";
import Logo from "../Ui/icons/Logo";
import MenuIcon from "../Ui/icons/MenuIcon";

function SideBar() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="absolute lg:relative w-64 h-screen shadow bg-gray-100 hidden lg:block">
        {/* logo */}
        <div className="h-16 w-full flex items-center px-5">
          <Logo />
          <h3 className="ml-2">Simple Notion</h3>
        </div>
        <ul className=" py-6">
          {navigationItems.map((item) => (
            <SideBarItem key={item.title} item={item} />
          ))}
        </ul>
      </div>
      {/*Mobile responsive sidebar*/}
      <div
        className="text-gray-600 mr-8 visible lg:hidden z-50 absolute top-5 right-0"
        onClick={() => setShow(!show)}
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
          onClick={() => setShow(!show)}
        />
        <div className="absolute z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-white  lg:hidden transition duration-150 ease-in-out h-full">
          <div className="flex flex-col justify-between h-full w-full ">
            <div>
              <div className="w-full pt-8">
                <div className="flex justify-center mb-4 w-full px-3">
                  <div className="relative w-full border border-gray rounded">
                    <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-search"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="#A0AEC0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx={10} cy={10} r={7} />
                        <line x1={21} y1={21} x2={15} y2={15} />
                      </svg>
                    </div>
                    <input
                      className="bg-gray-200 focus:outline-none rounded w-full text-sm text-gray-500  pl-10 py-2"
                      type="text"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>

              <ul className=" py-6">
                {navigationItems.map((item) => (
                  <SideBarItem key={item.title} item={item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*Mobile responsive sidebar*/}
    </>
  );
}

export default SideBar;
