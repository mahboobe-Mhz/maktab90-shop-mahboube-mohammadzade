import {Box ,Typography} from '@mui/material'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


const AddData = () => {
    return (    <Box  sx={{
        bgcolor:"#ffff" , borderRadius:"20px", marginTop:2}}>
             <Box sx={{display:"flex", justifyContent:"space-between", padding:1.5,borderBottom:"solid", borderColor:"secondary.light"}}> 
            <Typography> اطلاعات محصول</Typography>
            <Box sx={{display:"flex", gap:"10px"}}>
            <HelpOutlineIcon/>
           
     </Box>
     </Box>
        <Box>
        
        </Box>
    </Box> );
}
 
export default AddData;