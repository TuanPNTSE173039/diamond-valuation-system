import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getSupplier } from "../../services/api.js";
import UICircularIndeterminate from "../UI/CircularIndeterminate.jsx";

export default function Supplier() {
  const { data: suppliers, isLoading: isSupplierLoading } = useQuery({
    queryKey: ["supplier"],
    queryFn: () => getSupplier(),
  });

  if (isSupplierLoading) {
    return <UICircularIndeterminate />;
  }

  const imageWidth = 180; // Set your image width
  const spacing = 40; // Space between images
  const totalWidth =
    suppliers?.content?.length * imageWidth +
    (suppliers?.content?.length - 1) * spacing;

  return (
    <Box
      sx={{
        width: "100%",
        height: "150px",
        position: "relative",
        backgroundColor: "white",
        borderRadius: "4px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {suppliers?.content?.map((supplier, index) => (
        <img
          key={supplier.id} // Assuming each supplier has a unique ID
          src={supplier.image} // Use the supplier image from the API
          alt={supplier.name} // Use a descriptive alt text
          style={{
            position: "absolute",
            left: `calc(50% - ${totalWidth / 2}px + ${(imageWidth + spacing) * index}px)`, // Center images
            width: `${imageWidth}px`, // Set the width of the image
            height: "70px", // Set the height of the image
          }}
        />
      ))}
    </Box>
  );
}
