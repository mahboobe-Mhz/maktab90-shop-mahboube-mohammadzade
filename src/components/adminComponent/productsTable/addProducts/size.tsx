import {Box ,Typography,TextField} from '@mui/material'

interface Props{
  errors:any

  register:any
}
const ProductsSize = ({errors,register}:Props)=> {


    return (  <Box sx={{
        bgcolor:"#ffff" , borderRadius:"20px", marginTop:1, paddingBottom:4
    }}>
        <Box sx={{display:"flex", justifyContent:"space-between", padding:1.5,borderBottom:"solid", borderColor:"secondary.light"}}> 
            <Typography> سایز کالا</Typography>
        </Box>
        <Box padding={1.5}>
        <Box display={"flex"} gap={2} width={"100%"}>
          <Box sx={{display:"flex", flexDirection:"column"}}>
          <TextField  id="standard-basic" label="عرض " variant="standard" />

          </Box>
      
<Typography sx={{alignSelf:"center" ,marginTop:2}}>CM</Typography>
<TextField id="standard-basic" label="ارتفاع" variant="standard" />
<Typography sx={{alignSelf:"center" ,marginTop:2}}>CM</Typography>
<TextField id="standard-basic" label="طول" variant="standard" />
<Typography sx={{alignSelf:"center" ,marginTop:2}}>CM</Typography>
</Box>

        </Box>
       </Box> );
}
 
export default ProductsSize;