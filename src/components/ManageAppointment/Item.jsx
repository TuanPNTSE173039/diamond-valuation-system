import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import UICircularIndeterminate from "../UI/CircularIndeterminate.jsx";
import { getValuationRequestByID } from "../../services/api.js";
import { DetailHeadCells } from "../../utilities/Table.js";
import UITable from "../UI/Table.jsx";
import Drawer from "../UI/Drawer.jsx";

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

  const { data: request, isLoading } = useQuery({
    queryKey: ["request", { requestId: requestID }],
    queryFn: () => getValuationRequestByID(requestID),
  });
  console.log("Request:", request);

  if (isLoading) {
    return <UICircularIndeterminate />;
  }

  const detailRows = request.valuationRequestDetails.map((item, index) => {
    const row = {
      number: index + 1,
      service: request.service.name,
      size: item.size === 0 || item.size === null ? "N/A" : item.size,
      servicePrice:
        item.servicePrice === "0.0" || item.servicePrice === null
          ? "N/A"
          : formattedMoney(item.servicePrice),
      status: item.status,
      ...(item.status !== "CANCEL" &&
        item.status !== "PENDING" && { id: item.diamondValuationNote.id }),
    };
    return row;
  });

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
        showViewButton={true}
        showFeedbackRow={true}
        requestID={requestID}
        request={request}
      />
    </div>
  );
};

export default RequestItem;
