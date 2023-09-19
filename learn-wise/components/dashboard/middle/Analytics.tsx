import React from 'react'
import LineGraph from './LineGraph'
import {BsCircle} from 'react-icons/bs'

const Analytics = () => {
  return (
    <div className= "flex w-full h-[300px] space-x-5">
        <div className = 'w-2/3'>
            <LineGraph />
        </div>
        <div className = 'w-1/3 space-y-1'>
            <h4 className='text-3xl text-purple-800 font-semibold'>30 <span className='text-lg text-gray-700'>min</span></h4>
            <p className='pb-3 text-gray-600 text-sm'>On average spent per day</p>
            <ul className="list-none p-0 space-y-2">
                <li className="flex items-center">
                    <span className="mr-2">
                    <BsCircle className="bg-purple-800 rounded-full text-purple-900" />
                    </span>
                    <span className='text-gray-700'>Reading</span>
                </li>
                <li className="flex items-center">
                    <span className="mr-2">
                    <BsCircle className="bg-blue-800 rounded-full text-blue-900" />
                    </span>
                    <span className='text-gray-700'>Chatbot</span>
                </li>
                <li className="flex items-center">
                    <span className="mr-2">
                    <BsCircle className="bg-gray-800 rounded-full text-gray-900" />
                    </span>
                    <span className='text-gray-700'>Flashcards</span>
                </li>
            </ul>

        </div>
        



    </div>
  )
}

export default Analytics