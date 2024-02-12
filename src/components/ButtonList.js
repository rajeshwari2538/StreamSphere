import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const list = ["All","Mixes","Live","Gaming","Melodies","Recently Uploaded","Watched","New to you","Movies","Cricket","Music"]

  return (
    <div className='flex'>
      {list.map((item,i) => (
        <Button key={i} name={item}/>
      ))}
    </div>
  )
}

export default ButtonList