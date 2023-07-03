import {  Box ,FormControlLabel, Radio, RadioGroup} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { setEditId, storeAppState } from "../../../../redux/slice/appSlice";
import { Controller } from "react-hook-form";
import {  useState } from "react";

interface Props{
    subData:[]
    control:any
    errors:any
}
const SubCatSide = ({subData ,control,errors}:Props) => { 
  const appState = useSelector(storeAppState);
  const [selectRadio, setSelectRadio]=useState("")
  const dispatch =useDispatch()
const handelRadioBox =(e:any)=>{
  setSelectRadio(e.currentTarget.id)  

  if(appState.isEdit){
    dispatch(setEditId({editId:{catId:appState.editId.catId,subCatId:e.currentTarget.id}}))

  }
}



    return (  <><Box sx={{display:"flex", flexDirection:"column",bgcolor:"white", borderEndEndRadius:"20px",borderBottomRightRadius:"20px"}}>
        {errors.subcategory && <p style={{color:'red',fontSize:"10px",paddingRight:"5px"}}>زیر دسته ایی انتخاب کنید</p>}
   <Controller
    rules={{
      required: true,
     }}
render={({ field }) => (
  <RadioGroup aria-label="gender" {...field}>
     { subData?.map((item:any)=>
     <FormControlLabel
     id={item._id}
     onClick={handelRadioBox}
      value={item._id}
      control={<Radio checked={(item._id === appState.editId.subCatId)||(item._id ===selectRadio)}
      sx={{
        '&, &.Mui-checked': {
          color: 'secondary.main',
        },
      }}
      />}
      label={item.name}
      
    />
    ) }
   
  </RadioGroup>
)}
name="subcategory"
control={control}
/>
</Box> </>   );
}
 
export default SubCatSide;
