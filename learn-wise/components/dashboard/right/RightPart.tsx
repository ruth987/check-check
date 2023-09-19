import React from 'react'
import SearchBar from './SearchBar'
import Plans from './Plans'

const RightPart = () => {
  return (
    <div className = 'w-[25%] m-2 bg-gray-200 rounded-lg flex flex-col space-y-1 px-2 py-2'>
        <SearchBar />
        <Plans />

    </div>
  )
}

export default RightPart