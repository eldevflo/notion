import React from 'react'

function CodeNote({code}:{code: string}) {
  return (
    <div className='p-3 text-sm  bg-secondary-foreground text-white'>
        <code>
            {code}
        </code>
    </div>
  )
}

export default CodeNote