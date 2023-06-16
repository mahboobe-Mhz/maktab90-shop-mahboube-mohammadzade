import {Box ,Typography,Button} from '@mui/material'
import {useState} from 'react'
import AddPic from './addPic';
import AddData from './addName';
import AddPrice from './addPrice';
import InventoryProducts from './inventory';
import ProductsSize from './size';
import CatSidebar from './catSidebar';
import { Products } from '../../../../api/interface/products';
import useAddNewProduct from '../../../../api/services/products/useAddNewProduct';
import { linkHasProtocol } from '@ckeditor/ckeditor5-link/src/utils';
const AddProducts = () => {
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
    const {mutate} = useAddNewProduct({})
    const ProductsData=new FormData()
    const handleSubmit =(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
       
      event.currentTarget.reset()
        for(let i= 0; i<formValue.images.length; i++){
            ProductsData.append('images',formValue.images[i])
        }
    
        ProductsData.append('thumbnail',formValue.images[0])
        ProductsData.append('description',formValue.description)
        ProductsData.append('name',formValue.name)
        ProductsData.append('price',formValue.price)
        ProductsData.append('quantity',formValue.quantity)
        ProductsData.append('category',formValue.category)
        ProductsData.append('subcategory',formValue.subcategory)
        ProductsData.append('brand',formValue.brand)
        mutate(ProductsData)
        setResetForm(!resetForm)
    }
    const handelCancel =()=>{
        setResetForm(!resetForm)
            
     
    }
    return ( <Box component={"form"}  id='form' onSubmit={handleSubmit}  sx={{direction:"rtl", color:"secondary.contrastText"}}>
        <Box display={'flex'} gap={2} marginBottom={2} sx={{direction:"ltr"}} paddingLeft={2}>
        <Button type='submit' sx={{bgcolor:"secondary.main", color:"#ffff" , borderRadius:"20px" ,paddingY:"0px", paddingX:"30px"}}> ذخیره</Button>
        <Button onClick={handelCancel}  sx={{color:"black" , bgcolor:"#ffff" , borderRadius:"20px" ,padding:"0px"}}> انصراف</Button>
        </Box>
        <Box display={'flex'} gap={2} >
        <Box width={"70%"}>      
    <AddPic setFormValue={setFormValue} formValue={formValue} resetForm={resetForm} />
    <AddData setFormValue={setFormValue} formValue={formValue}  resetForm={resetForm}/>   
    <AddPrice setFormValue={setFormValue} formValue={formValue} resetForm={resetForm} />
    <InventoryProducts setFormValue={setFormValue} formValue={formValue}  resetForm={resetForm} />
    <ProductsSize setFormValue={setFormValue} formValue={formValue}  resetForm={resetForm}/>
    </Box>
        <Box width={"30%"}><CatSidebar setFormValue={setFormValue} formValue={formValue} resetForm={resetForm}  /></Box>
        </Box>


    </Box> );
}
 
export default AddProducts
