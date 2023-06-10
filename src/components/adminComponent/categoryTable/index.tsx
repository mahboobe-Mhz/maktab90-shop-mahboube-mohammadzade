import { Box,Typography ,Button,Input} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import BasicCategoryTable from "./categoriesTable";
import * as React from 'react';
import PaginationLink from "../../pagination";
import PaginationControlled from "../../pagination";
import axios from "axios";
import useGetPaginationCategory from "../../../api/services/products/usePaginationCategory";

const ShowTableBox = () => {

    const [page, setPage] = React.useState(1)
    const [countPage , setCountPage]=React.useState(2)
    
    const { data, isLoading ,refetch } = useGetPaginationCategory(page,countPage)

        React.useEffect(()=>{
          const req = axios.get(`http://localhost:8000/api/categories`)
            req.then(res =>{
                const lengthCat=res.data.data.categories.length/2
                const paesNum=Math.round(lengthCat)
                setCountPage(paesNum)
            })
          
        },[data])

        React.useEffect(()=>{
            refetch()
        },[page])
     
        !isLoading&& console.log(countPage);
        

    return ( <>
    <Box sx={{display:"flex", justifyContent:"space-between", bgcolor:"#ffff", alignItems:"center", paddingX:"20px", paddingY:"5px", borderRadius:"20px"}}>
                <Typography sx={{color:"secondary.main", fontSize:30}}> دسته ها</Typography>
                <Button sx={{color:"#ffff", paddingX:"30px", bgcolor:"secondary.main", borderRadius:"50px"}}> افزودن دسته</Button>
            </Box>
            <Box sx={{width:"100%",display:"flex", borderRadius:"50px" ,bgcolor:"#ffff",marginTop:"20px", paddingX:"20px",}}>
                    <SearchIcon sx={{fill:"gray", marginTop:"3px",}}/> 
                <Input placeholder="جستجو" sx={{width:"100%", outline:"none" }}  type="text" ></Input>
                </Box>
       
             <Box sx={{marginTop:2}}>
            {isLoading ? <div> loading...</div> :       
               <BasicCategoryTable rows={data.data.categories} />} 
            </Box> 
            <PaginationControlled  setPage={setPage} page={page} countPage={countPage}/>
    </> );
}
 
export default ShowTableBox;