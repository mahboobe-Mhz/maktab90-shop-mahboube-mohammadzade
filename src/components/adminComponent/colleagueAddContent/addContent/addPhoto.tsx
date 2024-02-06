import {Box ,Typography,Input} from '@mui/material'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SegmentIcon from '@mui/icons-material/Segment';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { useState,useRef,useEffect, SetStateAction, Dispatch } from 'react';
import { useSelector } from 'react-redux';
import { storeAppState } from '../../../../redux/slice/appSlice';
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { ClassNames } from '@emotion/react';

interface Props{
  setFormValue: any
 formValue:{
        name:string,
        price:string,
        quantity:string,
        brand:string,
        description:string,
        thumbnail:any,
        images:string,
        category:string,
        subcategory:string
    }

    register: any
    errors:any
}

const AddPic = ({setFormValue,formValue ,register,errors}:Props) => { 
    const [showImage , setShowImage]=useState<string[]>([]) 
    const [image , setImage]=useState<File[]>([])
    //const hiddenFileInput = useRef<HTMLDivElement | undefined>(undefined);
    const hiddenFileInput = useRef<any>(undefined);
    const appState = useSelector(storeAppState);
    const handleClick = ()=> {
        hiddenFileInput.current?.click();
      };
    const handleImageSelect =(event :React.ChangeEvent<HTMLInputElement>)=>{
        if(event.target.files){
             const filesArray=Array.from(event.target.files).map((file)=>URL.createObjectURL(file)) 

             setShowImage(filesArray)        
            setImage([...image,...Array.from(event.target.files)])   

               }             
    }


    useEffect(()=>{
        setFormValue({...formValue,images:image})   
    },[image])
//handel edit
useEffect(()=>{
        const editImage= appState.selectEditData?.images.map((item:string)=>`http://localhost:8000/images/products/images/${item}`) 
         setShowImage(editImage)
  },[appState.isEdit])
  const handleDeleteImage =(e:any)=>{
const newImageArray=showImage.filter((item:string)=>item !== e.currentTarget.id)
setShowImage(newImageArray)
const deleteIndex=showImage.findIndex((item:string)=> item === e.currentTarget.id)
const newImageFile =image.filter((item:any,index:number)=> index !== deleteIndex)
 setImage(newImageFile)
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
        <input onChange={handleImageSelect}    
          ref={hiddenFileInput}  

                    id="images"
                    name="images"
                    type="file"
                    className="sr-only"
                    multiple/>

       
        <AddAPhotoIcon sx={{border:"solid", borderColor:"secondary.main", color:"secondary.main",width:100, height:100,padding:2, borderRadius:"10px"}}/> 
       
        </div>
     
        <Box sx={{display:"flex", gap:"10px" , overflowX:"scroll", paddingBottom:"10px"}}>
        {showImage && showImage.map((item:string)=>
        <Box sx={{position:"relative",  bgcolor:"black", borderRadius:"10px"}}  className="photoClass" >
     <Box sx={{position:"relative" }}  className="boxClass" >
     <img key={item} src={item} width="150px"style={{overflow:"hidden",borderRadius:"10px" }} />

     </Box>
  
        <DeleteOutlineOutlinedIcon id={item} onClick={handleDeleteImage} sx={{position:"absolute", top:"70%", right:"40%", color:"white", ":hover":{cursor:"pointer"} , opacity:"0"} }
        className="deleteClass"       
        />
                     
        </Box>
    
        
        )
      } 
        </Box>
  
    </Box>

 </Box>
        <Box></Box>
    
       
    </Box > );
}
 
export default AddPic;