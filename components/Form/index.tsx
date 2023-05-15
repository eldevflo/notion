import React from 'react'
import Button from '../Button'

export interface ComponentProps {
  inputs: {
    label: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    type?: string
  }[]
  onSubmit: (args?: any) => void
  action: string
}

function Form({ inputs, onSubmit, action }: ComponentProps) {
  return (
    <form action=''>
      {inputs.map((input, i) => (
        <div key={i} className='mt-8'>
          <div className='text-base font-medium mb-3'>{input.label}</div>
          <input
            type={input.type || 'text'}
            placeholder={input.placeholder || ''}
            onChange={(e) => input.onChange(e)}
            className='p-4 border-gray rounded border w-full'
          />
        </div>
      ))}
      <div className='mt-10'>
        <Button text={action} backgroundColor='purple' hasLeftSideArrow type='submit' onClick={onSubmit} />
      </div>
    </form>
  )
}

export default Form
