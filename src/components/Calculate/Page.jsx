import CalculateInputForm from "./InputForm/InputForm.jsx";
import CalculateOutputForm from "./OutputForm.jsx";
import { Box } from "@mui/material";
import { getDiamondPriceData } from "../../services/api";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

function CalculatePage() {
  const [params, setParams] = useState({
    diamondOrigin: "NATURAL",
    caratWeight: "1.0",
    color: "G",
    clarity: "VS1",
    cut: "EXCELLENT",
    polish: "EXCELLENT",
    symmetry: "EXCELLENT",
    shape: "ROUND",
    fluorescence: "NONE",
  });

  const [defaultData, setDefaultData] = useState({
    fairPriceEstimate: 5115,
    estimateRange: { min: 4135, max: 6193 },
    last30DayChange: -2.72,
  });

  const [submitting, setSubmitting] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ["diamondPriceData", params],
    queryFn: () => getDiamondPriceData(params),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
  };

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "50px 0px",
      }}
    >
      <Box style={{ marginRight: "0px" }}>
        <CalculateInputForm setParams={setParams} handleSubmit={handleSubmit} />
      </Box>
      <Box>
        <CalculateOutputForm
          diamondData={data || defaultData}
          isLoading={isLoading}
          error={error}
        />
      </Box>
    </Box>
  );
}

export default CalculatePage;
