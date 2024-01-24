import React from "react";
import ReactDOM ,{createPortal}from "react";
const Portal =()=>{
return createPortal(
  <div className='modal_base'>
    <div className='modal_box'>
React Portal
    </div>
  </div>,
  document.getElementById("portal-root")
)

}
 export default Portal;