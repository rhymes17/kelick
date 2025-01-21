import React from 'react'

interface ProgressBarProps {}

export const ProgressBar: React.FC<ProgressBarProps> = () => {
  return (
    <div className='w-full min-h-2 rounded-md bg-gray-100'>
        <div className='w-[20%] h-full bg-brand-active rounded-md'></div>
    </div>
  )
}
