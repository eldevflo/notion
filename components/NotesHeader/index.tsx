import { useRouter } from 'next/router'
import React from 'react'

function NotesHeader({title , saveData}:{title:string , saveData: <Promise>()=>void}) {
  const router = useRouter()
  return (
    <div className="bg-white p-4 border rounded mb-5  border-gray flex justify-center">

        <div className=" text-base font-medium 
         text-center">{title}</div>
      
      </div>
  )
}

export default NotesHeader