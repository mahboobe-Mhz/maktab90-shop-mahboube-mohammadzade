import {Box ,Typography,Button} from '@mui/material'
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
import {setErrorMessage, setIsEditing, storeAppState } from '../../../../redux/slice/appSlice';
import { instance } from '../../../../api/constants';
import { useNavigate } from 'react-router';
import { routes } from '../../../../routes';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
const AddProducts = () => {
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

    const {mutate,isError,isSuccess,status} = useAddNewProduct({})

    const ProductsData=new FormData()
 

 
  
      const {
        register,
        getValues,
        control,
        handleSubmit,
        formState: { errors },
        watch,
      setValue
      } = useForm()

        useEffect(()=>{
            if(appState.isEdit){        
               setValue("name",appState.selectEditData.name) 
               setValue("price",appState.selectEditData.price) 
               setValue("quantity",appState.selectEditData.quantity) 
               setValue("description",appState.selectEditData.description) 
               setValue("images",appState.selectEditData.images) 
               setValue("thumbnail",appState.selectEditData.thumbnail) 
               setValue("category",appState.selectEditData.category) 
             

            }
        },[])
         
    const onSubmit =(data:any)=>{
        console.log(data);
        console.log(isError);
        
        if(appState.isEdit){
            for(let i= 0; i<formValue.images.length; i++){
                ProductsData.append('images',formValue.images[i])
            }
            ProductsData.append('thumbnail',formValue.images[0])
        ProductsData.append('description',appState.selectEditData.description)
        ProductsData.append('name',data.name)
        ProductsData.append('price',data.price)
        ProductsData.append('quantity',data.quantity)
        ProductsData.append('category',appState.selectEditData.category._id)
        ProductsData.append('subcategory',appState.selectEditData.subcategory._id)
        ProductsData.append('brand',appState.selectEditData.brand)   
        instance({ method:"PATCH", data:ProductsData, url:`/products/${appState.selectEditData._id}`})
        dispatch(setIsEditing({isEdit:false}))
  
        }
        else{
      
        for(let i= 0; i<formValue.images.length; i++){
            ProductsData.append('images',formValue.images[i])
        }
        ProductsData.append('thumbnail',formValue.images[0])
        ProductsData.append('description',formValue.description)
        ProductsData.append('name',data.name)
        ProductsData.append('price',data.price)
        ProductsData.append('quantity',data.quantity)
        ProductsData.append('category',formValue.category)
        ProductsData.append('subcategory',formValue.subcategory)
        ProductsData.append('brand',formValue.brand)
        mutate(ProductsData)
        dispatch(setErrorMessage({errorMessage:isError}))
            console.log(isSuccess);
            console.log(status);
        }


    navigate(routes.ADMIN.products)
    setResetForm(!resetForm)
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
    <AddPic setFormValue={setFormValue} watch={watch} formValue={formValue} resetForm={resetForm}  register={register} error={errors}/>
    <AddData setFormValue={setFormValue} formValue={formValue}  resetForm={resetForm}  register={register} error={errors}/>   
    <AddPrice setFormValue={setFormValue} formValue={formValue} resetForm={resetForm}  register={register} error={errors}/>
    <InventoryProducts setFormValue={setFormValue} formValue={formValue}  resetForm={resetForm} register={register} error={errors} />
    <ProductsSize setFormValue={setFormValue} formValue={formValue}  resetForm={resetForm}  register={register} error={errors}/>
    </Box>
        <Box width={"30%"}><CatSidebar setFormValue={setFormValue} formValue={formValue} resetForm={resetForm} getValues={getValues} control={control} errors={errors} /></Box>
        </Box>


    </Box> );
}
 
export default AddProducts
