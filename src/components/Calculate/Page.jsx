import CalculateInputForm from "./InputForm/InputForm.jsx";
import CalculateOutputForm from "./OutputForm.jsx";
import { Box, Container } from "@mui/material";
import { getDiamondData, getDiamondMarketData } from "../../services/api";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

function CalculatePage() {
  const [params, setParams] = useState({
    diamondOrigin: "NATURAL",
    caratWeight: "1",
    color: "G",
    clarity: "VS1",
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

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "50px 0px",
        position: "relative",
      }}
    >
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
