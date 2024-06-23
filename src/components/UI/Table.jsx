import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import * as PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteValuationRequestByID } from "../../services/api.js";

DialogActions.propTypes = { children: PropTypes.node };
export default function UITable({
  heading,
  rows = [],
  headCells = [],
  showDeleteButton,
  showTotalPrice = false,
  totalPrice = 0,
  requestStatus,
}) {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);

  const handleClick = async (requestID) => {
    console.log(requestID);
    navigate(`/appointments/${requestID}`);
  };

  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationKey: "deleteValuationRequest",
    mutationFn: deleteValuationRequestByID,
    onSuccess: () => {
      // On success, refetch the data
      queryClient.invalidateQueries(["requests"]);
    },
  });

  const handleDelete = (id) => {
    setSelectedRowId(id);
    setOpenDialog(true);
  };

  const handleConfirmDelete = () => {
    deleteMutation.mutate(selectedRowId);
    setOpenDialog(false);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const showTotal =
    requestStatus !== "PENDING" &&
    requestStatus !== "PROCESSING" &&
    requestStatus !== "CANCEL";

  return (
    <TableContainer
      component={Paper}
      sx={{ maxHeight: 440, marginRight: "30px" }}
    >
      <Typography
        variant="h5"
        id="tableTitle"
        component="div"
        sx={{ marginLeft: "30px", marginTop: "10px", fontWeight: "bold" }}
      >
        {heading}
      </Typography>
      <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" stickyHeader>
        <TableHead>
          <TableRow>
            {headCells.map((cell, index) => (
              <TableCell align="center" sx={{ fontWeight: "bold" }} key={index}>
                {cell.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              onClick={() => handleClick(row.number)}
              sx={{ cursor: "pointer" }}
            >
              {headCells.map((cell) => {
                const cellValue = row[cell.id];
                return (
                  <TableCell align="center" key={cell.id}>
                    {cell.id === "delete"
                      ? showDeleteButton &&
                        row.status === "PENDING" && (
                          <IconButton
                            aria-label="delete"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(row.id);
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        )
                      : cellValue}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
          {showTotalPrice && showTotal && (
            <TableRow>
              <TableCell
                colSpan={headCells.length}
                align="right"
                sx={{ fontWeight: "bold" }}
              >
                Total Price: {totalPrice}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <Typography variant="h6" align="center" sx={{ mt: 2, mb: 3 }}>
          Confirm Delete
        </Typography>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="error">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
}
