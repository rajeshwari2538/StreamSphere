import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Header = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler=() => {
     dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col p-2 shadow-lg'>
        <div className='flex col-span-1 mx-2'>
            <img 
            alt='menu'
            src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp'
            className='h-8 cursor-pointer'
            onClick={()=> toggleMenuHandler()}
            />
            <img 
            alt='youtube-icon'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/640px-YouTube_Logo_2017.svg.png'
            className='h-8 mx-2'
            />
        </div>
        <div className='col-span-10 ml-[20%]'>
            <input
            type='text'
            className='w-1/2 border border-gray-500 rounded-l-full p-2 shadow-md'
            />
            <button className='border border-gray-500 p-2 rounded-r-full px-4 bg-gray-100 shadow-md'>Search</button>
        </div>
        <div className='col-span-1'>
            <img 
            alt='user'
            src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
            className='h-10'
            />
        </div>
    </div>
  )
}

export default Header