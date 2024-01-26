import React, { useState } from "react";
import Counter from "./Counter";
const HoverCount=(props)=>{
  const {count ,handleIncreaseCount}=props
  return(
    <div className='text-center w-100'>
      <button className=' btn btn-info' onMouseEnter={handleIncreaseCount}>Count :0 {count}</button>
    </div>
  )
}

export default Counter(HoverCount,4) ;