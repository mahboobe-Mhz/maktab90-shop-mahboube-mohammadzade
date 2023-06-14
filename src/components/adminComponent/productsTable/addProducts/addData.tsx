import {Box ,Typography,TextField} from '@mui/material'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"; 
import { CKEditor } from "@ckeditor/ckeditor5-react"; 
import { setProductsModal, storeAppState } from "../../../../redux/slice/appSlice";
import { useDispatch, useSelector } from "react-redux";
import NewDataModal from './newInfo';
import { Products } from '../../../../api/interface/products';
interface Props{
  setFormValue:any
  formValue:any
}

const AddData = ({setFormValue,formValue}:Props) => {
  const dispatch = useDispatch();
    const openModal =()=>{  
      dispatch(setProductsModal({ModalInfoProducts: true })
      )
    }
 const addData=(event:React.ChangeEvent<HTMLInputElement>)=>{
  setFormValue({...formValue,name:event.currentTarget.value})
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
      <TextField onChange={addData} dir={"rtl"} sx={{width:"60%"}} label="عنوان*" variant="standard"  />
      <TextField  sx={{width:"30%"}} label="روبان" variant="standard" helperText="به عنوان مثال: فروش ویژه" />
      
    </Box>
    <Box >
    <CKEditor 
  
        editor={ClassicEditor} 
        data={"این محصول..."} 
        onChange={(event, editor) => { 
          const value = editor.getData(); 
          console.log(value);
          
          setFormValue({...formValue,description:value})
        }} 
      /> 
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