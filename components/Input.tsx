import React from 'react'
import { InputProps } from '../types'

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ errorMessage, ...otherProps }, ref) => {
  return (

    <div className={'p-2'}>
      <input
        className={`px-2 py-4 w-full border-b placeholder:text-[15px] ${errorMessage ? 'border border-red-500 focus:outline-red-500' : ''}`}
        ref={ref}
        {...otherProps}
      />
      {

        errorMessage ?
          <p className={'text-red-500 p-2'}>{errorMessage}</p>
          :
          null
      }
    </div>
  )
})

Input.displayName = 'Input'

export default Input
