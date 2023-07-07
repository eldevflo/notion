import { Note } from '@/types/notes'
import React from 'react'

function CheckListNote({items  , heading , setNote}:{
    items: {
        text: string,
        checked: boolean
    }[]
    heading?: string
    setNote: React.Dispatch<React.SetStateAction<Note>>
}) {
  return (
        <div className='rounded-lg text-white bg-[#bcbeff40] h-[300px]'>
    
      <div className='text-black p-3'>

      {
        items.map((item , i) =><div key={i}>
            <input  type="checkbox"  className="w-4 h-4 text-purple bg-purple border-purple rounded" onChange={()=>{
              
            }}/>
            <span className='pl-2'>{item.text}</span>
        </div>)
      }

      </div>
    </div>
  )
}

export default CheckListNote