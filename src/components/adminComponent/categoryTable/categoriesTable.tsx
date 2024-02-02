import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import {
  Paper,
  Box,
  Select,
  Checkbox,
  Typography,
  TableHead,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import useGetAllSubCategory from "../../../api/services/products/useGetAllSubCategory";
import { useDispatch } from "react-redux";
import { setModal } from "../../../redux/slice/appSlice";
import BasicModal from "./modalsubCat";
import DeleteCatModal from "./deleteCatModal";
interface Props {
  rows: Array<{
    _id: string;
    name: string;
  }>;

  AllCategoryData: any;
  setOpen:any
  setEditCat:any
  editCat:any
  setEditFlag:(flag:boolean)=>void
}
 type ShowCatData = {
  name: string;
  subCat: string[];
} | boolean;

export default function BasicCategoryTable({ rows, AllCategoryData , setOpen, setEditCat,editCat,setEditFlag}: Props) {
  const dispatch = useDispatch();
  const [subCatData, steSubCatData] = React.useState();
  const { data, isLoading } = useGetAllSubCategory();
  const[openDeleteModal,setOpenDeleteModal]=React.useState(false)
  const [selected, setSelected] = React.useState<string[]>([]);
  const[titleText,setTitleText]=React.useState("")

  const showSub = (event: React.MouseEvent) => {
    const categoryId = event.currentTarget.id;
    dispatch(setModal({ Modal: true }));

    const dataCat = !isLoading && data.data.subcategories;
    const FindCatData =
      !isLoading && dataCat.filter((item: any) => item.category === categoryId);
    steSubCatData(FindCatData);
  };

  const handelCheckBox = (event: any) => {
    if (selected.length !== 0) {
      selected.map((item: string) => {
        if (item === event.currentTarget.id) {
          const newArray = [...selected];
          const arrayDeleteItem = newArray.filter(
            (item: string) => item !== event.currentTarget.id
          );
          setSelected(arrayDeleteItem);
        } else {
          setSelected([...selected, event.currentTarget.id]);
        }
      });
    } else {
      setSelected([...selected, event.currentTarget.id]);
    }
  };
      const handleEditCat=(e:any)=>{
        setEditFlag(true)
        setOpen(true)
        const dataCat = !isLoading && data.data.subcategories;
        const FindCatData = !isLoading && dataCat.filter((item: any) => item.category === e.currentTarget.id);
       
        const showCatData:ShowCatData = !isLoading && {
          name:e.currentTarget.dataset.user,
          subCat:FindCatData
        }
        !isLoading && setEditCat(showCatData)
      }

      const handleDeleteModal =(e:any)=>{
        setTitleText(e.currentTarget.id)
        setOpenDeleteModal(true)
      }
      const handleCheckBox =(id:string)=>{
       const findCat= selected.find((item: string) => item === id)
       if(findCat){
        return true
       }else {
        return false
       }

      }
  return (
    <>
      {!isLoading && subCatData && <BasicModal subData={subCatData}  />}
      <DeleteCatModal setOpenDeleteModal={setOpenDeleteModal}  openDeleteModal={openDeleteModal } titleText={titleText}/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ textAlign: "right" }}>
                <Box>
                  {" "}
                  <Checkbox
                 
                    sx={{
                      "&, &.Mui-checked": {
                        color: "secondary.main",
                      },
                    }}
                  />{" "}
                  {selected.length ? (
                    <span>{selected.length} دسته انتخاب شده</span>
                  ) : (
                    <span></span>
                  )}{" "}
                </Box>
              </TableCell>

              <TableCell>
                {selected.length ? (
                  <DeleteOutlineOutlinedIcon sx={{ color: "secondary.main" }} />
                ) : (
                  <span></span>
                )}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row, index) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
           
                <TableCell data-tag="category" sx={{ textAlign: "right" }}>
                  <Checkbox
                    id={row._id}
                    sx={{
                      "&, &.Mui-checked": {
                        color: "secondary.main",
                      },
                    }}
                    onChange={handelCheckBox}
                    checked={handleCheckBox(row._id)}
                  />{" "}
                 
                  {row.name}{" "}
                </TableCell>
                <TableCell sx={{ textAlign: "right" }}>
               <img className="w-[50px] h-[50px]" src="/picture/لوسترروشنایی.jpg" alt="" />
                </TableCell> 
                <TableCell align="left">
                  <Box>
                    <DeleteOutlineOutlinedIcon
                    id={row.name}
                    onClick={handleDeleteModal}
                      sx={{ color: "secondary.main" , ":hover":{cursor:"pointer"} }}
                    />
                    <ModeEditOutlineOutlinedIcon
                       id={row._id}
                       data-user={row.name} 
                    onClick={handleEditCat}
                      sx={{ color: "secondary.main"  , ":hover":{cursor:"pointer"}}}
                    />
                    <MenuOutlinedIcon
                      onClick={showSub}
                      id={row._id}
                      sx={{ color: "secondary.main" , ":hover":{cursor:"pointer"} }}
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
