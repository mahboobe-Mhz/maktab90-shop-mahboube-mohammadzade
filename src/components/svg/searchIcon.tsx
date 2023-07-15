import { useState } from "react";


const SearchIcon=()=> {
    const[mouseover,setMouseover]=useState(false)
    return (   
<svg height={18} fill={mouseover? "#fd6e54":"#00000"}
onMouseOver={()=>setMouseover(true)}
onMouseLeave={()=>{setMouseover(false)}}
 
id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 262.96 264.91"><title>Untitled-2</title><path d="M181.9,67.55A113.38,113.38,0,1,0,247.81,273.1l3.56-2.55,58.14,58.13a12.87,12.87,0,0,0,18.2-18.21h0l-57.89-57.89,2.69-3.58a112.29,112.29,0,0,0,22.78-68.07A113.51,113.51,0,0,0,181.9,67.55Zm0,201a87.64,87.64,0,1,1,87.64-87.64A87.74,87.74,0,0,1,181.9,268.57Z" transform="translate(-68.52 -67.55)"/></svg>
         );
}
 
export default SearchIcon;