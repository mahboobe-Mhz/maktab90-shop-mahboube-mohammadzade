import {Box ,Typography,Button} from '@mui/material'
import {useState} from 'react'
import AddPic from './addPic';
import AddData from './addData';
import AddPrice from './addPrice';
import InventoryProducts from './inventory';
import ProductsSize from './size';
import CatSidebar from './catSidebar';
import { Products } from '../../../../api/interface/products';
const AddProducts = () => {
    const [formValue ,setFormValue]=useState({
        name:"",
        price:"",
        quantity:"",
        brand:"",
        description:"",
        thumbnail:"",
        images:"",
        category:"",
        subcategory:""
    })
    const ProductsData=new FormData()
    const handleSubmit =(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        ProductsData.append("name",formValue.name)

        console.log(formValue);
        
    }
    return ( <Box sx={{direction:"rtl", color:"secondary.contrastText"}}>
        <Box component={"form"} onSubmit={handleSubmit} display={'flex'} gap={2} marginBottom={2} sx={{direction:"ltr"}} paddingLeft={2}>
        <Button type='submit' sx={{bgcolor:"secondary.main", color:"#ffff" , borderRadius:"20px" ,paddingY:"0px", paddingX:"30px"}}> ذخیره</Button>
        <Button sx={{color:"black" , bgcolor:"#ffff" , borderRadius:"20px" ,padding:"0px"}}> انصراف</Button>
        </Box>
        <Box display={'flex'} gap={2} >
        <Box width={"70%"}>      
    <AddPic setFormValue={setFormValue} formValue={formValue}/>
    <AddData setFormValue={setFormValue} formValue={formValue}/>   
    <AddPrice setFormValue={setFormValue} formValue={formValue}/>
    <InventoryProducts setFormValue={setFormValue} formValue={formValue}/>
    <ProductsSize setFormValue={setFormValue} formValue={formValue}/>
    </Box>
        <Box width={"30%"}><CatSidebar setFormValue={setFormValue} formValue={formValue}/></Box>
        </Box>


    </Box> );
}
 
export default AddProducts
