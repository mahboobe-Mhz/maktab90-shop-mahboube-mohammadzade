import {Box ,Typography,Input} from '@mui/material'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SegmentIcon from '@mui/icons-material/Segment';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { useState,useRef } from 'react';
interface Props{
    setFormValue:any
    formValue:Products
}

const AddPic = ({setFormValue,formValue}:Props) => {

    const [image , setImage]=useState()
    const hiddenFileInput = useRef(null);
    const handleClick = ()=> {
        hiddenFileInput.current.click();
      };
    const handleImageSelect =(event :React.ChangeEvent<HTMLInputElement>)=>{
        if(event.target.files){
            const filesArray=Array.from(event.target.files).map((file)=>URL.createObjectURL(file))        
            setImage(filesArray)            
             setFormValue({...formValue,images:filesArray})
             setFormValue({...formValue,thumbnail:filesArray})

                  
        }
    }
    return (  <Box sx={{
        bgcolor:"#ffff" , borderRadius:"20px"
    }}>
        <Box sx={{display:"flex", justifyContent:"space-between", padding:1.5,borderBottom:"solid", borderColor:"secondary.light"}}> 
            <Typography> تصاویر</Typography>
            <Box sx={{display:"flex", gap:"10px"}}>
            <HelpOutlineIcon/>
            <SegmentIcon/>
     </Box>
     </Box>
<Box sx={{padding:1.5}}>
    <Box sx={{ marginTop:"10px" , display:"flex", gap:"10px"}}>
        <div className='imageUpload' onClick={handleClick}>
        <input name='image'  ref={hiddenFileInput} type='file' multiple onChange={handleImageSelect}>
        </input>
        <AddAPhotoIcon sx={{border:"solid", borderColor:"secondary.main", color:"secondary.main",width:100, height:100,padding:2}}/> 
        </div>
    
        <Box sx={{display:"flex", gap:"10px" , overflowX:"scroll"}}>
        {image && image.map((item:any)=><img src={item} width={100} />)
      } 
        </Box>
     
    </Box>

 </Box>
        <Box></Box>
    </Box > );
}
 
export default AddPic;