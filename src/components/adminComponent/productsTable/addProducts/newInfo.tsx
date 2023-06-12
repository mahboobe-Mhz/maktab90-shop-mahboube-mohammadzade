import Modal from "@mui/material/Modal";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"; 
import { CKEditor } from "@ckeditor/ckeditor5-react"; 
import { TextField, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setProductsModal, storeAppState } from "../../../../redux/slice/appSlice";
const style = {
  position: "absolute" ,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
    borderRadius:"10px",
    color:"secondary.contrastText",
  bgcolor: "background.paper",
  border: "0px solid #000",
  boxShadow: 24,
  p: 4,
};
interface Props {
  subData: Array<{
    _id: string;
    name: string;
  }>;
}

export default function NewDataModal() {
  const dispatch = useDispatch();
  const appState = useSelector(storeAppState);
  const handleClose = () => dispatch(setProductsModal({ ModalInfoProducts: false }));

  return (
    <div>
      <Modal
        open={appState.ModalInfoProducts}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Box dir={"rtl"} sx={{
        bgcolor:"#ffff" , borderRadius:"20px", marginTop:2}}>
             <Box sx={{display:"flex", justifyContent:"space-between", padding:1.5,borderBottom:"solid", borderColor:"secondary.light"}}> 
            <Typography>  اطلاعات بخش</Typography>
       
     </Box>
        <Box sx={{borderBottom:"solid", borderColor:"secondary.light"}}>
        <Box  display={"flex"} justifyContent={"space-between"}  padding={1.5} >
      <TextField dir={"rtl"} sx={{width:"100%"}} label="عنوان*" variant="standard"  />
     
      
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
        </Box>
      </Modal>
    </div>
  );
}
