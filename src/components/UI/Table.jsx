import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function UITable({ heading, rows = [], headCells = [] }) {
  const navigate = useNavigate();

  const handleClick = async (id) => {
    navigate(`/manage/${id}`);
  };

  return (
    <TableContainer component={Paper} sx={{ marginRight: "30px" }}>
      <Typography
        variant="h5"
        id="tableTitle"
        component="div"
        sx={{ marginLeft: "30px", marginTop: "10px", fontWeight: "bold" }}
      >
        {heading}
      </Typography>
      <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
        <TableHead>
          <TableRow>
            {headCells.map((cell, index) => (
              <TableCell sx={{ fontWeight: "bold" }} key={index}>
                {cell.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow
              onClick={() => handleClick(row.number)}
              sx={{ cursor: "pointer" }}
              key={rowIndex}
            >
              {Object.keys(row).map((key, cellIndex) => (
                <TableCell key={cellIndex}>
                  <Link to={`/manage/${row.number}`}>{row[key]}</Link>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
