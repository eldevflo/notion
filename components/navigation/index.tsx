import React, { useState } from "react";

function Navigation() {
  const [show, setShow] = useState(false);

  return (
    <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative z-10">
      <div className="hidden lg:flex w-full pr-6">
        <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
          <div className="relative w-full">
            <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-search"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
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
              className="border border-gray-100 focus:outline-none focus:border-indigo-700 rounded w-full text-sm text-gray-500 bg-gray-100 pl-12 py-2"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
      
    </nav>
  );
}

export default Navigation;
