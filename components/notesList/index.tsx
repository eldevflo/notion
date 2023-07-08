import { Note } from '@/types/notes'
import React from 'react'
import NoteItem from '../NoteItem';
import Link from 'next/link';

function NotesList({notes}:{notes: Note[]}) {  
  
  return (
    <div className='flex gap-5 flex-wrap w-full grid-auto-fit-sm	'>
      {
        notes.map((note) =>(
          <div key={note.id} className='w-full max-w-[300px]'>
            <Link href={`notes/${note.id}`}>
           <NoteItem noteItem={note} key={note.id} />
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default NotesList