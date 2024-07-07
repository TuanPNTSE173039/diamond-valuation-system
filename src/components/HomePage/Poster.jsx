import { Box } from "@mui/material";
import diamond from "../../assets/images/poster.jpg";
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

export default function Poster() {
  const navigate = useNavigate(); // Initialize navigate function from useNavigate

  const handleCreateAppointment = () => {
    navigate("/appointment"); // Navigate to /appointment when button is clicked
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "560px",
        marginTop: "30px",
        marginBottom: "30px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "8%",
          transform: "translate(-50%, -50%)",
          //textAlign: "center",
          zIndex: 1,
        }}
      >
        <Box sx={{ width: "500px", position: "absolute" }}>
          <Typography
            sx={{ color: "white", fontSize: "32px", fontWeight: "bold" }}
          >
            We have experience and insider knowledge of the industry.
          </Typography>
          <Typography sx={{ color: "white", fontSize: "17px" }}>
            Our team of diamond experts has helped over 71,318 shoppers find the
            right conflict-free diamond with our comprehensive guides and
            offering honest and unbiased advice by answering your questions. We
            will help you sift through hundreds of thousands of loose diamonds
            online in order to find the one that best fits your needs.
          </Typography>
          <Typography>
            <Link
              to="/about"
              style={{
                textDecoration: "none",
                color: "#9095a0",
                cursor: "pointer",
              }}
            >
              More About Us
            </Link>
          </Typography>
        </Box>

        {/*<Button*/}
        {/*  variant="contained"*/}
        {/*  onClick={handleCreateAppointment}*/}
        {/*  sx={{*/}
        {/*    color: "white",*/}
        {/*    backgroundColor: "#0277bd",*/}
        {/*    borderRadius: "8px",*/}
        {/*  }}*/}
        {/*>*/}
        {/*  APPOINTMENT{" "}*/}
        {/*  <ArrowForwardIosIcon sx={{ fontSize: "13px", marginLeft: "5px" }} />*/}
        {/*</Button>*/}
      </Box>
      <Box
        component="img"
        src={diamond}
        alt="Diamond"
        sx={{
          position: "absolute",
          height: "555px",
          width: "100%",
          zIndex: 0, // Ensure the image is behind the button
        }}
      />
    </Box>
  );
}
