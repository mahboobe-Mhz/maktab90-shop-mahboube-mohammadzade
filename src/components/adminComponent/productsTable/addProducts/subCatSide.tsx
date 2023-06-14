import { TextField, Box, Typography ,FormControlLabel,Checkbox} from "@mui/material";
import useGetAllSubCategory from "../../../../api/services/products/useGetAllSubCategory";

const SubCatSide = () => {
    const { data, isLoading } = useGetAllSubCategory();

    return (  <><Box sx={{display:"flex", flexDirection:"column"}}>
    <FormControlLabel control={<Checkbox  color="secondary" />} label=" تشک" />
    {!isLoading &&data.data.subcategories.map((item)=><FormControlLabel control={<Checkbox key={item._id} color="secondary" />} label={item.name} />) }
</Box> </>   );
}
 
export default SubCatSide;