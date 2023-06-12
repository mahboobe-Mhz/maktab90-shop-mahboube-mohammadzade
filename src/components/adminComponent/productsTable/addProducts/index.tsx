import {Box ,Typography} from '@mui/material'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SegmentIcon from '@mui/icons-material/Segment';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AddPic from './addPic';
import AddData from './addData';
const AddProducts = () => {
    return ( <Box sx={{direction:"rtl", color:"secondary.contrastText"}}>
    <AddPic/>
    <AddData/>   
    
    </Box> );
}
 
export default AddProducts
