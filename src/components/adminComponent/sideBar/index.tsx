import {Box, Typography,Button} from '@mui/material'
import StorefrontIcon from '@mui/icons-material/Storefront';
import ControlledAccordions from '../accordian1';
import ControlledAccordions2 from '../accordian2';
import ChatIcon from '@mui/icons-material/Chat';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EqualizerIcon from '@mui/icons-material/Equalizer';
const SideBar = () => {
    return ( <Box sx={{display:"flex", flexDirection:"column", width:"250px", bgcolor:"secondary.main", color:"#ffff" , height:"100vh"}}>
        <Box sx={{ display:"flex" , textAlign:"center", alignItems:"center",gap:"10px", paddingRight:"40px", borderBottom:"solid", height:"100px", width:"100%"}} >
            <StorefrontIcon sx={{width:"50px", height:"50px"}}/>
            <Typography fontSize={30} >
                فروشگاه
            </Typography>
        </Box>
        <Box sx={{display:"flex", flexDirection:"column"}}>
            <ControlledAccordions/>
            <ControlledAccordions2/>
            <Button sx={{color:"#ffff", paddingY:"15px", paddingLeft:"170px", fontSize:"16px"}}> <ChatIcon sx={{ width:"30px"}}/> نظرات</Button>
            <Button sx={{color:"#ffff", paddingY:"15px", paddingLeft:"170px", fontSize:"16px"}}> <LocalOfferIcon sx={{ width:"30px"}}/> تخفیفات</Button>
            <Button sx={{color:"#ffff", paddingY:"15px", paddingLeft:"170px", fontSize:"16px"}}> <EqualizerIcon sx={{ width:"30px"}}/> گزارشات</Button>
        </Box>
    </Box> );
}
 
export default SideBar;