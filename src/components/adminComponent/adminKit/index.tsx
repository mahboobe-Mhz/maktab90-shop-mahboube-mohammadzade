import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 150, bgcolor:"#ffff", padding:"0px" }}>
      <FormControl sx={{width:"100%", padding:"0px"}}>
        <InputLabel sx={{top:"-5px"}} id="demo-simple-select-label">محدوده زمانی</InputLabel>
        <Select
        sx={{width:"100%", height:"40px",}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="محدوده زمانی"
          onChange={handleChange}
        >
          <MenuItem value={10}>یکسال</MenuItem>
          <MenuItem value={20}>یک ماه</MenuItem>
          <MenuItem value={30}>دو ماه</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}