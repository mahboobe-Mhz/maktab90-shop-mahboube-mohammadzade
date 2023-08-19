import { useState } from "react";
interface Props{
    className:string
}

const PersonIcon=({className}:Props)=> {
    const[mouseover,setMouseover]=useState(false)
    return (   
<svg height={18} fill={mouseover? "#fd6e54":"#00000"}
onMouseOver={()=>setMouseover(true)}
onMouseLeave={()=>{setMouseover(false)}}
 className={className}
 id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300.53 313.05"><title>پروفایل</title><path d="M251.8,215.65a93.91,93.91,0,1,0-103.6,0c-57.37,21.17-98.46,76.24-98.46,140.87h25a125.22,125.22,0,0,1,250.44,0h25C350.26,291.89,309.17,236.82,251.8,215.65ZM200,206.26a68.87,68.87,0,1,1,68.87-68.87A68.94,68.94,0,0,1,200,206.26Z" transform="translate(-49.74 -43.48)"/></svg>
         );
}
 
export default PersonIcon;