//import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Box, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const DiamondCheckInputForm = () => {
  //const [certificateId, setCertificateId] = useState("");
  const navigate = useNavigate();

  const handleCheck = () => {
    // if (certificateId.trim()) {
    //   //navigate(`/diamond-check/${certificateId}`);
    // }
    navigate("/check/id");
  };

  return (
      <Box position="relative" width={674} height={302} left={130}>
          <Box position="absolute" width={590} height={123} left={5}>
            <Typography
                fontFamily="'Epilogue-Bold', Helvetica"
                fontWeight="bold"
                color="#171a1f"
                fontSize={50}
            >
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Check any diamond's
            </Typography>
            <Typography
                width={500}
                position="absolute"
                top={48}
                fontFamily="'Epilogue-Bold', Helvetica"
                fontWeight="bold"
                color="#828df6"
                fontSize={45}
                left={5}
            >
              price &amp; quality
            </Typography>
          </Box>
          <Typography
              position="absolute"
              width={663}
              top={130}
              left={5}
              fontFamily="'Inter-Regular', Helvetica"
              color="#171a1f"
              fontSize={17}
          >
            Transact with confidence -- get fair price, cut score, visual carat and more for free
          </Typography>
          <Box
              position="absolute"
              width={462}
              height={50}
              top={195}
              left={0}
              bgcolor="white"
              borderRadius={1}
              border="1px solid #9095a0"
          >
            <TextField
               // value={certificateId}
               // onChange={(e) => setCertificateId(e.target.value)}
                variant="standard"
                placeholder="Enter Certificate ID"
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  style: {
                    paddingLeft: 20,
                    paddingTop: 8,
                    fontFamily: "'Inter-Regular', Helvetica",
                    color: "black",
                    fontSize: 16,
                  },
                }}
            />
          </Box>
          <Button
              onClick={handleCheck}
              sx={{
                position: 'absolute',
                width: 151,
                height: 50,
                top: 195,
                left: 471,
                backgroundColor: '#6366f2',
                borderRadius: 1,
                textTransform: 'none',
                ':hover': { backgroundColor: '#6366f2' },
              }}
          >
            <Typography
                fontFamily="'Inter-Regular', Helvetica"
                color="white"
                fontSize={16}
                lineHeight="26px"
            >
              Run free check
            </Typography>
          </Button>
      </Box>
  );
};

export default DiamondCheckInputForm;
