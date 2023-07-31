import { Box, Button, Paper, Typography } from "@mui/material";
import BasicSelect from "../adminKit";
import BarChart from "../adminKit/chart";

const Reports = () => {
    return ( <Box sx={{padding:"20px"}}>
         <Box  sx={{display:"flex", gap:"20px", justifyContent:"space-between", marginBottom:"10px",
          borderBottom:"solid",
        borderColor:"secondary.main"
        }}>
            <Typography sx={{alignSelf:"center", color:"secondary.main", fontSize:"30px"}}>گزارشات</Typography>
            <BasicSelect />
         </Box>
         <Box sx={{display:"flex", gap:"20px", justifyContent:"center",}}>
         <Paper sx={{display:"flex", alignItems:"center", justifyContent:"center" ,color:"gray",flexDirection:"column", paddingX:"20px", height:"150px", width:"300px"}}>
                <Typography sx={{fontSize:"30px"}}>درآمد</Typography>
                <Typography sx={{fontSize:"30px"}}>۰ تومان</Typography>
                <Typography>۰%</Typography>
            </Paper>
            <Paper sx={{display:"flex", alignItems:"center", justifyContent:"center" ,flexDirection:"column",color:"gray", paddingX:"20px", height:"150px", width:"300px"}}>
            <Typography sx={{fontSize:"30px"}}>تعداد سفارشات</Typography>
                <Typography sx={{fontSize:"30px"}}>۰ </Typography>
                <Typography>۰%</Typography>
          
          
            </Paper>
         </Box>
         <Box sx={{display:"flex" , gap:"10px"}}>
            <Button sx={{color:"gray",  
        ':focus':{
            padding:"10",
          backgroundColor:"secondary.main",
          color:"white"
          
        }}}>درآمد</Button>
        <Button sx={{color:"gray",  
        ':focus':{
            padding:"10",
          backgroundColor:"secondary.main",
          color:"white"
          
        }}}>سفارشات</Button>
         </Box>
        < BarChart/>
    </Box> );
}
 
export default Reports;