import { useRouter } from 'next/router'
import React from 'react'

function NotesHeader({title , saveData}:{title:string , saveData: <Promise>()=>void}) {
  const router = useRouter()
  return (
    <div className=" p-4 border rounded mb-5  sticky top-0 bg-light-gray flex justify-center items-center">

        <div className=" text-base font-medium 
         text-center">{title}</div>
        <button className=" text-primary rounded w-16 flex justify-center items-center text-center ml-auto  text-lg  font-medium 
         text-center " onClick={()=>saveData()}>save</button>
      </div>
  )
}

export default NotesHeader