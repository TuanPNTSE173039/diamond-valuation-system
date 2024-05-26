import { Box } from "@mui/material";
import diamond from "../../assets/images/diamond_poster.png";

export default function Body() {
  return (
    <Box
      className="relative w-100% h-[560px] bg-[#717171] rounded-[4px]"
      component="div"
    >
      <img
        className="absolute w-[681px] h-[555px] top-[5px] left-[753px]"
        alt="Image"
        src={diamond}
      />
    </Box>
  );
}
