import { Box, Typography, Button, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BasicCategoryTable from "./categoriesTable";
import * as React from "react";
import PaginationControlled from "../pagination";
import axios from "axios";
import useGetPaginationCategory from "../../../api/services/products/usePaginationCategory";
import CategoryModal from "./insertCategoryModal";
import { Category } from "../../../api/interface/category";
type ShowCatData = {
  name: string;
  subCat: string[];
} ;

const ShowTableBox = () => {
  const [page, setPage] = React.useState<number>(1);
  const [countPage, setCountPage] = React.useState<number>(1);
  const [AllCategoryData, setAllCategoryData] = React.useState<Category[]>([]);
  const { data, isLoading, refetch } = useGetPaginationCategory(page, 5);
  const [open, setOpen] = React.useState<boolean>(false);
  const[editFlag , setEditFlag]=React.useState(false)
  const [editCat , setEditCat]=React.useState<ShowCatData>({name :"", subCat:[]})
  const [catPic, setCatPic]=React.useState<string>("")
  React.useEffect(() => {
    const req = axios.get(
      `http://localhost:8000/api/categories?sort=-createdAt`
    );
    req.then((res) => {
      const lengthCat = res.data.data.categories.length / 4 + 0.26;
      setAllCategoryData(res.data.data.categories);
      const correctNum = Number(lengthCat.toFixed());
      setCountPage(correctNum);
    });
  }, []);
  React.useEffect(() => {
    refetch();
  }, [page]);


  return (
    <>
      <CategoryModal open={open} setOpen={setOpen} editCat={editCat} editFlag={editFlag} catPic={catPic} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          bgcolor: "#ffff",
          alignItems: "center",
          paddingX: "20px",
          paddingY: "5px",
          borderRadius: "20px",
        }}
      >
        <Typography
          sx={{
            color: "secondary.main",
            fontSize: {
              lg: 30,
              md: 30,
              sm: 20,
              xs: 20,
            },
          }}
        >
          {" "}
          دسته ها
        </Typography>
        <Button
        onClick={() => {setOpen(true) ,setEditFlag(false) }}
          sx={{
            color: "#ffff",
            paddingX: "30px",
            bgcolor: "secondary.main",
            borderRadius: "50px",
          }}
        >
          افزودن دسته
        </Button>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          borderRadius: "50px",
          bgcolor: "#ffff",
          marginTop: "20px",
          paddingX: "20px",
        }}
      >
        <SearchIcon sx={{ fill: "gray", marginTop: "3px" }} />
        <Input
          placeholder="جستجو"
          sx={{ width: "100%", outline: "none" }}
          type="text"
        ></Input>
      </Box>

      <Box sx={{ marginTop: 2 }}>
        {isLoading ? (
           <div className="loading ">
           <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="64px" height="64px" viewBox="0 0 128 128" ><rect x="0" y="0" width="100%" height="100%" fill="#FFFFFF" /><g><circle cx="16" cy="64" r="16" fill="#e5642f"/><circle cx="16" cy="64" r="14.344" fill="#e5642f" transform="rotate(45 64 64)"/><circle cx="16" cy="64" r="12.531" fill="#e5642f" transform="rotate(90 64 64)"/><circle cx="16" cy="64" r="10.75" fill="#e5642f" transform="rotate(135 64 64)"/><circle cx="16" cy="64" r="10.063" fill="#e5642f" transform="rotate(180 64 64)"/><circle cx="16" cy="64" r="8.063" fill="#e5642f" transform="rotate(225 64 64)"/><circle cx="16" cy="64" r="6.438" fill="#e5642f" transform="rotate(270 64 64)"/><circle cx="16" cy="64" r="5.375" fill="#e5642f" transform="rotate(315 64 64)"/><animateTransform attributeName="transform" type="rotate" values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64" calcMode="discrete" dur="720ms" repeatCount="indefinite"></animateTransform></g></svg>
           </div>
        ) : (
          <BasicCategoryTable
            rows={data.data.categories}
            AllCategoryData={AllCategoryData}
            setOpen={setOpen}
            editCat={editCat} 
             setEditCat={setEditCat}
             setEditFlag={setEditFlag}
             setCatPic={setCatPic}
          />
        )}
        <PaginationControlled
          setPage={setPage}
          page={page}
          countPage={countPage}
        />
      </Box>
    </>
  );
};

export default ShowTableBox;
