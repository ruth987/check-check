import React from 'react'
import Nav from './Nav'
import Analytics from './Analytics'
import Collections from './Collections'


const MiddlePart = () => {
  return (
    <div className = 'w-[60%] bg-gray-200 rounded-lg m-2 px-1 py-2 '>
        <Nav />
        <Analytics />
        <Collections />
    </div>
  )
}

export default MiddlePart