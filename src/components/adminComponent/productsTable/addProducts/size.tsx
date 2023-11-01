import {Box ,Typography,TextField, Button} from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function ProductsSize() {
  return (
    <div>
          <Box sx={{
        bgcolor:"#ffff" , borderRadius:"20px", marginTop:1, paddingBottom:4
    }}>
        <Box sx={{display:"flex", justifyContent:"space-between", padding:1.5,borderBottom:"solid", borderColor:"secondary.light"}}> 
            <Typography> سایز کالا</Typography>
        </Box>
        <Box padding={1.5}>
        <Box display={"flex"} gap={2} width={"100%"}>
        <TextField id="standard-basic"    label=" چند نفره" variant="standard" />
<Box>
<TextField id="standard-basic"  type='number'  label="  قیمت(تومان)" variant="standard" />

</Box>
<TextField id="standard-basic"  label=" قیمت تخفیفی (تومان)" variant="standard" />
<TextField id="standard-basic" label="رنگ" variant="standard" />

</Box>

        </Box>
        <Button sx={{ bgcolor:"secondary.main", color:"white" , marginRight:"10px"}}>  افزودن +</Button>
        <Box marginTop={5}>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell align="right">چند نفره </TableCell>
            <TableCell align="right">قیمت </TableCell>
            <TableCell></TableCell>
            <TableCell align="right"> قیمت تخفیفی </TableCell>
            <TableCell align="right"> رنگ  </TableCell>
            <TableCell>عملیات</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>

           <TableRow
       
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right" component="th" scope="row">دو نفره</TableCell>
              <TableCell align="right" component="th" scope="row">۴,۰۰۰۰,۰۰۰ تومان</TableCell>
              ‌<TableCell align="right"> ۳,۰۰۰۰,۰۰۰ تومان</TableCell>
              <TableCell align="right"> بنفش </TableCell>
            <TableCell>
            <DeleteIcon/>
            <EditIcon/>
            </TableCell>
            </TableRow>
    
        </TableBody>
      </Table>
    </TableContainer>
        </Box>
       </Box> 
    </div>
  )
}

export default ProductsSize