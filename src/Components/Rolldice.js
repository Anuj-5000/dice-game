import React, { useState } from 'react'
import Rules from './Rules';

function Rolldice({err,getNumber,getRandomNumber,reset}) {
  const [rule,setRule]=useState(false);

  const toggle =()=>{
    setRule(prev => !prev);
   };

  return (
    
    <div className='flex flex-col justify-center items-center'>
        <div className="my-3" onClick={getRandomNumber}>
           <img  className='w-[13rem] h-[13rem] border-2 border-white rounded-[25px]'  src={`./Images/${getNumber}.jpg`}  alt='img'/>
        </div>
        {
          <p className='text-white font-medium'>Click on Dice to Roll</p>
        }
        
        <button onClick={reset} className='text-white font-medium px-20 py-3 bg-blue-600 rounded-md mt-2'>RESET</button>
        <button onClick={toggle} className='text-white font-medium px-20 py-3 bg-green-600 rounded-md mt-3'>RULES</button>
        {
          rule && <Rules/>
        }
    </div>
  )
}

export default Rolldice