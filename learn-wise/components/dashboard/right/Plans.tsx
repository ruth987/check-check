import React from 'react'

import PlanCard from './PlanCard';

const plans = [
  {
    id: 1,
    title: 'Learn React',
    description: 'Finish React course on Scrimba', 
    status: true,
    time: '2 hrs'
  },
  {
    id: 2,
    title: 'Read Chapter 5',
    description: 'Read chapter 5 of design patterns book',
    status: false, 
    time: '1 hr'
  },
  {
    id: 3,
    title: 'DMV Appointment',
    description: 'Renew driver license at DMV',
    status: false,
    time: '1 hr 30 mins' 
  },
  {
    id: 4,
    title: 'Read Chapter 5',
    description: 'Read chapter 5 of design patterns book',
    status: true, 
    time: '1 hr'
  },
]

export default function Plans() {

  return (
    <>
    <div><h2 className='text-gray-700 text-xl py-3'>My Plans</h2></div>
    <div className="flex gap-4 flex-wrap">
      {plans.map(plan => (
        <PlanCard 
          key={plan.id}
          {...plan} 
        />
      ))}
    </div>
    </>
    
  )

}