import {Box ,Typography,TextField} from '@mui/material'
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
const ProductsSize = () => {
    const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
    return (  <Box sx={{
        bgcolor:"#ffff" , borderRadius:"20px", marginTop:1, paddingBottom:4
    }}>
        <Box sx={{display:"flex", justifyContent:"space-between", padding:1.5,borderBottom:"solid", borderColor:"secondary.light"}}> 
            <Typography> موجودی کالا</Typography>
        </Box>
        <Box padding={1.5}>
        <Box display={"flex"} gap={2} width={"100%"}>
<TextField id="standard-basic" label="عرض " variant="standard" />
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