import DiamondCheckInputForm from "./Form.jsx";
import check_diamond_img from "../../../assets/images/check.png";
import { Box } from "@mui/material";

const DiamondCheckInputPage = () => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "100px",
      }}
    >
      <Box style={{ margin: "auto 0" }}>
        <DiamondCheckInputForm />
      </Box>
      <Box style={{ marginRight: "200px" }}>
        <img
          src={check_diamond_img}
          alt="check_diamond_img"
          className="w-[300px] h-[560px] border-2 rounded-lg shadow-lg"
        />
      </Box>
    </Box>
  );
};

export default DiamondCheckInputPage;
