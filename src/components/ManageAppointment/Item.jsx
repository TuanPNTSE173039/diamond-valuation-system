import { useParams } from "react-router-dom";
import UICircularIndeterminate from "../UI/CircularIndeterminate.jsx";
import { useQuery } from "@tanstack/react-query";
import { getValuationRequestByID } from "../../services/api.js";
import { DetailHeadCells } from "../../utilities/Table.js";
import UITable from "../UI/Table.jsx";
import Drawer from "../UI/Drawer.jsx";
import React from "react";

const RequestItem = () => {
  const formattedMoney = (money) => {
    if (money === "N/A" || money === 0) {
      return "N/A";
    }
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(money);
  };

  const { requestID } = useParams();

  console.log(requestID);

  const { data: request, isLoading } = useQuery({
    queryKey: ["request", { requestId: requestID }],
    queryFn: () => getValuationRequestByID(requestID),
  });
  console.log(requestID);
  console.log(request);
  if (isLoading) {
    return <UICircularIndeterminate />;
  }

  const detailRows = request.valuationRequestDetails.map((item, index) => {
    return {
      number: index + 1,
      service: request.service.name,
      size: item.size === 0 || item.size === null ? "N/A" : item.size,
      servicePrice:
        item.servicePrice === "0.0" || item.servicePrice === null
          ? "N/A"
          : formattedMoney(item.servicePrice),
      status: item.status,
    };
  });
  // In your UITable component props
  const totalPriceFormat = formattedMoney(request.totalServicePrice);
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
        heading="Detail"
        headCells={DetailHeadCells}
        rows={detailRows}
        showTotalPrice={true}
        totalPrice={totalPriceFormat}
        requestStatus={request.status}
      />
    </div>
  );
};

export default RequestItem;
