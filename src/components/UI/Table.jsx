import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  deleteValuationRequestByID,
  getDiamondValuationNoteByID,
} from "../../services/api.js";
import ItemDetailsDialog from "../ManageAppointment/ItemDetails.jsx";
import { useNavigate } from "react-router-dom";
import FeedbackDialog from "../ManageAppointment/FeedbackDialog.jsx"; // Import FeedbackDialog

DialogActions.propTypes = { children: PropTypes.node };

const UITable = ({
  heading,
  rows = [],
  headCells = [],
  showDeleteButton,
  showTotalPrice = false,
  totalPrice = 0,
  requestStatus,
  showViewButton = false,
  showFeedbackRow = false,
  requestID,
  request,
}) => {
  console.log(request);
  const navigate = useNavigate();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [openViewDialog, setOpenViewDialog] = useState(false);
  const [diamondDetails, setDiamondDetails] = useState(null);
  const [feedbackDialogOpen, setFeedbackDialogOpen] = useState(false);

  const handleClick = async (requestID) => {
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
    setOpenDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    deleteMutation.mutate(selectedRowId);
    setOpenDeleteDialog(false);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const handleView = async (diamondID) => {
    if (diamondID) {
      const details = await getDiamondValuationNoteByID(diamondID);
      setDiamondDetails(details);
      setOpenViewDialog(true);
    }
  };

  const handleCloseViewDialog = () => {
    setOpenViewDialog(false);
    setDiamondDetails(null);
  };

  const showTotal = requestStatus !== "PENDING" && requestStatus !== "CANCEL";
  const showFeedback =
    requestStatus === "FINISHED" || requestStatus === "CANCEL";

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
                  <TableCell
                    align={cell.numeric ? "right" : "center"}
                    key={cell.id}
                  >
                    {cell.id === "delete" &&
                      showDeleteButton &&
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
                      )}
                    {cell.id === "view" &&
                      showViewButton &&
                      row.status !== "CANCEL" &&
                      row.status !== "PENDING" && (
                        <IconButton
                          aria-label="view"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleView(row.id);
                          }}
                        >
                          <VisibilityIcon />
                        </IconButton>
                      )}
                    {cell.id !== "delete" && cell.id !== "view" && cellValue}
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

          {showFeedback && showFeedbackRow && (
            <TableRow>
              <TableCell
                colSpan={headCells.length}
                align="center"
                sx={{ fontWeight: "bold" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setFeedbackDialogOpen(true)} // Open the feedback dialog
                >
                  Give Feedback
                </Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
        <Typography variant="h6" align="center" sx={{ mt: 2, mb: 3 }}>
          Confirm Delete
        </Typography>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button onClick={handleCloseDeleteDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="error">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openViewDialog} onClose={handleCloseViewDialog}>
        <ItemDetailsDialog
          {...diamondDetails}
          open={openViewDialog}
          onClose={handleCloseViewDialog}
        />
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button onClick={handleCloseViewDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <FeedbackDialog
        open={feedbackDialogOpen}
        onClose={() => setFeedbackDialogOpen(false)}
        requestID={requestID}
        initialRequest={request}
      />
    </TableContainer>
  );
};

export default UITable;
