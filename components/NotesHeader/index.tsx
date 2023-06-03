import React from 'react'

function NotesHeader({title}:{title:string}) {
  return (
    <div className="bg-white p-4 border-b  border-gray flex">
        <button className="text-purple flex items-center">
          <span className="mr-2">
            {" "}
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.70711 0.292893C6.09763 0.683417 6.09763 1.31658 5.70711 1.70711L2.41421 5L5.70711 8.29289C6.09763 8.68342 6.09763 9.31658 5.70711 9.70711C5.31658 10.0976 4.68342 10.0976 4.29289 9.70711L0.292893 5.70711C-0.0976311 5.31658 -0.0976311 4.68342 0.292893 4.29289L4.29289 0.292893C4.68342 -0.0976311 5.31658 -0.0976311 5.70711 0.292893Z"
                fill="#6A3EA1"
              />
            </svg>
          </span>{" "}
          <span>back</span>
        </button>
        <div className=" text-base font-medium w-full text-center">{title}</div>
      </div>
  )
}

export default NotesHeader