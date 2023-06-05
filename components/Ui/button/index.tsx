import React from 'react'
import ArrowRight from '../../icons/ArrowRight'
const buttonWidths = {
  full: '328px',
  lg: '198px',
  md: '221px',
  sm: '182px',
}
export interface ComponentProps {
  hasLeftSideArrow?: boolean
  hasRightSideArrow?: boolean
  backgroundColor: 'none' | 'white' | 'purple' | 'purple-dark' | 'gray' | 'purple-light' | 'dark-gray'
  textColor?: 'white' | 'purple' | 'purple-dark' | 'black'
  border?: 'purple' | 'purple-dark' | 'black' | 'gray'
  text: string
  width?: 'full' | 'lg' | 'md' | 'sm'
  onClick?: () => void
  type?: 'button' | 'reset' | 'submit'
}
function Button({
  hasLeftSideArrow,
  hasRightSideArrow,
  backgroundColor,
  textColor,
  border,
  text,
  width,
  onClick,
  type,
}: ComponentProps) {
  const className = `flex justify-center items-center h-[54px] rounded-full py-4 px-5 ${
    hasLeftSideArrow ? 'flex-row-reverse' : ''
  } ${
    buttonWidth(width) +
    ' ' +
    ButtonTextColor(textColor) +
    ' ' +
    buttonBackgroundColor(backgroundColor) +
    ' ' +
    buttonBorderColor(backgroundColor)
  } `
  return (
    <button className={className} onClick={onClick} type={type || 'button'}>
      {hasLeftSideArrow || hasRightSideArrow ? (
        <span className={`${width !== 'full' && width ? 'mr-2' : hasRightSideArrow ? 'mr-auto' : 'ml-auto'}`}>
          <ArrowRight color={textColor} />
        </span>
      ) : null}
      <span className={`${width !== 'full' && width ? '' : hasLeftSideArrow ? 'ml-auto' : 'mr-auto'}`}>{text}</span>
    </button>
  )
}

export default Button
const buttonWidth = (width: ComponentProps['width']) => {
  switch (width) {
    case 'full':
      return 'w-[328px]'
    case 'lg':
      return 'w-[198px]'
    case 'md':
      return 'w-[221px]'
    case 'sm':
      return 'w-[182px]'
    default:
      return 'w-[328px]'
  }
}
const ButtonTextColor = (textColor: ComponentProps['textColor']) => {
  switch (textColor) {
    case 'purple':
      return 'text-purple'
    case 'white':
      return 'text-white'
    case 'black':
      return 'text-black'
    case 'purple-dark':
      return 'text-purple-dark'
    default:
      return 'text-white'
  }
}
const buttonBackgroundColor = (backgroundColor: ComponentProps['backgroundColor']) => {
  switch (backgroundColor) {
    case 'purple':
      return 'bg-purple'
    case 'dark-gray':
      return 'bg-dark-gray'
    case 'gray':
      return 'bg-gray'
    case 'purple-dark':
      return 'bg-purple-dark'
    case 'purple-light':
      return 'bg-purple-light'
    case 'white':
      return 'bg-white'
    case 'none':
      return 'bg-transparent'
  }
}
const buttonBorderColor = (backgroundColor: ComponentProps['backgroundColor']) => {
  switch (backgroundColor) {
    case 'purple':
      return 'border-purple'
    case 'dark-gray':
      return 'border-dark-gray'
    case 'gray':
      return 'border-gray'
    case 'purple-dark':
      return 'border-purple-dark'
    case 'purple-light':
      return 'border-purple-light'
    case 'white':
      return 'border-purple'
    case 'none':
      return 'bg-transparent'
  }
}
