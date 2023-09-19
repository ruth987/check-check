import React from 'react'
import {BsSearch} from 'react-icons/bs'
const SearchBar = () => {
  return (
    <div className='relative flex w-full px-2 bg-black/10 rounded-lg h-10 text-gray-500'>
        <div className = 'absolute top-2.5'><BsSearch size={20} /></div>
        <div className = 'pl-8 pt-2.5 text-sm'>
            <input 
                type = "text"
                placeholder = "Search..."
                className = 'bg-transparent outline-none'
                />
        </div>
        
    </div>
  )
}

export default SearchBar