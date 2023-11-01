
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';




function ContactsPage() {
  const [role, setRole] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value);
  };
  return (
    <div dir='rtl'>


    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">نام مخاطب</TableCell>
            <TableCell align="right">شماره تماس</TableCell>
            <TableCell align="right"> نقش مخاطب</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

           <TableRow
       
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="right">
                hamid
              </TableCell>
              <TableCell align="right">09124564885</TableCell>
              <TableCell align="right">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">نقش مخاطب</InputLabel>
        <Select
        sx={{fontSize:"14px"}}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={role}
          onChange={handleChange}
        >

          <MenuItem value={10}>کاربر عادی</MenuItem>
          <MenuItem value={20}>سوپر ادمین</MenuItem>

        </Select>
      </FormControl>
              </TableCell>
            <TableCell>
            <DeleteIcon/>
            </TableCell>
            </TableRow>
    
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  )
}

export default ContactsPage