import React from "react";
import { Box, Typography } from "@mui/material";
import proportionsPic from "../../../assets/images/proportions.png";
import clarityPic from "../../../assets/images/clarity.png";

const DiamondDetails = ({
  certificateDate,
  certificateId,
  shape,
  carat,
  color,
  clarity,
  cut,
  cut_score,
  polish,
  symmetry,
  fluorescence,
}) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // January is 0!
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };
  const formattedDate = formatDate(certificateDate);
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
              CERTIFICATE REPORT DETAILS
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginTop="35px"
            >
              <Typography color="#9095a0" fontSize="16px">
                Certificate Date
              </Typography>
              <Typography color="#171a1f" fontSize="16px">
                {formattedDate}
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginTop="10px"
            >
              <Typography color="#9095a0" fontSize="16px">
                Certificate Report Number
              </Typography>
              <Typography color="#171a1f" fontSize="16px">
                {certificateId}
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginTop="10px"
            >
              <Typography color="#9095a0" fontSize="16px">
                Shape
              </Typography>
              <Typography color="#171a1f" fontSize="16px">
                {shape}
              </Typography>
            </Box>
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
              GRADING RESULTS
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginTop="35px"
            >
              <Typography color="#9095a0" fontSize="16px">
                Carat Weight
              </Typography>
              <Typography color="#171a1f" fontSize="16px">
                {carat}
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginTop="10px"
            >
              <Typography color="#9095a0" fontSize="16px">
                Color Grade
              </Typography>
              <Typography color="#171a1f" fontSize="16px">
                {color}
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginTop="10px"
            >
              <Typography color="#9095a0" fontSize="16px">
                Clarity Grade
              </Typography>
              <Typography color="#171a1f" fontSize="16px">
                {clarity}
              </Typography>
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginTop="10px"
            >
              <Typography color="#9095a0" fontSize="16px">
                Cut Grade
              </Typography>
              <Typography color="#171a1f" fontSize="16px">
                {cut}
              </Typography>
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginTop="10px"
            >
              <Typography color="#9095a0" fontSize="16px">
                Cut Score
              </Typography>
              <Typography color="#171a1f" fontSize="16px">
                {cut_score}
              </Typography>
            </Box>
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
            p={1}
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
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginTop="35px"
            >
              <Typography color="#9095a0" fontSize="16px">
                Polish{" "}
              </Typography>
              <Typography color="#171a1f" fontSize="16px">
                {polish}
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginTop="10px"
            >
              <Typography color="#9095a0" fontSize="16px">
                Symmetry{" "}
              </Typography>
              <Typography color="#171a1f" fontSize="16px">
                {symmetry}
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginTop="10px"
            >
              <Typography color="#9095a0" fontSize="16px">
                Fluorescence{" "}
              </Typography>
              <Typography color="#171a1f" fontSize="16px">
                {fluorescence}
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginTop="10px"
            >
              <Typography color="#9095a0" fontSize="16px">
                Clarity Characteristics{" "}
              </Typography>
              <Typography color="#171a1f" fontSize="16px">
                Crystal, Feather, Needle, Pinpoint
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginTop="10px"
            >
              <Typography color="#9095a0" fontSize="16px">
                Comments{" "}
              </Typography>
              <Typography color="#171a1f" fontSize="16px">
                Clouds are not shown.
              </Typography>
            </Box>
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
            <img src={proportionsPic} alt="Proportions" />
          </Box>
          <Box bgcolor="#3c5474" borderRadius="8px" border="1px solid" p={1}>
            <Typography fontWeight="bold" color="#ffffff" fontSize="14px">
              CLARITY CHARACTERISTICS
            </Typography>
          </Box>
          <img src={clarityPic} alt={"Clarity"} />
        </Box>
      </Box>
    </Box>
  );
};

export default DiamondDetails;
