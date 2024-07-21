import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import {
  deleteValuationRequestByID,
  getDiamondValuationNoteByID,
} from "../../services/api.js";
import {
  Button,
  Dialog,
  DialogActions,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FeedbackDialog from "../ManageAppointment/FeedbackDialog.jsx";
import RecordScreenResult from "../ManageAppointment/ResultRecord.jsx";
import { convertStatus } from "../../utilities/Status.jsx";
import DeleteReasonInput from "../../components/ManageAppointment/DeleteReasonInput.jsx";

const UITable = ({
  heading,
  rows = [],
  headCells = [],
  showDeleteButton,
  showTotalPrice = false,
  totalPrice = 0,
  requestStatus,
  showFeedbackRow = false,
  requestID,
  request,
}) => {
  const navigate = useNavigate();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [openViewDialog, setOpenViewDialog] = useState(false);
  const [diamondDetails, setDiamondDetails] = useState(null);
  const [feedbackDialogOpen, setFeedbackDialogOpen] = useState(false);
  const [deleteReason, setDeleteReason] = useState("");
  const [customReason, setCustomReason] = useState("");

  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationKey: "deleteValuationRequest",
    mutationFn: () => deleteValuationRequestByID(selectedRowId),
    onSuccess: () => {
      queryClient.invalidateQueries(["requests"]);
      toast.success("Request deleted successfully!", {
        position: "bottom-right",
      });
    },
  });

  const handleDelete = (requestID) => {
    setSelectedRowId(requestID);
    setOpenDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    const reason = deleteReason === "Other" ? customReason : deleteReason;
    deleteMutation.mutate(selectedRowId);
    setOpenDeleteDialog(false);
    setDeleteReason("");
    setCustomReason("");
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
    setDeleteReason("");
    setCustomReason("");
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

  const handleClick = (requestID) => {
    navigate(`/appointments/${requestID}`);
  };

  const showTotal = requestStatus !== "PENDING" && requestStatus !== "CANCEL";
  const showFeedback =
    requestStatus === "FINISHED" || requestStatus === "CANCEL";

  return (
    <TableContainer component={Paper} sx={{ marginRight: "30px" }}>
      <ToastContainer />
      <Typography
        variant="h5"
        id="tableTitle"
        component="div"
        sx={{ marginTop: "10px", marginLeft: "20px", fontWeight: "bold" }}
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
                            handleDelete(row.number);
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      )}
                    {cell.id === "view" && row.status === "APPROVED" && (
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
                    {cell.id === "status"
                      ? convertStatus(row[cell.id])
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
                  onClick={() => setFeedbackDialogOpen(true)}
                >
                  Give Feedback
                </Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
        <Typography
          variant="h6"
          align="center"
          sx={{ mt: 1, mb: 2, width: "400px" }}
        >
          Confirm Delete
        </Typography>
        <DeleteReasonInput
          deleteReason={deleteReason}
          setDeleteReason={setDeleteReason}
          customReason={customReason}
          setCustomReason={setCustomReason}
        />
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button onClick={handleCloseDeleteDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="error">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openViewDialog}
        onClose={handleCloseViewDialog}
        fullWidth
        maxWidth="md"
      >
        <RecordScreenResult
          details={diamondDetails}
          onClose={handleCloseViewDialog}
        />
      </Dialog>
      {feedbackDialogOpen && (
        <FeedbackDialog
          open={feedbackDialogOpen}
          onClose={() => setFeedbackDialogOpen(false)}
          requestID={requestID}
          request={request}
        />
      )}
    </TableContainer>
  );
};

export default UITable;
