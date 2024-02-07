import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ClearIcon from '@mui/icons-material/Clear';
import { FormControlLabel, TextField } from '@mui/material';

interface Props{
    open:boolean,
    setOpen:(open:boolean)=>void
    editCat:{name:string,   subCat: string[];}
    editFlag:boolean,
    catPic:string

}
const style = {
  position: 'absolute',
  top: '10%',
 left:{
  lg: '30%',
  md:"30%",
  sm: '30%',
  xs:'10%'
 },
  width: {
    xl:500,
    xs:300

  },
  bgcolor: 'white',
  borderRadius:3,

};

export default function CategoryModal({open,setOpen, editCat,editFlag, catPic}:Props) {
const [addSubCat,setAddSubCat]= React.useState<string[]>([]);
const [bannerImage, setBannerImage]=React.useState<string>()
const[catName , setCatName]=React.useState<string>("")

  const handleClose = () => setOpen(false);
React.useEffect(()=>{
  const subCatArray:string[]=[]
editCat.subCat?.map((item:any)=>subCatArray.push(item.name))

  setCatName(editCat.name)
  setAddSubCat(subCatArray)
  setBannerImage(catPic)
  
},[editCat])

const handleBannerSelect =(event :React.ChangeEvent<HTMLInputElement>)=>{
  if(event.target.files){
       const filesArray=Array.from(event.target.files).map((file)=>URL.createObjectURL(file)) 
       setBannerImage(filesArray[0])      
       console.log(filesArray);
                
         } }

  return (
    <div dir='rtl'>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
       <Box >
        <Box sx={{display:"flex",justifyContent:"space-between", bgcolor:"secondary.main", 
        color:"white", paddingX:"10px", paddingY:"6px",borderStartEndRadius:"10px",
         borderStartStartRadius:"10px",}}>
        <ClearIcon onClick={handleClose}/>
            <Typography >  افزودن دسته جدید </Typography>
        </Box>
     <Box sx={{display:"flex", flexDirection:"column",gap:"10px" }}>
        <Box sx={{borderBottom:"solid", borderColor:"secondary.light"}}>  
       {
        editFlag? <TextField onChange={(e)=>setCatName(e.currentTarget.value)} value={catName} sx={{marginX:2 , marginY:2 , width:"90%"}} label="نام دسته" variant="standard" />:
        <TextField onChange={(e)=>setCatName(e.currentTarget.value)} sx={{marginX:2 , marginY:2 , width:"90%"}} label="نام دسته" variant="standard" />
       }
         </Box>
          <Box sx={{display:"flex", flexDirection:"column",gap:"10px", paddingRight:"10px", alignItems:"end" }}>
    <span>  تصویر دسته را اضافه کنید</span>
          <input type="file"   onChange={handleBannerSelect} />
          <img className='w-[150px] mt-3' src={bannerImage}/>
    </Box>
  
 {
  editFlag? <Button onClick={handleClose} sx={{color:"white", bgcolor:"secondary.main",borderRadius:"20px", paddingX:3 ,marginX:10, marginY:2}}>    ویرایش  </Button>:
  <Button onClick={handleClose} sx={{color:"white", bgcolor:"secondary.main",borderRadius:"20px", paddingX:3 ,marginX:10, marginY:2}}>    ثبت  </Button>

 }
       
     </Box>
      
       </Box>
        </Box>
      </Modal>
    </div>
  );
}