import React from 'react'

function ParagraphNode({text , heading}:{
    text: string
    heading?: string
}) {
  return (
    <div className='rounded-lg text-white bg-[#bcbeff40] h-[300px]	'>
     
      <div dangerouslySetInnerHTML={{
        __html: text
    }} className='text-black p-3'/>
    </div>
        
  )
}

export default ParagraphNode