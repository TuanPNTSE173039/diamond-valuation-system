import React, { useRef, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateValuationRequestFeedback } from "../../services/api.js";

const FeedbackDialog = ({ open, onClose, requestID, initialRequest }) => {
  console.log("Initial Request:", initialRequest);
  const [feedback, setFeedback] = useState(initialRequest?.feedback || "");
  const feedbackInputRef = useRef(null);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["updateFeedback", requestID],
    mutationFn: (newFeedback) => {
      const updatedRequest = { ...initialRequest, feedback: newFeedback };
      updateValuationRequestFeedback(requestID, updatedRequest);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["request", { requestId: requestID }]);
      onClose();
    },
  });

  const handleSubmit = () => {
    console.log("Feedback:", feedback);
    mutation.mutate(feedback);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Give Feedback</DialogTitle>
      <DialogContent>
        <TextField
          ref={feedbackInputRef} // Attach the ref to the TextField
          autoFocus
          margin="dense"
          id="feedback"
          label="Feedback"
          type="text"
          fullWidth
          variant="standard"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FeedbackDialog;
