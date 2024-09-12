import React, { useState } from 'react'
import Number from './Number'
import Rolldice from './Rolldice'


function Game({handleHome}) {

    const [number, setNumber] = useState(0);
    const [getNumber,setGetNumber]=useState(1);
    const [score,setScore]=useState(0);
    const [err,setErr]=useState('');

    const getRandomNumber = () =>{
        if(!number){
            setErr('Select a number');
            return;
        }
        setErr('');
        let x= Math.floor(Math.random() * 6) + 1;
        setGetNumber((prev) => x);

        if(number===x){
            setScore((prev)=>prev+4);
        }else{
            setScore((prev)=>prev-1);
        }
        setNumber(0);
    }

    const reset=()=>{
        setScore(0);
        setGetNumber(1);
    }

  return (
    <>
        <div className='text-white font-semibold'>
           <button onClick={handleHome} className='mx-[10%] mt-[1%] px-3 py-1 bg-red-700 rounded-lg'>RETURN TO HOME</button>
        </div>
        <div className='mx-[10%] mt-[1%]  flex items-center justify-between text-white'>
            <div className='border-2 border-white flex flex-col justify-center items-center'>
                <span className='text-[6rem] font-medium px-5 leading-none'>{score}</span>
                <span>Total score</span>
            </div>
            <div>
                <Number number={number} setNumber={setNumber}/>
            </div>
        </div>
        <div>
        <p className='absolute right-[200px] text-red-600 float-right font-semibold text-3xl'>{err}</p>
            <Rolldice err={err} getNumber={getNumber} getRandomNumber={getRandomNumber} reset={reset}/>
        </div>
    </>
  )
}

export default Game