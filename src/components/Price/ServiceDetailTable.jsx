import { getServiceByID } from "../../services/api.js";
import { useQuery } from "@tanstack/react-query";
import PriceTable from "./Table.jsx";
import { ServiceDetailHeadCells } from "../../utilities/Table.js";
import Typography from "@mui/material/Typography";

const serviceTitles = {
  1: "Normal Valuation",
  2: "Quick Valuation In 48 hours",
  3: "Quick Valuation In 24 hours",
  4: "Quick Valuation In 3 hours",
};

const servicePricesUnder4mm = {
  1: "$15.00",
  2: "$30.00",
  3: "$45.00",
  4: "$65.00",
};

const ServiceDetailsTable = ({ serviceID }) => {
  const formattedMoney = (money) => {
    if (money === "N/A" || money === 0) {
      return "N/A";
    }
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(money);
  };

  const { data: serviceDetails, isLoading: isServiceDetailsLoading } = useQuery(
    {
      queryKey: ["service", serviceID],
      queryFn: () => getServiceByID(serviceID),
    },
  );

  const serviceDetailRows = serviceDetails?.map((detail, index) => {
    let sizeDisplay = `${detail.minSize} - ${detail.maxSize}`;
    let finalPrice = formattedMoney(detail.initPrice);

    if (detail.minSize === 15 && detail.unitPrice !== 0) {
      sizeDisplay = ">15";
      let init = formattedMoney(detail.initPrice);
      let unit = formattedMoney(detail.unitPrice);
      finalPrice = `${init} + ${unit}/mm increased`; // Add unit price to initial price
    }

    return {
      number: index + 1,
      size: sizeDisplay,
      price: finalPrice,
    };
  });

  const title =
    serviceTitles[serviceID] || `Details for Service ID ${serviceID}`;
  const priceUnder4mm = servicePricesUnder4mm[serviceID] || "$0.00";

  return (
    <>
      <PriceTable
        rows={serviceDetailRows}
        headCells={ServiceDetailHeadCells}
        title={title}
      />
      <Typography
        sx={{ marginLeft: "250px", marginBottom: "30px", fontStyle: "italic" }}
      >
        **For diamonds &lt; 4,00 mm, valuating applies with a fee of{" "}
        {priceUnder4mm} per diamond.
      </Typography>
    </>
  );
};

export default ServiceDetailsTable;
