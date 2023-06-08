import { Box,Typography ,Button,Input} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import BasicCategoryTable from "./categoriesTable";
import useGetAllCategory from "../../../api/services/products/useGetAllCategory";


const ShowTableBox = () => {
    const { data, isLoading } =  useGetAllCategory()
  
   
    
    return ( <>
    <Box sx={{display:"flex", justifyContent:"space-between", marginTop:"20px", bgcolor:"#ffff", alignItems:"center", paddingX:"20px", paddingY:"5px", borderRadius:"20px"}}>
                <Typography sx={{color:"secondary.main", fontSize:30}}> دسته ها</Typography>
                <Button sx={{color:"#ffff", paddingX:"30px", bgcolor:"secondary.main", borderRadius:"50px"}}> افزودن دسته</Button>
            </Box>
            <Box sx={{width:"100%",display:"flex", borderRadius:"50px" ,bgcolor:"#ffff",marginTop:"20px", paddingX:"20px",}}>
                    <SearchIcon sx={{fill:"gray", marginTop:"3px"}}/> 
                <Input placeholder="جستجو" sx={{width:"100%", outline:"none" }}  type="text" ></Input>
                </Box>
       
             <Box >
            {isLoading ? <div> loading...</div> :     
               
               <BasicCategoryTable rows={ data.data.categories} />
 } 
            </Box> 
    </> );
}
 
export default ShowTableBox;