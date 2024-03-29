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
  const [editCat , setEditCat]=React.useState<ShowCatData>({name :"", subCat:[]})
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
      <CategoryModal open={open} setOpen={setOpen} editCat={editCat}/>
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
          onClick={() => setOpen(true)}
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
          <div> loading...</div>
        ) : (
          <BasicCategoryTable
            rows={data.data.categories}
            AllCategoryData={AllCategoryData}
            setOpen={setOpen}
            editCat={editCat} 
             setEditCat={setEditCat}
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
