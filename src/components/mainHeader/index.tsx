import { Box } from "@mui/material";
import SearchBox from "../kit/searchBox";

const MainHeader = () => {
    return (  <Box sx={{width:"100%"}}>
       <div>
            <img width={150} src="src/assets/photo/logo.png"></img>
       </div>
       <SearchBox/>
    </Box>);
}
 
export default MainHeader;