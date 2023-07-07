import { Note } from '@/types/notes'
import React from 'react'
import ParagraphNode from '../ParagraphNote'
import ListNote from '../listNote'
import CheckListNote from '../checkListNote';
import NoteItem from '../NoteItem';

function NotesList({notes}:{notes: Note[]}) {  
  return (
    <div className='grid   gap-5 w-full grid-auto-fit-sm	'>
      {
        notes.map((note) =>(
          <div key={note.id} className='w-full'>
           <NoteItem noteItem={note} key={note.id} />
          </div>
        ))
      }
    </div>
  )
}

export default NotesList