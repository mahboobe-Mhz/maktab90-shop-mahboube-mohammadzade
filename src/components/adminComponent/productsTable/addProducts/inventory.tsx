import {Box ,Typography,TextField} from '@mui/material'
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
const InventoryProducts = () => {
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
        <FormControl variant="standard" sx={{width:"20%" , border:"none"}}>
  <InputLabel id="demo-simple-select-label">موجودی</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="  موجودی"
    onChange={handleChange}
  >
    <MenuItem value={10}>موجود در انبار</MenuItem>
    <MenuItem value={20}>اتمام موجودی</MenuItem>
    <MenuItem value={30}>تماس بگیرید</MenuItem>
    <MenuItem value={30}> به زودی</MenuItem>
    <MenuItem value={30}> استعلام قیمت</MenuItem>
  </Select>
</FormControl>

<TextField id="standard-basic" label="کد کالا" variant="standard" />
<TextField id="standard-basic" label="بارکد" variant="standard" />
<TextField id="standard-basic" label="وزن" variant="standard" />
<Typography sx={{alignSelf:"center" ,marginTop:2}}>kg</Typography>
</Box>

        </Box>
       </Box> );
}
 
export default InventoryProducts;