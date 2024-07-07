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
import FeedbackDialog from "../ManageAppointment/FeedbackDialog.jsx";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { convertStatus } from "../../utilities/Status.jsx";
import { toast, ToastContainer } from "react-toastify";

DialogActions.propTypes = { children: PropTypes.node };

const DeleteReasonInput = ({ deleteReason, setDeleteReason }) => {
  const initialValue = deleteReason === "Other" ? "" : deleteReason;
  return (
    <FormControl
      fullWidth
      margin="normal"
      sx={{ ml: 2, mr: 2, width: "400px" }}
    >
      <InputLabel id="delete-reason-label">Reason</InputLabel>
      {deleteReason === "Other" ? (
        <TextField
          fullWidth
          margin="normal"
          value={initialValue}
          onChange={(e) => setDeleteReason(e.target.value)}
        />
      ) : (
        <Select
          labelId="delete-reason-label"
          id="delete-reason"
          value={initialValue}
          onChange={(e) => setDeleteReason(e.target.value)}
          label="Reason"
        >
          <MenuItem value="I want to change service">
            I want to change service
          </MenuItem>
          <MenuItem value="I want to change amount of diamond">
            I want to change amount of diamond
          </MenuItem>
          <MenuItem value="I want to change information">
            I want to change information
          </MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
      )}
    </FormControl>
  );
};

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
  const navigate = useNavigate();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [openViewDialog, setOpenViewDialog] = useState(false);
  const [diamondDetails, setDiamondDetails] = useState(null);
  const [feedbackDialogOpen, setFeedbackDialogOpen] = useState(false);
  const [deleteReason, setDeleteReason] = useState("");

  const handleClick = async (requestID) => {
    navigate(`/appointments/${requestID}`);
    console.log("Request ID:", requestID);
  };

  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationKey: "deleteValuationRequest",
    mutationFn: () => deleteValuationRequestByID(selectedRowId),
    onSuccess: () => {
      queryClient.invalidateQueries(["requests"]);
      toast.success("Request deleted successfully!");
    },
  });

  const handleDelete = (requestID) => {
    setSelectedRowId(requestID);
    setOpenDeleteDialog(true);
    console.log("Selected row ID:", requestID);
  };

  const handleConfirmDelete = () => {
    const reason = deleteReason;
    console.log("Delete reason:", reason);
    deleteMutation.mutate(selectedRowId);
    setOpenDeleteDialog(false);
    setDeleteReason("");
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
    setDeleteReason("");
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
      <ToastContainer />
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
                            handleDelete(row.number);
                            console.log("Row number:", row.number);
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
