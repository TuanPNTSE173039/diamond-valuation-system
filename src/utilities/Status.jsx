import Typography from "@mui/material/Typography";

export const convertStatus = (status) => {
  switch (status) {
    case "PENDING":
      return (
        <Typography
          color="status.color"
          textAlign="center"
          sx={{ bgcolor: "status.pending" }}
          borderRadius={3}
          p={"2px 8px"}
        >
          Pending
        </Typography>
      );
    case "PROCESSING":
      return (
        <Typography
          color="status.color"
          textAlign="center"
          sx={{ bgcolor: "status.processing" }}
          borderRadius={3}
          p={"2px 8px"}
        >
          Processing
        </Typography>
      );
    case "RECEIVED":
      return (
        <Typography
          color="status.color"
          textAlign="center"
          sx={{ bgcolor: "status.received" }}
          borderRadius={3}
          p={"2px 8px"}
        >
          Received
        </Typography>
      );
    case "COMPLETED":
      return (
        <Typography
          color="status.color"
          textAlign="center"
          sx={{ bgcolor: "status.completed" }}
          borderRadius={3}
          p={"2px 8px"}
        >
          Completed
        </Typography>
      );
    case "SEALED":
      return (
        <Typography
          color="status.color"
          textAlign="center"
          sx={{ bgcolor: "status.sealing" }}
          borderRadius={3}
          p={"2px 8px"}
        >
          Sealed
        </Typography>
      );
    case "CANCEL":
      return (
        <Typography
          color="status.color"
          textAlign="center"
          sx={{ bgcolor: "status.cancelled" }}
          borderRadius={3}
          p={"2px 8px"}
        >
          Cancelled
        </Typography>
      );
    case "FINISHED":
      return (
        <Typography
          color="status.color"
          textAlign="center"
          sx={{ bgcolor: "status.finished" }}
          p={"2px 8px"}
          borderRadius={3}
        >
          Finished
        </Typography>
      );
    case "VALUATING":
      return (
        <Typography
          color="status.color"
          textAlign="center"
          sx={{ bgcolor: "status.valuating" }}
          borderRadius={3}
          p={"2px 8px"}
        >
          Valuating
        </Typography>
      );
    case "VALUATED":
      return (
        <Typography
          color="status.color"
          textAlign="center"
          sx={{ bgcolor: "status.valuated" }}
          p={"2px 8px"}
          borderRadius={3}
        >
          Valuated
        </Typography>
      );
    case "ASSESSING":
      return (
        <Typography
          color="status.color"
          textAlign="center"
          sx={{ bgcolor: "status.assessing" }}
          p={"2px 8px"}
          borderRadius={3}
        >
          Assessing
        </Typography>
      );
    case "ASSESSED":
      return (
        <Typography
          color="status.color"
          textAlign="center"
          sx={{ bgcolor: "status.assessed" }}
          p={"2px 8px"}
          borderRadius={3}
        >
          Assessed
        </Typography>
      );
    case "APPROVED":
      return (
        <Typography
          color="status.color"
          textAlign="center"
          sx={{ bgcolor: "status.approved" }}
          p={"2px 8px"}
          borderRadius={3}
        >
          Approved
        </Typography>
      );
  }
};
