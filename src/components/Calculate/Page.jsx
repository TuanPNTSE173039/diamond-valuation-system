import CalculateInputForm from "./InputForm/InputForm.jsx";
import CalculateOutputForm from "./OutputForm.jsx";
import {Box} from "@mui/material";

function CalculatePage() {
  return (
    <Box style={{ display: "flex", justifyContent: "space-between", margin: "50px 0px"}}>
      <Box style={{ marginRight: "0px" }}>
        <CalculateInputForm />
      </Box>
      <Box>
        <CalculateOutputForm />
      </Box>
    </Box>
  );
}

export default CalculatePage;
