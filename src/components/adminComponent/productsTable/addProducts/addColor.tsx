import {Box ,Checkbox,FormControlLabel,FormGroup,Typography} from '@mui/material'
import { useState } from 'react';
import { Controller } from 'react-hook-form';



const AddColor = ()=> {
  const [showImage , setShowImage]=useState<string[]>([])
  const handleImageSelect =(event :React.ChangeEvent<HTMLInputElement>)=>{
    if(event.target.files){
         const filesArray=Array.from(event.target.files).map((file)=>URL.createObjectURL(file)) 
        setShowImage(filesArray)         
  
           }
        
}

 const colorArray=[{name:"قرمز", photo:"https://about.canva.com/wp-content/uploads/sites/8/2019/03/red.png"},{name:"زرد", photo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEX6+jNOqqP9AAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII="},{name:"سبز", photo:"https://img.freepik.com/premium-photo/abstract-mint-green-gradient-background-empty-space-studio-room-display-product_8466-17.jpg"}]

    return ( 
    //      <Box sx={{
    //     bgcolor:"#ffff" , borderRadius:"20px", marginTop:1, paddingBottom:4
    // }}>
    //     <Box sx={{display:"flex", justifyContent:"space-between", padding:1.5,borderBottom:"solid", borderColor:"secondary.light"}}> 
    //         <Typography> رنگ / جنس</Typography>
    //     </Box>
    //     <Box padding={1.5} display={'flex'} gap={2} sx={{flexWrap:"wrap"}}>
    //     <input
    //                 onChange={handleImageSelect}
    //                 id="images"
    //                 name="images"
    //                 type="file"
                 
    //                 multiple/>
    //                 {showImage&&showImage.map((item:string)=>  <img key={item} src={item} width="50px"style={{overflow:"hidden",borderRadius:"10px" }} />)}
    //     </Box>
    //    </Box> 
    <Box sx={{
            bgcolor:"#ffff" , borderRadius:"20px", marginTop:1, paddingBottom:4
         }}>
          <Box sx={{display:"flex", justifyContent:"space-between", padding:1.5,borderBottom:"solid", borderColor:"secondary.light"}}> 
             <Typography> رنگ / جنس</Typography>
        </Box>
        <Box>
        <FormGroup sx={{marginTop:"10px" , display:"flex", gap:"2px",position: 'flex', flexDirection: 'row', justifyContent: 'right', alignItems:'center'}}>
        {
        colorArray.map((item:any)=> <FormControlLabel control={  <Checkbox    sx={{ backgroundImage:`url(${item.photo})`,
            '&, &.Mui-checked': {
              color: 'secondary.main',
            },marginLeft:"2px"
          }} />} label={item.name} />)
       }

    </FormGroup>
    
        </Box>
    </Box>
       
       );
}
 
export default AddColor;