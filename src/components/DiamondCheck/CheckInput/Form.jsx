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
      height="75vh"
      width={1400}
      mt={3}
      sx={{
        backgroundImage: `url(${checkImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        position="relative"
        width={674}
        height={350}
        borderRadius={2}
        p={5}
        ml={7}
      >
        <Box position="relative" width={590} height={123}>
          <Typography
            fontFamily="'Epilogue-Bold', Helvetica"
            fontWeight="bold"
            color="#171a1f"
            fontSize={50}
          >
            Check any diamond's
          </Typography>
          <Typography
            width={500}
            position="relative"
            top={-20}
            fontFamily="'Epilogue-Bold', Helvetica"
            fontWeight="bold"
            color="#171a1f"
            fontSize={45}
          >
            price &amp; quality
          </Typography>
        </Box>
        <Typography
          position="relative"
          width={663}
          top={10}
          fontFamily="'Inter-Regular', Helvetica"
          color="#171a1f"
          fontSize={17}
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
          width={600}
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
            left: 220,
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
  );
};

export default DiamondCheckInputForm;
