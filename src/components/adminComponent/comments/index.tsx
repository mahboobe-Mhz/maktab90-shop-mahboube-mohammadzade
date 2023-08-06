import {Box,Typography,Paper} from '@mui/material';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
const Comments = () => {
    return (  <Paper sx={{ height:"90%" , bgcolor:"#ffff", padding:"20px", borderRadius:"30px", marginTop:"10px"}}>
        <Box>
        <Typography sx={{color:"secondary.main",   fontSize:{
            lg:30,
            md:30,
            sm:20,
            xs:20
         }, borderBottom:"solid"}}> نظرات</Typography>
        </Box>
        <Box sx={{display:"flex", flexDirection:"column", gap:"10px", width:"100%",
         height:"100%", justifyContent:"center",alignItems:"center",color:"secondary.main"
    }}>
            <MessageOutlinedIcon sx={{color:"secondary.main", width:"120px", height:"120px"}}/>
            <Typography>نظری ثبت نشده</Typography>
            <Typography> هیچ نظری برای نوشته های شما ثبت نشده است.</Typography>
        </Box>

    </Paper>);
}
 
export default Comments;