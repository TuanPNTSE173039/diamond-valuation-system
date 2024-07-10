import { Box } from "@mui/material";
import allurez from "../../assets/images/allurez.png";
import rockher from "../../assets/images/rockher.png";
import adiamor from "../../assets/images/adiamor.png";
import friendly from "../../assets/images/friendly.png";
import daniel from "../../assets/images/daniel.png";
import with_clarity from "../../assets/images/with_clarity.png";
import dreamstone from "../../assets/images/dreamstone.png";
import whiteflash from "../../assets/images/whiteflash.png";

export default function Supplier() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "210px",
        position: "relative",
        backgroundColor: "white",
        borderRadius: "4px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        overflow: "hidden", // To prevent images from overflowing the container
      }}
    >
      <img
        src={allurez}
        alt="allurez"
        style={{
          position: "absolute",
          left: "300px",
          top: "25px",
          width: "180px",
          height: "70px",
        }}
      />
      <img
        src={rockher}
        alt="rockher"
        style={{
          position: "absolute",
          left: "300px",
          top: "110px",
          width: "180px",
          height: "70px",
        }}
      />
      <img
        src={adiamor}
        alt="adiamor"
        style={{
          position: "absolute",
          left: "520px",
          top: "25px",
          width: "180px",
          height: "70px",
        }}
      />
      <img
        src={friendly}
        alt="friendly"
        style={{
          position: "absolute",
          left: "520px",
          top: "100px",
          width: "180px",
          height: "100px",
        }}
      />
      <img
        src={daniel}
        alt="daniel"
        style={{
          position: "absolute",
          left: "740px",
          top: "25px",
          width: "180px",
          height: "70px",
        }}
      />
      <img
        src={with_clarity}
        alt="with_clarity"
        style={{
          position: "absolute",
          left: "740px",
          top: "110px",
          width: "150px",
          height: "60px",
        }}
      />
      <img
        src={dreamstone}
        alt="dreamstone"
        style={{
          position: "absolute",
          left: "960px",
          top: "25px",
          width: "150px",
          height: "70px",
        }}
      />
      <img
        src={whiteflash}
        alt="whiteflash"
        style={{
          position: "absolute",
          left: "960px",
          top: "110px",
          width: "150px",
          height: "50px",
        }}
      />
    </Box>
  );
}
