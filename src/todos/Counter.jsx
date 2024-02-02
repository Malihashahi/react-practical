import React from 'react';
import useCounter from '../hooks/useCounter';

const Counter = () => {
  const [count1,incerement1,decrement1,reset1]=useCounter(2,4)
  return (
    <div className='text-center my-3 '>
       <h3 className='text-center text-info'>{count1}</h3>
       <button onClick={incerement1} className='btn btn-success'>افزایش</button>
       <button onClick={decrement1} className='btn btn-danger'>کاهش</button>
       <button onClick={reset1} className='btn btn-secondary'>ریست</button>
    </div>
  );
}

export default Counter;
