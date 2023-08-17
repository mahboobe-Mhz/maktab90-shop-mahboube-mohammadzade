import Modal from "@mui/material/Modal";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Paper, Box, Typography, TableHead } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setModal, storeAppState } from "../../../../redux/slice/appSlice";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
const style = {
  position: "absolute" ,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
interface Props {
  subData: Array<{
    _id: string;
    name: string;
  }>;
}

export default function BasicModal({ subData }: Props) {
  const dispatch = useDispatch();
  const appState = useSelector(storeAppState);
  const handleClose = () => dispatch(setModal({ Modal: false }));

  return (
    <div>
      <Modal
        open={appState.Modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TableContainer sx={{ height: 300 , direction:"rtl"}} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right" sx={{}}> زیر دسته ها</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {subData?.map((row) => (
                  <TableRow
                    key={row._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell data-tag="category" align="right">
                      {row.name}{" "}
                    </TableCell>
                    <TableCell>
                    <Box>
                    <DeleteOutlineOutlinedIcon
                      sx={{ color: "secondary.main" }}
                    />
                    <ModeEditOutlineOutlinedIcon
                      sx={{ color: "secondary.main" }}
                    />
                
                  </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
    </div>
  );
}