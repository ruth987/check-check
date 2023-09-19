import React from 'react';
import Image from 'next/image'
import { BsCircle } from 'react-icons/bs';
import cardbg from "/assets/images/cardbg1.svg";
import Collection from '@/Types/collection';

interface CollectionCardProps {
    collection: Collection
}

const CollectionCard:React.RF<CollectionCardProps> = ({title, flashcards, description}) => {

  return (
    <div className="bg-purple-600 bg-opacity-20 rounded-lg border border-purple-200 relative overflow-hidden w-1/2 h-[250px]">
      
      {/* SVG Background */}
      <Image
        src={cardbg}
        alt="Card Background"
        layout="fill"
        objectFit="cover"
        className="opacity-90"
      />
      
      <div className="relative p-4">
      
        <h2 className="text-xl font-bold text-gray-100">{title}</h2>
        
        <p className="text-gray-300 mt-2">{description}</p>
        
        <div className="bg-white/70 text-purple-900 text-lg  w-12 h-12 rounded-full flex items-center justify-center absolute top-4 right-4">
          {flashcards.length}
        </div>
        
      </div>

      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-purple-600 bg-white/10 opacity-0 hover:opacity-100 transition duration-300">
        
        <button className="text-purple-800 bg-white font-bold text-purple tracking-widest rounded-lg absolute left-1/2 top-1/2 px-8 py-3 -translate-x-1/2 -translate-y-1/2">
          View
        </button>
        
      </div>
      
    </div>
  )
}

export default CollectionCard