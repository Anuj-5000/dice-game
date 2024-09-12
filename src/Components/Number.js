// import React, { useState } from 'react';

function Number({number,setNumber}) {
    const arr = [1, 2, 3, 4, 5, 6];

    return (
        <>
            <div className='mb-3'>
                {arr.map((item) => {
                    const isSelected = (item === number);
                    return (
                        <span
                            key={item}
                            onClick={() => setNumber(item)}
                            className={`text-[3rem] font-medium px-5 leading-none mx-1
                                ${isSelected ? 'bg-white text-black border-4 border-red-600' : 'bg-black  border-2 border-white'}`}
                        >
                            {item}
                        </span>
                    );
                })}
            </div>
            <div>
                <span className='text-[1.1rem] font-medium float-right mr-4'>Select a Number</span>
            </div>
        </>
    );
}

export default Number;
