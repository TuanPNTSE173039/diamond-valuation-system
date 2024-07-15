import CalculateInputForm from "./InputForm/InputForm.jsx";
import CalculateOutputForm from "./OutputForm.jsx";
import { Box, Container } from "@mui/material";
import { getDiamondData, getDiamondMarketData } from "../../services/api";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CalculatePage() {
  const [params, setParams] = useState({
    diamondOrigin: "NATURAL",
    caratWeight: "0.3",
    color: "K",
    clarity: "SI1",
    cut: "EXCELLENT",
    polish: "EXCELLENT",
    symmetry: "EXCELLENT",
    shape: "ROUND",
    fluorescence: "NONE",
  });

  const {
    data: diamondData,
    isLoading: isDiamondLoading,
    error: diamondError,
  } = useQuery({
    queryKey: ["diamondData", params],
    queryFn: () => getDiamondData(params),
  });
  //console.log(diamondData);

  const {
    data: marketData,
    isLoading: isMarketLoading,
    error: marketError,
  } = useQuery({
    queryKey: ["diamondPriceData", params],
    queryFn: () => getDiamondMarketData(params),
  });

  if (diamondError) {
    toast.error("The diamond corresponding to the fields could not be found.");
  }

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "30px 0px",
        position: "relative",
      }}
    >
      <ToastContainer containerId="calculation" />
      <Box style={{ marginRight: "0px" }}>
        <CalculateInputForm setParams={setParams} />
      </Box>
      <Box>
        <CalculateOutputForm
          diamondData={diamondData}
          isDiamondLoading={isDiamondLoading}
          diamondError={diamondError}
          marketData={marketData}
          isMarketLoading={isMarketLoading}
          marketError={marketError}
        />
      </Box>
    </Container>
  );
}

export default CalculatePage;
