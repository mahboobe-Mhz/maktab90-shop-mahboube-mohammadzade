import {Box ,Typography,Button, TextField} from '@mui/material'
import {useState,useEffect} from 'react'
import AddData from './addName';
import useAddNewProduct from '../../../../api/services/products/useAddNewProduct';
import { useDispatch, useSelector } from 'react-redux';
import {setEditId, setErrorMessage, setIsEditing, storeAppState } from '../../../../redux/slice/appSlice';
import { instance } from '../../../../api/constants';
import { useNavigate } from 'react-router';
import { routes } from '../../../../routes';
import { useForm } from "react-hook-form";
import AddPic from './addPhoto';
interface Props{
    open:boolean,
    setOpen:(open:boolean)=>void
}

const ColleagueAddContents = ({open , setOpen}:Props) => {
    const dispatch= useDispatch()
    const navigate= useNavigate()
    const appState = useSelector(storeAppState);
    const [resetForm,setResetForm]=useState(false)
    const [formValue ,setFormValue]=useState({
        name:"",
        price:"",
        quantity:"",
        brand:"هوم نت",
        description:"",
        thumbnail:[],
        images:"",
        category:"",
        subcategory:""
    })



   


      const {
        register, 
        control,
        handleSubmit,
        formState: { errors },
      setValue
      } = useForm({

      })

        useEffect(()=>{
            if(appState.isEdit){        
               setValue("name",appState.selectEditData.name) 
               setValue("price",appState.selectEditData.price) 
               setValue("quantity",appState.selectEditData.quantity) 
               setValue("description",appState.selectEditData.description) 
               setValue("images",appState.selectEditData.images) 
               setValue("thumbnail",appState.selectEditData.thumbnail) 
               setValue("category",appState.selectEditData.category._id) 
               setValue("subcategory",appState.selectEditData.subcategory._id) 
            }
        },[])
         






    return ( <Box component={"form"}  id='form'   sx={{direction:"rtl", color:"secondary.contrastText", border:"solid" , padding:"30px", borderRadius:"30px", overflowY:"auto"}}>
        <Box display={'flex'} gap={2} marginBottom={2} sx={{direction:"ltr"}} paddingLeft={2}>
            {appState.isEdit ? <Button type='submit' sx={{bgcolor:"secondary.main", color:"#ffff" , borderRadius:"20px" ,paddingY:"0px", paddingX:"30px"}}> ویرایش</Button>:
             <Button type='submit' onClick={()=>setOpen(false)} sx={{bgcolor:"secondary.main", color:"#ffff" , borderRadius:"20px" ,paddingY:"0px", paddingX:"30px"}}> ذخیره</Button> }
       
        <Button onClick={()=>setOpen(false)}  sx={{color:"black" , bgcolor:"#ffff" , borderRadius:"20px" ,padding:"0px"}}> انصراف</Button>
        </Box>
        <Box display={'flex'} gap={2} >
        <Box width={"100%"}>      
    <AddPic setFormValue={setFormValue}  formValue={formValue}   register={register} errors={errors}/>
    <AddData control={control}    register={register} errors={errors}/>   

 
    </Box>
     
        </Box>


    </Box> );
}
 
export default ColleagueAddContents
