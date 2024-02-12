import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-3 py-2 rounded-lg mx-2 mt-5 bg-gray-200'>{name}</button>
    </div>
  )
}

export default Button