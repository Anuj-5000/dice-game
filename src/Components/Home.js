import React from 'react'

function Home({handleHome}) {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-[80%] h-[70%] flex items-cemter justify-between'>
        <div className='w-1/2'>
           <img className='object-cover' src='./Images/bg.png' alt='img'></img>
        </div>
    
        <div className='flex items-center text-white'>
            <div>
                <h1 className='text-[5.5rem] font-semibold mr-4'>DICE GAME</h1>
                <button onClick={handleHome} className='ml-[50%] -translate-x-[50%] px-6 py-3 bg-blue-700 rounded-[15px] font-medium'>PLAY NOW</button>
            </div>
        </div>
    </div>
  )
}

export default Home