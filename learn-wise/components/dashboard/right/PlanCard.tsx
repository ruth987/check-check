import React from 'react'
import {FiCheck} from 'react-icons/fi'
import Plan from '../../../Types/plan'

interface PlanCardProps {
    plan: Plan
}


const PlanCard: React.FC<PlanCardProps> = ({ title, description, status, time }) => {
  const statusColor = status ? 'bg-purple-800' : 'bg-gray-500';

  return (
    <>
      <div className="bg-black/5 border border-purple-200 rounded-lg w-full h-24 pl-4 pr-2 flex py-1">
        {/* Icon */}
        <div className={`${statusColor} p-2 rounded-full h-8 w-8`} />
        <FiCheck className="text-white w-5 h-5 pr-1 pb-1" />
      </div>
      <div className="px-4 flex flex-col justify-between">
        {/* Title */}
        <h3 className="text-purple-800 font-medium truncate">{title}</h3>
        {/* Description */}
        <p className="text-gray-500 text-sm">{description}</p>
        {/* Footer */}
        <div className="flex justify-between text-xs text-gray-400">
          <p>{status ? 'Done' : 'Upcoming'}</p>
          <p>{time}</p>
        </div>
      </div>
    </>
  );
};

export default PlanCard;