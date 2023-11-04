
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, FormControl, Input, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '../../../../components/svg/searchIcon';
import PaginationControlled from '../../../../components/adminComponent/pagination';




function ContactsPage() {
  const [role, setRole] = React.useState('');
  const [page, setPage] = React.useState<number>(1);
  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value);
  };
  return (
    <div dir='rtl'>
  <Box
        sx={{
          width: "100%",
          display: "flex",
          borderRadius: "50px",
          bgcolor: "#ffff",
          marginTop: "20px",
          paddingX: "20px",
        }}
      >
        <SearchIcon sx={{ fill: "gray", marginTop: "3px" }} />
        <Input
          placeholder="جستجو"
          sx={{ width: "100%", outline: "none" }}
          type="text"
        ></Input>
      </Box>

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
    <PaginationControlled
          setPage={setPage}
          page={1}
          countPage={2}
        />
    </div>
  )
}

export default ContactsPage