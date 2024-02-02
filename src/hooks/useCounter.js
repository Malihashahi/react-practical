import { useState } from "react";

const useCounter=(init, value)=>{
const [count,setCount]=useState(init);
const increment =()=>{
  setCount(count+value)
}
const decrement =()=>{
  setCount(count-value)
}
const reset =()=>{
  setCount(0)
}
return[count,increment,decrement,reset]
}

export default useCounter;