import React from 'react'

const Nav = () => {
  return (
    <div className = 'flex justify-between w-full px-4 py-3'>
        <div className = 'text-3xl font-semibold'>Hello Ruth</div>
        <div className = 'flex space-x-5 px-2'>
            <button className = 'border border-1 rounded-full bg-black/5 hover:bg-black/10 transition duration-100 w-4/5 text-md font-light p-2'>Following</button>
            <button className = 'border border-1 rounded-full bg-black/5 hover:bg-black/10 transition duration-100 w-4/5 text-md font-light p-2'>Followers</button>
        </div>

    </div>
  )
}

export default Nav