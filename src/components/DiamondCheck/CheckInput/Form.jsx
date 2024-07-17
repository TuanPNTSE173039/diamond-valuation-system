import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import checkImage from "../../../assets/images/check.jpg"; // Import your image

const DiamondCheckInputForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [checkType, setCheckType] = useState("certificateId");
  const navigate = useNavigate();

  const handleCheck = async () => {
    if (checkType === "certificateId") {
      navigate(`/check/certificate/${inputValue}`);
    } else if (checkType === "valuationCode") {
      navigate(`/check/valuation/${inputValue}`);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
      mt={3}
      height="calc(100vh - 243px)"
    >
      <Box
        width="100vw" // Set the width to 100vw for full viewport width
        height="calc(100vh - 245px)"
        sx={{
          backgroundImage: `url(${checkImage})`,
          backgroundSize: "cover", // Ensure the image covers the full area
          backgroundPosition: "center", // Keep the image centered
          backgroundRepeat: "no-repeat",
          position: "relative", // Required for the left property to work
        }}
      >
        <Box
          position="relative"
          width="100%"
          maxWidth={674}
          height="auto"
          borderRadius={2}
          p={5}
        >
          <Box position="relative" width="100%" height="auto">
            <Typography
              fontFamily="'Epilogue-Bold', Helvetica"
              fontWeight="bold"
              color="#171a1f"
              fontSize={{ xs: 30, sm: 40, md: 50 }} // Responsive font size
            >
              Check any diamond's
            </Typography>
            <Typography
              width="100%"
              position="relative"
              top={-20}
              fontFamily="'Epilogue-Bold', Helvetica"
              fontWeight="bold"
              color="#171a1f"
              fontSize={{ xs: 25, sm: 35, md: 45 }} // Responsive font size
            >
              price &amp; quality
            </Typography>
          </Box>
          <Typography
            position="relative"
            width="100%"
            top={10}
            fontFamily="'Inter-Regular', Helvetica"
            color="#171a1f"
            fontSize={{ xs: 14, sm: 16, md: 17 }} // Responsive font size
          >
            Transact with confidence -- get fair price, cut score, visual carat
            and more for free
          </Typography>

          <RadioGroup
            row
            value={checkType}
            onChange={(e) => setCheckType(e.target.value)}
            sx={{ position: "relative", top: 20 }}
          >
            <FormControlLabel
              value="certificateId"
              control={<Radio />}
              label="Check by Certificate ID"
            />
            <FormControlLabel
              value="valuationCode"
              control={<Radio />}
              label="Check by Valuation Code"
            />
          </RadioGroup>

          <Box
            position="relative"
            width="100%"
            height={50}
            top={30}
            left={0}
            bgcolor="white"
            borderRadius={1}
            border="1px solid #9095a0"
          >
            <TextField
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              variant="standard"
              placeholder={
                checkType === "certificateId"
                  ? "Enter Certificate ID"
                  : "Enter Valuation Code"
              }
              fullWidth
              InputProps={{
                disableUnderline: true,
                style: {
                  paddingLeft: 20,
                  paddingTop: 8,
                  color: "black",
                  fontSize: 16,
                },
              }}
            />
          </Box>
          <Button
            onClick={handleCheck}
            sx={{
              position: "relative",
              width: 151,
              height: 50,
              top: 50,
              left: "calc(50% - 75.5px)", // Center the button horizontally
              backgroundColor: "#6366f2",
              borderRadius: 1,
              textTransform: "none",
              ":hover": { backgroundColor: "#6366f2" },
            }}
          >
            <Typography color="white" fontSize={16} lineHeight="26px">
              Run free check
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DiamondCheckInputForm;
