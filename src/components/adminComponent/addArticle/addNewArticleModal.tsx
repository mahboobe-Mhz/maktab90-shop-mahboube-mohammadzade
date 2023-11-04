import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"; 
import { CKEditor } from "@ckeditor/ckeditor5-react"; 
import { TextField } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "70%",
  height:"80%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY:"auto"
};
interface Props{
    setOpenInsertArticleModal:any
    openInsertArticleModal:boolean

}
export default function AddNewArticleModal({openInsertArticleModal,setOpenInsertArticleModal}:Props) {

const handleClose = () => setOpenInsertArticleModal(false);
 
 
  return (
    <div>

      <Modal
        open={openInsertArticleModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style } >
            <Box sx={{overflowY:"auto"}}>
            <Box dir={"rtl"} sx={{
        bgcolor:"#ffff" , borderRadius:"20px", marginTop:2}}>
             <Box sx={{display:"flex", justifyContent:"space-between", padding:1.5,borderBottom:"solid", borderColor:"secondary.light"}}> 
            <Typography>  اطلاعات مقاله </Typography>
       
     </Box>
        <Box sx={{borderBottom:"solid", borderColor:"secondary.light"}}>
        <Box  display={"flex"} justifyContent={"space-between"}  padding={1.5}  gap={2}>
      <TextField dir={"rtl"} sx={{width:"100%"}} label="عنوان*" variant="standard"  />
      <TextField dir={"rtl"} sx={{width:"100%"}} label="تاریخ" variant="standard"  />
      <TextField dir={"rtl"} sx={{width:"100%"}} label="نویسنده" variant="standard"  />
      <TextField dir={"rtl"} sx={{width:"100%"}} label="درباره" variant="standard"  />
    </Box>
    <div className="ck-editor__editable_inline" >
    <CKEditor 
        editor={ClassicEditor} 
        data={"این محصول..."} 
        onChange={(event, editor) => { 
          const data = editor.getData(); 
          console.log( {  data } );
        }} 
      /> 
    </div>
    
        </Box>
        
    </Box> 
      <Box>
      <TableContainer component={Paper} sx={{ marginTop:"10px"}} dir='rtl'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell align="right" sx={{fontSize:"18px"}}> بنرها </TableCell>
         <TableCell></TableCell>
         <TableCell></TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>

           <TableRow
       
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right" component="th" scope="row">  بنر اول مقاله  </TableCell>
              <TableCell align="right" component="th" scope="row">
                <input type="file" />
              </TableCell>
       
            <TableCell>
            <DeleteIcon sx={{color:"secondary.main"}} />

            </TableCell>
            </TableRow>
            <TableRow
       
       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
     >
       <TableCell align="right" component="th" scope="row"> بنر دوم مقاله  </TableCell>
       <TableCell align="right" component="th" scope="row">
         <input type="file" />
       </TableCell>

     <TableCell>
          <DeleteIcon sx={{color:"secondary.main"}} />
 
     </TableCell>
             </TableRow>
             <TableRow
       
       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
     >
       <TableCell align="right" component="th" scope="row">     عکس کاور مقاله</TableCell>
       <TableCell align="right" component="th" scope="row">
         <input type="file" />
       </TableCell>

     <TableCell>
     <DeleteIcon sx={{color:"secondary.main"}} />

     </TableCell>
             </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
      </Box>
            </Box>
            <Button
            onClick={()=>setOpenInsertArticleModal(true)}
          sx={{
            color: "#ffff",
            paddingX: "30px",
            bgcolor: "secondary.main",
            borderRadius: "50px",
          }}
        >
          ثبت 
        </Button>
        </Box>
      </Modal>
    </div>
  );
}