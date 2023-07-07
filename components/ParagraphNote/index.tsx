import React from 'react'

function ParagraphNode({text }:{
    text: string
}) {
  return (
    <div className=''>
      <div dangerouslySetInnerHTML={{
        __html: text
    }} className='text-black p-3'/>
    </div>
        
  )
}

export default ParagraphNode