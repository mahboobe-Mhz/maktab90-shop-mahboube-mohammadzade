import {Box ,Typography,Button} from '@mui/material'

import AddPic from './addPic';
import AddData from './addData';
import AddPrice from './addPrice';
import InventoryProducts from './inventory';
import ProductsSize from './size';
import CatSidebar from './catSidebar';
const AddProducts = () => {
    return ( <Box sx={{direction:"rtl", color:"secondary.contrastText"}}>
        <Box display={'flex'} gap={2} marginBottom={2} sx={{direction:"ltr"}} paddingLeft={2}>
        <Button sx={{bgcolor:"secondary.main", color:"#ffff" , borderRadius:"20px" ,paddingY:"0px", paddingX:"30px"}}> ذخیره</Button>
        <Button sx={{color:"black" , bgcolor:"#ffff" , borderRadius:"20px" ,padding:"0px"}}> انصراف</Button>
        </Box>
        <Box display={'flex'} gap={2} >
        <Box width={"70%"}>      
    <AddPic/>
    <AddData/>   
    <AddPrice/>
    <InventoryProducts/>
    <ProductsSize/>
    </Box>
        <Box width={"30%"}><CatSidebar/></Box>
        </Box>


    </Box> );
}
 
export default AddProducts
