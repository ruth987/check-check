import React from 'react';
import CollectionCard from './CollectionCard';

const Collections = () => {
  // Dummy data for collections
  const collections = [
    {
      id: 1,
      title: 'Collection 1',
      flashcards:[
        {
            id:1,
            question:"What is your name? ",
            answer: "My name is Ruth Wossen."
        },
        {
            id:2,
            question:"What is your age? ",
            answer: "I am 20."
        },
      ],
      description: 'This is the description for Collection 1.',
    },
    {
      id: 2,
      title: 'Collection 2',
      flashcards:[
        {
            id:1,
            question:"What is your name? ",
            answer: "My name is Ruth Wossen."
        },
        {
            id:2,
            question:"What is your age? ",
            answer: "I am 20."
        },
      ],
      description: 'This is the description for Collection 2.',
    },
  ];

  return (
    <div>
        <div className ='flex justify-between px-2 pb-2'>
            <div><h2 className='text-gray-700 text-xl'>Collections</h2></div>
            <div><p className='text-purple-800 text-sm shadow-sm cursor-pointer hover:bg-gray-300 rounded-full w-5/5 p-2'>View all</p></div>

        </div>
        
        <div className="w-full flex">
      {collections.map((collection) => (
        <CollectionCard
          key={collection.id}
          title={collection.title}
          flashcards={collection.flashcards}
          description={collection.description}
        />
      ))}
    </div>

    </div>
    
  );
};

export default Collections;