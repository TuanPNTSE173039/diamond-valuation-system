import { useParams } from "react-router-dom";
import UICircularIndeterminate from "../UI/CircularIndeterminate.jsx";
import { useQuery } from "@tanstack/react-query";
import { getValuationRequestByID } from "../../services/api.js";
import { DetailHeadCells } from "../../utilities/Table.js";
import UITable from "../UI/Table.jsx";
import Drawer from "../UI/Drawer.jsx";
import React from "react";

const RequestItem = () => {
  const { id } = useParams();
  const { data: request, isLoading } = useQuery({
    queryKey: ["request", { requestId: id }],
    queryFn: () => getValuationRequestByID(id),
  });
  console.log(id);
  console.log(request);
  if (isLoading) {
    return <UICircularIndeterminate />;
  }

  const detailRows = request.valuationRequestDetails.map((item) => {
    return {
      number: item.id,
      returnedDate: request.returnDate ? request.returnDate : "N/A",
      service: request.service.name,
      size: (item.size === 0 && "N/A") || item.size,
      servicePrice: item.servicePrice === 0 ? "N/A" : item.servicePrice,
      certificateId: item.diamondValuationNote?.certificateId || "N/A",
      diamondOrigin: item.diamondValuationNote?.diamondOrigin || "N/A",
      caratWeight: item.diamondValuationNote?.caratWeight || "N/A",
      valuationPrice:
        item.valuationPrice === "0.0" || item.valuationPrice === null
          ? "N/A"
          : item.valuationPrice,
      status: item.status,
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
      <UITable heading="Detail" headCells={DetailHeadCells} rows={detailRows} />
    </div>
  );
};

export default RequestItem;
