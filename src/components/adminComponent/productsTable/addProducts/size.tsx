import {Box ,Typography,TextField} from '@mui/material'
import * as React from 'react';
import  { SelectChangeEvent } from '@mui/material/Select';
import { Products } from '../../../../api/interface/products';
interface Props{
  setFormValue:any
  formValue:Products
}
const ProductsSize = ({setFormValue,formValue}:Props)=> {
const addSize =(event:React.ChangeEvent<HTMLInputElement>)=>{
  setFormValue({...formValue,size:event.currentTarget.value})
}



    return (  <Box sx={{
        bgcolor:"#ffff" , borderRadius:"20px", marginTop:1, paddingBottom:4
    }}>
        <Box sx={{display:"flex", justifyContent:"space-between", padding:1.5,borderBottom:"solid", borderColor:"secondary.light"}}> 
            <Typography> سایز کالا</Typography>
        </Box>
        <Box padding={1.5}>
        <Box display={"flex"} gap={2} width={"100%"}>
<TextField onChange={addSize} id="standard-basic" label="عرض " variant="standard" />
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