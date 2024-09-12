import React from 'react'

function Rules() {
  return (
    <div className='p-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-[50%] h-[50%] rounded-[50px] bg-red-200'>
      <span className='font-bold text-[30px]'>How to play Dice Game</span>
      <ul>
        <li> If you’re using Tailwind CSS,</li>
        <li> make sure you have the backdrop-filter</li>
        <li> plugin enabled in your Tailwind configuration</li>
        <li> to use backdrop-blur. If not </li>
        <li> you might need to add custom CSS for the blur effect:</li>
      </ul>
    </div>
  )
}

export default Rules