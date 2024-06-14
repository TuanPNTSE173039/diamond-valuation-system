import React, { useState } from "react";
import Drawer from "../UI/Drawer.jsx";
import UITable from "../UI/Table";
import { RequestHeadCells } from "../../utilities/Table.js";
import { useQuery } from "@tanstack/react-query";
import { getValuationRequests } from "../../services/api.js";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Utility function to format date and time
const formatDateTime = (dateTimeString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return new Date(dateTimeString).toLocaleString(undefined, options);
};

// const [page, setPage] = useState(0);
// const [rowsPerPage, setRowsPerPage] = useState(5);

const ValuationRequestList = () => {
  const {
    data: requests,
    isFetching: isRequestFetching,
    error,
  } = useQuery({
    queryKey: ["requests"],
    queryFn: () => getValuationRequests(2),
  });

  // Handle loading state
  if (isRequestFetching) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // Handle error state
  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h6" color="error">
          Failed to fetch data
        </Typography>
      </Box>
    );
  }

  // Map data to the format expected by UITable
  const requestRows = requests?.content.map((row) => {
    return {
      number: row.id,
      status: row.status,
      creationDate: formatDateTime(row.creationDate),
      diamondAmount: row.diamondAmount,
      service: row.serviceName,
    };
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "calc(100vh - 350px)",
        marginBottom: "50px",
      }}
    >
      <div style={{ marginRight: "20px" }}>
        <Drawer />
      </div>
      <UITable
        heading="All Valuations"
        rows={requestRows}
        headCells={RequestHeadCells}
      />
    </div>
  );
};

export default ValuationRequestList;
