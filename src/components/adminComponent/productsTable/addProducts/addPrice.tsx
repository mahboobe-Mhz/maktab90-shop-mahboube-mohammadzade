import {Box ,Typography,TextField,FormControlLabel} from '@mui/material'
import Switch from '@mui/material/Switch';
const AddPrice = () => {
    return (  <Box sx={{
        bgcolor:"#ffff" , borderRadius:"20px", marginTop:1
    }}>
        <Box sx={{display:"flex", justifyContent:"space-between", padding:1.5,borderBottom:"solid", borderColor:"secondary.light"}}> 
            <Typography>قیمت گذاری</Typography>

        
      
     </Box> 
     <Box padding={1.5} display={"flex"} gap={2}>
        <Box display={"flex"} gap={2} >
        <TextField dir={"ltr"} id="standard-basic" label="*قیمت" variant="standard" />
     <Typography marginTop={4}>تومان</Typography>
        </Box>
    
     <FormControlLabel sx={{marginTop:"25px"}} control={<Switch defaultChecked  color="secondary"/>} label="حراج" />
           
     </Box>
     </Box> )
}
 
export default AddPrice;