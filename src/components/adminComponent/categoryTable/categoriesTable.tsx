import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Paper, Box } from "@mui/material";
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
}

export default function BasicCategoryTable({ rows }: Props) {
  const dispatch = useDispatch();
  const [subCatData, steSubCatData] = React.useState();
  const { data, isLoading } = useGetAllSubCategory();

  const showSub = (event:any) => {
    const categoryId = event.currentTarget.id;
    dispatch(setModal({ Modal: true }));

    const dataCat = !isLoading && data.data.subcategories;
    const FindCatData =
      !isLoading && dataCat.filter((item:any) => item.category === categoryId);
    steSubCatData(FindCatData);
  };

  return (
    <>
      {!isLoading && subCatData && <BasicModal subData={subCatData} />}
      <TableContainer  component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {rows?.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell data-tag="category" align="right">
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
