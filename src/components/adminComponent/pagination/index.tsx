import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
interface Props{
  countPage:number|undefined
  page:number
  setPage:any
}
export default function PaginationControlled( {countPage,page,setPage}:Props) {

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Stack sx={{marginTop:2}} spacing={2}>

      <Pagination count={countPage} page={page} onChange={handleChange} />
      
    </Stack>
  );
}