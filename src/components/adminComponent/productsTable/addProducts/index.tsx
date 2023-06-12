import {Box ,Typography} from '@mui/material'

import AddPic from './addPic';
import AddData from './addData';
import AddPrice from './addPrice';
const AddProducts = () => {
    return ( <Box sx={{direction:"rtl", color:"secondary.contrastText"}}>
    <AddPic/>
    <AddData/>   
    <AddPrice/>
    </Box> );
}
 
export default AddProducts
