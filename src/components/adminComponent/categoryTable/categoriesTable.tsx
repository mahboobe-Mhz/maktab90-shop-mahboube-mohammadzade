import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Paper, Box, Select, Checkbox, Typography, TableHead } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import useGetAllSubCategory from "../../../api/services/products/useGetAllSubCategory";
import { useDispatch } from "react-redux";
import { setModal } from "../../../redux/slice/appSlice";
import BasicModal from "../modalsubCat";
interface Props {
  rows: Array<{
    _id: string;
    name: string;
  }>;

  AllCategoryData:any


}

export default function BasicCategoryTable({ rows ,AllCategoryData}: Props) {
  const dispatch = useDispatch();
  const [subCatData, steSubCatData] = React.useState();
  const { data, isLoading } = useGetAllSubCategory();

const [selected,setSelected]= React.useState([]);
  const showSub = (event:any) => {
    const categoryId = event.currentTarget.id;
    dispatch(setModal({ Modal: true }));

    const dataCat = !isLoading && data.data.subcategories;
    const FindCatData =
      !isLoading && dataCat.filter((item:any) => item.category === categoryId);
    steSubCatData(FindCatData);
  };
const handleSelectAll=(event:any)=>{
  if(event.currentTarget.checked){
    const allCatIdArray=[]
    AllCategoryData.map((item:any)=>allCatIdArray.push(item._id))
    setSelected(allCatIdArray)
  }else{
    setSelected([])
  }


}
const handelCheckBox =(event:any)=>{
  console.log(event.currentTarget.id);
  
  if(selected.length !== 0){
    selected.map((item:string)=>{
      if(item===event.currentTarget.id){ 
        const newArray=[...selected]     
        const arrayDeleteItem=newArray.filter((item:any)=> item!==event.currentTarget.id)
        setSelected(arrayDeleteItem)

      }else{
        setSelected([...selected,event.currentTarget.id])

      }
    })
  }else{
    setSelected([...selected,event.currentTarget.id])
  }
}

  return (
    <>
      {!isLoading && subCatData && <BasicModal subData={subCatData} />}
      <TableContainer  component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{textAlign:"right"}}>
                <Box>    <Checkbox onChange={handleSelectAll} sx={{
        '&, &.Mui-checked': {
          color: 'secondary.main',
        },
      }}/> {selected.length?<span>{selected.length} دسته انتخاب شده</span>:<span></span> }     </Box>
         

             
              </TableCell>
           
              <TableCell>{
                selected.length?     <DeleteOutlineOutlinedIcon
                sx={{ color: "secondary.main" }}
              />:<span></span>
                }
         
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row,index) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
              
                <TableCell data-tag="category" sx={{textAlign:"right"}}>
                <Checkbox 
                id={row._id}
                sx={{
        '&, &.Mui-checked': {
          color: 'secondary.main',
        },
      }}    
      onChange={handelCheckBox}
      checked={selected.find((item:any)=>item===row._id)}
      />
                  {" "}
                  {row.name}{" "}
                </TableCell>
                <TableCell align="left">
                  <Box>
                    <DeleteOutlineOutlinedIcon
                      sx={{ color: "secondary.main" }}
                    />
                    <ModeEditOutlineOutlinedIcon
                      sx={{ color: "secondary.main" }}
                    />
                    <MenuOutlinedIcon
                      onClick={showSub}
                      id={row._id}
                      sx={{ color: "secondary.main" }}
                    />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
