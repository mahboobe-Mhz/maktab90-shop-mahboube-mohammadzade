import {Box ,FormControlLabel,FormGroup,Typography} from '@mui/material'
import { useState } from 'react';
import Checkbox, { checkboxClasses } from "@mui/material/Checkbox";
import { Controller } from 'react-hook-form';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];



const AddColor = ()=> {
   const [personName, setPersonName] = useState<string[]>([]);

   const handleChange = (event: SelectChangeEvent<typeof personName>) => {
     const {
       target: { value },
     } = event;
     setPersonName(
       // On autofill we get a stringified value.
       typeof value === 'string' ? value.split(',') : value,
     );
   
     
   };

 const colorArray=[{name:"قرمز", photo:"https://about.canva.com/wp-content/uploads/sites/8/2019/03/red.png"},{name:"زرد", photo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEX6+jNOqqP9AAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII="},{name:"سبز", photo:"https://img.freepik.com/premium-photo/abstract-mint-green-gradient-background-empty-space-studio-room-display-product_8466-17.jpg"}]

    return ( 
    <Box sx={{
            bgcolor:"#ffff" , borderRadius:"20px", marginTop:1, paddingBottom:4
         }}>
          <Box sx={{display:"flex", justifyContent:"space-between", padding:1.5,borderBottom:"solid", borderColor:"secondary.light"}}> 
             <Typography> رنگ / جنس</Typography>
        </Box>
        <Box>
        <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">رنگ ها</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {colorArray.map((color:any) => (
            <MenuItem key={color.name} value={color.name} sx={{}}>
              <Checkbox      sx={{
    [`&, &.${checkboxClasses.checked}`]: {
      color: 'white',
    },
    backgroundImage:`url(${color.photo})`
  }}
  size="small"
     
  checked={personName.indexOf(color.name) > -1}
                       />
              <ListItemText primary={color.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    
        </Box>
    </Box>
       
       );
}
 
export default AddColor;