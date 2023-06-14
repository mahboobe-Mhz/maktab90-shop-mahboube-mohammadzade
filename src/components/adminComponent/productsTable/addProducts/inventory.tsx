import {Box ,Typography,TextField} from '@mui/material'
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Products } from '../../../../api/interface/products';
interface Props{
  setFormValue:any
  formValue:Products
}
const InventoryProducts = ({setFormValue,formValue}:Props)=> {
    const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
    console.log(age);
    
  };
  const addInventory =(event:React.ChangeEvent<HTMLInputElement>)=>{
    setFormValue({...formValue ,quantity:event.currentTarget.value})
  }
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
    <MenuItem value={"موجود درانبار"}>موجود در انبار</MenuItem>
    <MenuItem value={"اتمام موجودی"}>اتمام موجودی</MenuItem>
    <MenuItem value={"تماس بکیرید"}>تماس بگیرید</MenuItem>
    <MenuItem value={"بزودی"}> به زودی</MenuItem>
    <MenuItem value={"استعلام قیمت"}> استعلام قیمت</MenuItem>
  </Select>
</FormControl>

<TextField id="standard-basic" onChange={addInventory}  label="تعداد کالا" variant="standard" />
<TextField id="standard-basic" label="بارکد" variant="standard" />
<TextField id="standard-basic" label="وزن" variant="standard" />
<Typography sx={{alignSelf:"center" ,marginTop:2}}>kg</Typography>
</Box>

        </Box>
       </Box> );
}
 
export default InventoryProducts;