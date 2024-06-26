import React from "react";
import { Box, Typography } from "@mui/material";
import proportions from "../../../assets/images/proportions.png";
import clarity from "../../../assets/images/clarity.png";

const DiamondDetails = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Diamond Details
        </Typography>
      </Box>
      <Box
        position="relative"
        display="flex"
        fullWidth
        height="700px"
        bgcolor="#fefeff"
        borderRadius="4px"
        marginRight={4}
        p={2}
      >
        <Box
          position="relative" // Adjusted to relative to contain absolute children
          width="50%" // Set width to 50% for half of the container
          mr={2} // Margin right for spacing between left and right sections
        >
          <Box
            position="absolute"
            left={0}
            top={0}
            width="550px"
            height="35px"
            bgcolor="#3c5474"
            borderRadius="8px"
            border="1px solid"
            p={1}
          >
            <Typography
              position="absolute"
              top="8px"
              left="10px"
              fontWeight="bold"
              color="#ffffff"
              fontSize="14px"
            >
              GIA REPORT DETAILS
            </Typography>
            <Typography
              position="absolute"
              top="51px"
              left="11px"
              color="#9095a0"
              fontSize="16px"
            >
              Certificate Date
            </Typography>
            <Typography
              position="absolute"
              top="52px"
              left="460px"
              color="#171a1f"
              fontSize="16px"
            >
              09/01/2023
            </Typography>
            <Typography
              position="absolute"
              top="88px"
              left="11px"
              color="#9095a0"
              fontSize="14px"
            >
              GIA Report Number
            </Typography>
            <Typography
              position="absolute"
              top="89px"
              left="459px"
              color="#171a1f"
              fontSize="16px"
              lineHeight="24px"
            >
              0897612424
            </Typography>
            <Typography
              position="absolute"
              top="125px"
              left="11px"
              color="#9095a0"
              fontSize="16px"
              lineHeight="24px"
            >
              Shape
            </Typography>
            <Typography
              position="absolute"
              top="126px"
              left="501px"
              color="#171a1f"
              fontSize="16px"
            >
              Round
            </Typography>
          </Box>
          <Box
            position="absolute"
            top="180px"
            left="0"
            width="550px"
            height="35px"
            bgcolor="#3c5474"
            borderRadius="5px"
            border="1px solid"
          >
            <Typography
              position="absolute"
              top="8px"
              left="10px"
              fontWeight="bold"
              color="#ffffff"
              fontSize="14px"
            >
              GRADING RESULTS
            </Typography>
            <Typography
              position="absolute"
              top="50px"
              left="11px"
              color="#9095a0"
              fontSize="16px"
              lineHeight="30px"
            >
              Carat Weight
            </Typography>
            <Typography
              position="absolute"
              top="50px"
              left="535px"
              color="#171a1f"
              fontSize="16px"
            >
              1
            </Typography>
            <Typography
              position="absolute"
              top="85px"
              left="11px"
              color="#9095a0"
              fontSize="16px"
              lineHeight="30px"
            >
              Color Grade
            </Typography>
            <Typography
              position="absolute"
              top="85px"
              left="535px"
              color="#171a1f"
              fontSize="16px"
            >
              G
            </Typography>
            <Typography
              position="absolute"
              top="120px"
              left="11px"
              color="#9095a0"
              fontSize="16px"
              lineHeight="30px"
            >
              Clarity Grade
            </Typography>
            <Typography
              position="absolute"
              top="120px"
              left="520px"
              color="#171a1f"
              fontSize="16px"
            >
              VS1
            </Typography>
            <Typography
              position="absolute"
              top="155px"
              left="11px"
              color="#9095a0"
              fontSize="16px"
              lineHeight="30px"
            >
              Cut Grade
            </Typography>
            <Typography
              position="absolute"
              top="155px"
              left="485px"
              color="#171a1f"
              fontSize="16px"
            >
              Excellent
            </Typography>
            <Typography
              position="absolute"
              top="190px"
              left="11px"
              color="#9095a0"
              fontSize="16px"
              lineHeight="30px"
            >
              Cut Score
            </Typography>
            <Typography
              position="absolute"
              top="190px"
              left="525px"
              color="#171a1f"
              fontSize="16px"
            >
              0.9
            </Typography>
          </Box>
          <Box
            position="absolute"
            top="420px"
            left="0"
            width="550px"
            height="35px"
            bgcolor="#3c5474"
            borderRadius="8px"
            border="1px solid"
          >
            <Typography
              position="absolute"
              top="7px"
              left="10px"
              fontWeight="bold"
              color="#ffffff"
              fontSize="14px"
            >
              ADDITIONAL GRADING INFORMATION
            </Typography>
            <Typography
              position="absolute"
              top="50px"
              left="11px"
              color="#9095a0"
              fontSize="16px"
            >
              Polish
            </Typography>
            <Typography
              position="absolute"
              top="50px"
              left="485px"
              color="#171a1f"
              fontSize="16px"
            >
              Excellent
            </Typography>
            <Typography
              sx={{
                position: "absolute",
                width: "115px",
                top: "85px",
                left: "11px",
                color: "#9095a0",
                fontSize: "16px",
              }}
            >
              Symmetry
            </Typography>
            <Typography
              position="absolute"
              top="85px"
              left="485px"
              color="#171a1f"
              fontSize="16px"
            >
              Excellent
            </Typography>
            <Typography
              sx={{
                position: "absolute",
                width: "115px",
                top: "120px",
                left: "11px",
                color: "#9095a0",
                fontSize: "16px",
              }}
            >
              Fluorescence
            </Typography>
            <Typography
              position="absolute"
              top="120px"
              left="510px"
              color="#171a1f"
              fontSize="16px"
            >
              None
            </Typography>
            <Typography
              sx={{
                position: "absolute",
                top: "155px",
                left: "11px",
                color: "#9095a0",
                fontSize: "16px",
              }}
            >
              Clarity Characteristics
            </Typography>
            <Typography
              position="absolute"
              width={300}
              top="155px"
              left="310px"
              color="#171a1f"
              fontSize="16px"
            >
              Crystal, Feather, Needle, Pinpoint
            </Typography>
            <Typography
              sx={{
                position: "absolute",
                top: "190px", // Adjust this value as needed
                left: "11px",
                color: "#9095a0",
                fontSize: "16px",
              }}
            >
              Inscription(s)
            </Typography>
            <Typography
              position="absolute"
              width={200}
              top="190px"
              left="430px"
              color="#171a1f"
              fontSize="16px"
            >
              GIA 2474506136
            </Typography>
            <Typography
              position="absolute"
              top="225px"
              left="11px"
              color="#9095a0"
              fontSize="16px"
            >
              Comments
            </Typography>
            <Typography
              position="absolute"
              width={200}
              top="225px"
              left="392px"
              color="#171a1f"
              fontSize="16px"
            >
              Clouds are not shown.
            </Typography>
          </Box>
        </Box>
        <Box
          position="relative" // Adjusted to relative to contain absolute children
          width="50%" // Set width to 50% for half of the container
        >
          <Box
            bgcolor="#3c5474"
            borderRadius="8px"
            border="1px solid"
            p={1}
            mb={2}
          >
            <Typography fontWeight="bold" color="#ffffff" fontSize="14px">
              PROPORTIONS
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={proportions} alt="Proportions" />
          </Box>
          <Box bgcolor="#3c5474" borderRadius="8px" border="1px solid" p={1}>
            <Typography fontWeight="bold" color="#ffffff" fontSize="14px">
              CLARITY CHARACTERISTICS
            </Typography>
          </Box>
          <img src={clarity} alt={"Clarity"} />
        </Box>
      </Box>
    </Box>
  );
};

export default DiamondDetails;
