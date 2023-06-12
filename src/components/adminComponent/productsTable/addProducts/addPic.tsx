import {Box ,Typography} from '@mui/material'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SegmentIcon from '@mui/icons-material/Segment';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const AddPic = () => {
    return (  <Box sx={{
        bgcolor:"#ffff" , borderRadius:"20px"
    }}>
        <Box sx={{display:"flex", justifyContent:"space-between", padding:1.5,borderBottom:"solid", borderColor:"secondary.light"}}> 
            <Typography> تصاویر</Typography>
            <Box sx={{display:"flex", gap:"10px"}}>
            <HelpOutlineIcon/>
            <SegmentIcon/>
     </Box>
     </Box>
<Box sx={{padding:1.5}}>
    <Box sx={{ marginTop:"10px"}}>

        <AddAPhotoIcon sx={{border:"solid", borderColor:"secondary.main", color:"secondary.main",width:80, height:80,padding:2}}/>
    </Box>

 </Box>
        <Box></Box>
    </Box > );
}
 
export default AddPic;