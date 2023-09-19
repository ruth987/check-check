import React from 'react'
import {GiEarthAfricaEurope} from 'react-icons/gi'
import Image from 'next/image'
import {HiHome} from 'react-icons/hi'
import { MdCollectionsBookmark} from 'react-icons/md'
import {FaTasks} from 'react-icons/fa'
import {MdOutlineSettings} from 'react-icons/md'
import {MdDarkMode} from 'react-icons/md'
import {BsSun} from 'react-icons/bs'
import {BsFillChatDotsFill} from 'react-icons/bs'
import profile from '../../../assets/images/profile.jpeg'

const headerIcons = [
    {
        index: 0,
        icon: <HiHome />,
        name: "Home"
    },
    {
        index: 1,
        icon: <MdCollectionsBookmark />,
        name: "Collections"
    },
    {
        index: 2,
        icon: <FaTasks />,
        name: "Plans"
    },
    {
        index:3,
        icon: <BsFillChatDotsFill/>,
        name: "Chat"
    },
    {
        index: 4,
        icon: <MdOutlineSettings />,
        name: "Settings"
    }

];

const LeftHeader = () => {
  return (
    <div className='h-screen m-2 bg-gray-200 text-black w-[15%] rounded-lg flex flex-col space-y-1'>
        {/* logo */}
        <div className='transition duration-200 mx-auto py-2 text-purple-800 cursor-pointer hover:bg-gray-300 rounded-full p-1'>
            <GiEarthAfricaEurope size = {30} />
        </div>
        {/* profile */}
        <div className='text-center py-5 cursor-pointer'>
            <div className=' pb-3 '>
                <Image 
                    src={profile}
                    alt='profile pic'
                    width={80}
                    height={80}
                    className=' w-16 h-16 mx-auto rounded-full ring-purple-800 ring-2 object-cover object-center'
            />

            </div>
            
            <h4 className='text-gray-700 text-lg font-semibold'>Ruth Wossen</h4>
            <p className='text-gray-500 text-sm'>Student</p>
            

        </div>
        {/* headers */}

        <div className='flex flex-col mx-auto space-y-2 pb-16'>
            {
                headerIcons.map((icon, index) => (
                    <div key={index} className='flex items-center space-x-2 px-4 py-2 rounded-full w-fit hover:bg-gray-300 cursor-pointer transition duration-200'>
                        {icon.icon}
                        <span className='text-gray-700 font-semibold'>{icon.name}</span>
                    </div>))
            }
        </div>
        {/* dark mode */}
        <div className="mx-auto flex items-center space-x-1 border border-1 border-gray-900 bg-gray-800 rounded-full">
        <div className="rounded-full flex items-center justify-center bg-gray-300 w-10 h-10">
            <BsSun className="text-gray-500" />
        </div>
        <div className="rounded-full flex items-center justify-center bg-gray-800 w-10 h-10">
            <MdDarkMode className="text-white " />
        </div>
        </div>

    </div>
  )
}

export default LeftHeader