import { Note } from '@/types/notes'
import React from 'react'
import NoteItem from '../NoteItem';

function NotesList({notes}:{notes: Note[]}) {  
  return (
    <div className='flex gap-5 flex-wrap w-full grid-auto-fit-sm	'>
      {
        notes.map((note) =>(
          <div key={note.id} className='w-full max-w-[300px]'>
           <NoteItem noteItem={note} key={note.id} />
          </div>
        ))
      }
    </div>
  )
}

export default NotesList