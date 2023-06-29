import {Box ,Typography,TextField} from '@mui/material'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"; 
import { CKEditor } from "@ckeditor/ckeditor5-react"; 
import { setEditData, setProductsModal, storeAppState } from "../../../../redux/slice/appSlice";
import { useDispatch, useSelector } from "react-redux";
import NewDataModal from './newInfo';
import {useState,useEffect} from 'react'
import { Products } from '../../../../api/interface/products';
import { Controller } from 'react-hook-form';
interface Props{
  setFormValue:any
  formValue:any
  control:any
  register:any
  errors:any
}

const AddData = ({setFormValue,formValue, control,register,errors}:Props) => {
  
  const [description, setDescription]=useState("")
  const dispatch = useDispatch();
  const appState = useSelector(storeAppState);
    const openModal =()=>{  
      dispatch(setProductsModal({ModalInfoProducts: true })
      )
    }




    return (  
        <Box  sx={{
        bgcolor:"#ffff" , borderRadius:"20px", marginTop:2}}>
          <NewDataModal/>
             <Box sx={{display:"flex", justifyContent:"space-between", padding:1.5,borderBottom:"solid", borderColor:"secondary.light"}}> 
            <Typography> اطلاعات محصول</Typography>
            <Box sx={{display:"flex", gap:"10px"}}>
            <HelpOutlineIcon/>
           
     </Box>
     </Box>
        <Box sx={{borderBottom:"solid", borderColor:"secondary.light"}}>
        <Box dir="rtl" display={"flex"} justifyContent={"space-between"}  padding={1.5} >
          <Box sx={{display:"flex",flexDirection:"column", width:"100%"}}>
          <TextField {...register("name",{ required: true })}  type='text' dir={"rtl"} sx={{width:"60%"}} label="عنوان*" variant="standard"  />
      {errors.name?.type === 'required' && <p style={{color:'red',fontSize:"10px"}} role="alert">نام محصول را وارد کنید</p>}
          </Box>
 
      <TextField  sx={{width:"30%"}} label="روبان" variant="standard" helperText="به عنوان مثال: فروش ویژه" />
   
    </Box>

    <Box >
    <Controller
        name="description"
        control={control}
        rules={{ required: true }}
        render={({ field:{value,onChange,name} }) =>
         <CKEditor 
        editor={ClassicEditor} 
        data={value} 
          onChange={(event, editor) => {  const value = editor.getData(); 
          onChange(value)
          }}

   />}
      />
        {errors.description && <p style={{color:'red',fontSize:"10px",paddingRight:"5px"}}>   درباره محصول خود چیزی بنویسید</p>}
    </Box>
    
        </Box>
        <Box padding={1.5} sx={{display:"flex" , flexDirection:"column", gap:"15px"}}>
            <Typography> بخش اطلاعاتی اضافی</Typography>
            <Typography fontSize={12} color={"black"}>با مشتریان خود اطلاعاتی مانند سیاست بازگشته و دستورالعمل مراقبت را به اشتراک بزارید</Typography>
            <Typography onClick={openModal} color={"secondary.main"}>+ افزودن بخش جدید</Typography>
    </Box>
    </Box> );
}
 
export default AddData;