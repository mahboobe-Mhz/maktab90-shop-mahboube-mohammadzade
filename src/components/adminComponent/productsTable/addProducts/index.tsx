import {Box ,Typography,Button, TextField} from '@mui/material'
import {useState,useEffect} from 'react'
import AddPic from './addPic';
import AddData from './addName';
import AddPrice from './addPrice';
import InventoryProducts from './inventory';
import ProductsSize from './size';
import CatSidebar from './catSidebar';
import { Products } from '../../../../api/interface/products';
import useAddNewProduct from '../../../../api/services/products/useAddNewProduct';
import { useDispatch, useSelector } from 'react-redux';
import {setEditId, setErrorMessage, setIsEditing, storeAppState } from '../../../../redux/slice/appSlice';
import { instance } from '../../../../api/constants';
import { useNavigate } from 'react-router';
import { routes } from '../../../../routes';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import SubCatSide from './subCatSide';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useSearchParams ,useParams} from 'react-router-dom';
const AddProducts = () => {
    const dispatch= useDispatch()
    const navigate= useNavigate()
    const appState = useSelector(storeAppState);
    const [resetForm,setResetForm]=useState(false)
    const [subData , setSubData]=useState([])
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

    const {mutate,isError,isSuccess } = useAddNewProduct({})

    const ProductsData=new FormData()


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
         
    const onSubmit =(data:any)=>{
        console.log(data);
        
        if(appState.isEdit){
            for(let i= 0; i<formValue.images.length; i++){
                ProductsData.append('images',formValue.images[i])
            }
        
        ProductsData.append('description',data.description)
        ProductsData.append('name',data.name)
        ProductsData.append('price',data.price)
        ProductsData.append('quantity',data.quantity)
        ProductsData.append('category',data.category)
        ProductsData.append('subcategory',data.subcategory)
        ProductsData.append('brand',appState.selectEditData.brand)   
        instance({ method:"PATCH", data:ProductsData, url:`/products/${appState.selectEditData._id}`})
        dispatch(setIsEditing({isEdit:false}))
  
        }
        else{
      
        for(let i= 0; i<formValue.images.length; i++){
            ProductsData.append('images',formValue.images[i])
        }
        ProductsData.append('thumbnail',formValue.images[0])
        ProductsData.append('description',data.description)
        ProductsData.append('name',data.name)
        ProductsData.append('price',data.price)
        ProductsData.append('quantity',data.quantity)
        ProductsData.append('category',data.category)
        ProductsData.append('subcategory',data.subcategory)
        ProductsData.append('brand',formValue.brand)
        mutate(ProductsData)
        dispatch(setErrorMessage({errorMessage:isError}))
  
        }


    navigate('/admin/control/products')
    setResetForm(!resetForm)
    dispatch(setEditId({editId:{catId:"",subCatId:""}}))
    }




    const handelCancel =()=>{
        setResetForm(!resetForm)    
        dispatch(setIsEditing({isEdit:false}))    
        navigate(routes.ADMIN.products)
    }





    return ( <Box component={"form"}  id='form' onSubmit={handleSubmit(onSubmit)}  sx={{direction:"rtl", color:"secondary.contrastText"}}>
        <Box display={'flex'} gap={2} marginBottom={2} sx={{direction:"ltr"}} paddingLeft={2}>
            {appState.isEdit ? <Button type='submit' sx={{bgcolor:"secondary.main", color:"#ffff" , borderRadius:"20px" ,paddingY:"0px", paddingX:"30px"}}> ویرایش</Button>:
             <Button type='submit' sx={{bgcolor:"secondary.main", color:"#ffff" , borderRadius:"20px" ,paddingY:"0px", paddingX:"30px"}}> ذخیره</Button> }
       
        <Button onClick={handelCancel}  sx={{color:"black" , bgcolor:"#ffff" , borderRadius:"20px" ,padding:"0px"}}> انصراف</Button>
        </Box>
        <Box display={'flex'} gap={2} >
        <Box width={"70%"}>      
    <AddPic setFormValue={setFormValue}  formValue={formValue}   register={register} errors={errors}/>
    <AddData control={control}    register={register} errors={errors}/>   
    <AddPrice   register={register} errors={errors}/>
    <InventoryProducts    register={register} errors={errors} />
    <ProductsSize  register={register} errors={errors}/>
    </Box>
        <Box width={"30%"}><CatSidebar  control={control} errors={errors} setSubData={setSubData} />
        <SubCatSide subData={subData} 
        resetForm={resetForm} errors={errors} control={control}/>
        
       <Box sx={{borderTop:"solid", borderColor:"secondary.light" ,bgcolor:"white",paddingY:"5px", borderRadius:"20px"}}>
        <Box sx={{ paddingX:3 }}>
        <Typography>برچسب</Typography>
         <TextField sx={{color:"secondary.main"}} id="standard-basic" label="یک برچسب وارد کنید" variant="standard" />
        </Box>
       
         </Box>
        </Box>
        </Box>


    </Box> );
}
 
export default AddProducts
