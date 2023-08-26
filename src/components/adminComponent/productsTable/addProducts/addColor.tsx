import {Box ,Typography} from '@mui/material'
import { useState } from 'react';



const AddColor = ()=> {
  const [showImage , setShowImage]=useState<string[]>([])
  const handleImageSelect =(event :React.ChangeEvent<HTMLInputElement>)=>{
    if(event.target.files){
         const filesArray=Array.from(event.target.files).map((file)=>URL.createObjectURL(file)) 
        setShowImage(filesArray)         
  
           }
        
}



    return (  <Box sx={{
        bgcolor:"#ffff" , borderRadius:"20px", marginTop:1, paddingBottom:4
    }}>
        <Box sx={{display:"flex", justifyContent:"space-between", padding:1.5,borderBottom:"solid", borderColor:"secondary.light"}}> 
            <Typography> رنگ / جنس</Typography>
        </Box>
        <Box padding={1.5} display={'flex'} gap={2} sx={{flexWrap:"wrap"}}>
        <input
                    onChange={handleImageSelect}
                    id="images"
                    name="images"
                    type="file"
                 
                    multiple/>
                    {showImage&&showImage.map((item:string)=>  <img key={item} src={item} width="50px"style={{overflow:"hidden",borderRadius:"10px" }} />)}
        </Box>
       </Box> );
}
 
export default AddColor;