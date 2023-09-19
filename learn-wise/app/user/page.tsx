import React from 'react'
import LeftHeader from '../../components/dashboard/left/LeftHeader'
import MiddlePart from '../../components/dashboard/middle/MiddlePart'
import RightPart from '../../components/dashboard/right/RightPart'

const userPage = () => {
  return (
    <div className = "flex">
      <LeftHeader />
      <MiddlePart />
      <RightPart />

    </div>
  )
}

export default userPage