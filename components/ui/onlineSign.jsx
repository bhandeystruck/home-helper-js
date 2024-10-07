import React from 'react'

function OnlinePulse({ size = 'sm' }) {
  const sizeClasses = {
    sm: 'h-2 w-2',
    md: 'h-3 w-3',
    lg: 'h-4 w-4'
  }

  return (
    <span className="relative flex">
      <span
        className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 ${sizeClasses[size]}`}
      ></span>
      <span
        className={`relative inline-flex rounded-full bg-green-300 ${sizeClasses[size]}`}
      ></span>
    </span>
  )
}

export default OnlinePulse