import { useState } from "react";
interface Props{
  
    className:string
}

const FlashIcon=( {className}:Props)=> {
    const[mouseover,setMouseover]=useState(false)
    return (   
<svg   fill={mouseover? "#fd6e54":"#00000"}
onMouseOver={()=>setMouseover(true)}
onMouseLeave={()=>{setMouseover(false)}}
className={className}
 
id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 305.98 340.57"><title>Untitled-2</title><path d="M323.46,203.93H47v-7.86H323.46c-49.59-16-143.86-60.31-143.86-166.36h7.61c0,130,149.42,163.15,165.69,166.36H353v7.86h-.09c-16.27,3.21-165.69,36.34-165.69,166.36H179.6C179.6,264.24,273.87,219.92,323.46,203.93Z" transform="translate(-47.01 -29.71)"/></svg>
         );
}
 
export default FlashIcon;