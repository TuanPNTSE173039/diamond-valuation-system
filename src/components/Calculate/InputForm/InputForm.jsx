import { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import OriginButton from "./Button/Origin.jsx";
import Typography from "@mui/material/Typography";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//import InputSlider from "../../UI/TestSlider.jsx";
import UISilder from "../../UI/Slider.jsx";
import ShapeButton from "./Button/Shape.jsx";

const CalculateInputForm = ({ setParams, handleSubmit }) => {
  const [diamondOrigin, setDiamondOrigin] = useState({ natural: "clicked" });
  const [shape, setShape] = useState({ round: "clicked" });
  const [carat, setCarat] = useState(1);
  const [color, setColor] = useState({ i: "clicked" });
  const [clarity, setClarity] = useState({ vs2: "clicked" });
  const [cut, setCut] = useState({ cex: "clicked" });
  const [symmetry, setSymmetry] = useState({ sex: "clicked" });
  const [polish, setPolish] = useState({ pex: "clicked" });
  const [fluorescence, setFluorescence] = useState({ fex: "clicked" });
  const [showMoreInputs, setShowMoreInputs] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
  };

  const handleClick = (setState, buttonName) => {
    setState((prevState) => {
      // First, create a new object where all button colors are set to "default"
      const resetColors = Object.keys(prevState).reduce((acc, curr) => {
        acc[curr] = "default";
        return acc;
      }, {});
      // Then, set the clicked button's color to "clicked"
      resetColors[buttonName] = "clicked";

      return resetColors;
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          width: 410,
          height: showMoreInputs ? 990 : 710,
          position: "relative",
          left: "110px",
          backgroundColor: "white",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "6px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 20,
            left: 10,
          }}
        >
          <Box sx={{ width: 400, height: 621, position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                fontFamily: "Epilogue-Bold, Helvetica",
                fontWeight: "bold",
                color: "#171a1f",
                fontSize: 22,
              }}
            >
              Calculator Input
            </Box>
            <Box position="absolute" top="54px" left="9px">
              <Box
                sx={{
                  fontFamily: "Inter-Regular, Helvetica",
                  color: "#9095a0",
                  fontSize: 14,
                  marginBottom: "10px",
                }}
              >
                DIAMOND ORIGIN
              </Box>
              <Grid container spacing={23} columnSpacing={25}>
                <Grid item xs={6}>
                  <OriginButton
                    buttonName={"natural"}
                    onClick={handleClick}
                    handleChange={handleChange}
                    state={diamondOrigin}
                    setState={setDiamondOrigin}
                    icon={<PublicOutlinedIcon />}
                  >
                    NATURAL
                  </OriginButton>
                </Grid>
                <Grid item xs={6}>
                  <OriginButton
                    buttonName={"labGrown"}
                    onClick={handleClick}
                    state={diamondOrigin}
                    setState={setDiamondOrigin}
                    icon={<ScienceOutlinedIcon />}
                  >
                    LAB GROWN
                  </OriginButton>
                </Grid>
              </Grid>
            </Box>
            <Box position="absolute" top="138px" left="9px">
              <Box
                sx={{
                  fontFamily: "Inter-Regular,Helvetica",
                  color: "#9095a0",
                  fontSize: 14,
                }}
              >
                SHAPE
              </Box>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  style={{ marginBottom: "27px", marginTop: "10px" }}
                >
                  <Grid container justifyContent="space-between" spacing={7}>
                    <Grid item>
                      <ShapeButton
                        buttonName="round"
                        selectedShape={shape}
                        state={shape}
                        setState={setShape}
                        onClick={handleClick}
                        handleChange={handleChange}
                      />
                    </Grid>
                    <Grid item>
                      <ShapeButton
                        buttonName="cushion"
                        selectedShape={shape}
                        state={shape}
                        setState={setShape}
                        onClick={handleClick}
                        handleChange={handleChange}
                      />
                    </Grid>
                    <Grid item>
                      <ShapeButton
                        buttonName="emerald"
                        selectedShape={shape}
                        state={shape}
                        setState={setShape}
                        onClick={handleClick}
                        handleChange={handleChange}
                      />
                    </Grid>
                    <Grid item>
                      <ShapeButton
                        buttonName="oval"
                        selectedShape={shape}
                        state={shape}
                        setState={setShape}
                        onClick={handleClick}
                        handleChange={handleChange}
                      />
                    </Grid>
                    <Grid item>
                      <ShapeButton
                        buttonName="princess"
                        selectedShape={shape}
                        state={shape}
                        setState={setShape}
                        onClick={handleClick}
                        handleChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container justifyContent="space-between" spacing={2}>
                    <Grid item>
                      <ShapeButton
                        buttonName="pear"
                        selectedShape={shape}
                        state={shape}
                        setState={setShape}
                        onClick={handleClick}
                        handleChange={handleChange}
                      />
                    </Grid>
                    <Grid item>
                      <ShapeButton
                        buttonName="radiant"
                        selectedShape={shape}
                        state={shape}
                        setState={setShape}
                        onClick={handleClick}
                        handleChange={handleChange}
                      />
                    </Grid>
                    <Grid item>
                      <ShapeButton
                        buttonName="marquise"
                        selectedShape={shape}
                        state={shape}
                        setState={setShape}
                        onClick={handleClick}
                        handleChange={handleChange}
                      />
                    </Grid>
                    <Grid item>
                      <ShapeButton
                        buttonName="asscher"
                        selectedShape={shape}
                        state={shape}
                        setState={setShape}
                        onClick={handleClick}
                        handleChange={handleChange}
                      />
                    </Grid>
                    <Grid item>
                      <ShapeButton
                        buttonName="heart"
                        selectedShape={shape}
                        state={shape}
                        setState={setShape}
                        onClick={handleClick}
                        handleChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>

            <div>
              <div className="absolute top-[252px] left-[7px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#9095a0] text-[14px] leading-[22px] whitespace-nowrap">
                CARAT
              </div>

              <div className="absolute w-[373px] h-[22px] top-[313px] left-[10px]">
                <div className="relative h-[22px]">
                  <UISilder carat={carat} setCarat={setCarat} />
                </div>
              </div>
            </div>

            <Box>
              <Box
                sx={{
                  position: "absolute",
                  top: 348,
                  left: 7,
                  fontFamily: "Inter-Regular,Helvetica",
                  fontSize: 14,
                  color: "#9095a0",
                  whiteSpace: "nowrap",
                }}
              >
                COLOR
              </Box>
              <Button
                onClick={(e) => {
                  handleClick(setColor, "d");
                  handleChange(e);
                }}
                sx={{
                  width: 90,
                  height: 33,
                  position: "absolute",
                  top: 418,
                  left: 293,
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "6px",
                  backgroundColor:
                    color["d"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                  ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: "Inter-Regular,Helvetica",
                  fontSize: 14,
                  color: color["d"] === "clicked" ? "white" : "#171a1f",
                }}
              >
                D
              </Button>

              <Button
                onClick={(e) => {
                  handleClick(setColor, "h");
                  handleChange(e);
                }}
                sx={{
                  width: 90,
                  height: 33,
                  position: "absolute",
                  top: 376,
                  left: 293,
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "6px",
                  backgroundColor:
                    color["h"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                  ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: "Inter-Regular,Helvetica",
                  fontSize: 14,
                  color: color["h"] === "clicked" ? "white" : "#171a1f",
                }}
              >
                H
              </Button>

              <Button
                onClick={(e) => {
                  handleClick(setColor, "e");
                  handleChange(e);
                }}
                sx={{
                  width: 90,
                  height: 33,
                  position: "absolute",
                  top: 418,
                  left: 198,
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "6px",
                  backgroundColor:
                    color["e"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                  ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: "Inter-Regular,Helvetica",
                  fontSize: 14,
                  color: color["e"] === "clicked" ? "white" : "#171a1f",
                }}
              >
                E
              </Button>
              <Button
                onClick={(e) => {
                  handleClick(setColor, "k");
                  handleChange(e);
                }}
                sx={{
                  width: 90,
                  height: 33,
                  position: "absolute",
                  top: 376,
                  left: 9,
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "6px",
                  backgroundColor:
                    color["k"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                  ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: "Inter-Regular,Helvetica",
                  fontSize: 14,
                  color: color["k"] === "clicked" ? "white" : "#171a1f",
                }}
              >
                K
              </Button>

              <Button
                onClick={(e) => {
                  handleClick(setColor, "f");
                  handleChange(e);
                }}
                sx={{
                  width: 90,
                  height: 33,
                  position: "absolute",
                  top: 418,
                  left: 104,
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "6px",
                  backgroundColor:
                    color["f"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                  ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: "Inter-Regular,Helvetica",
                  fontSize: 14,
                  color: color["f"] === "clicked" ? "white" : "#171a1f",
                }}
              >
                F
              </Button>

              <Button
                onClick={(e) => {
                  handleClick(setColor, "j");
                  handleChange(e);
                }}
                sx={{
                  width: 90,
                  height: 33,
                  position: "absolute",
                  top: 376,
                  left: 104,
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "6px",
                  backgroundColor:
                    color["j"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                  ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: "Inter-Regular,Helvetica",
                  fontSize: 14,
                  color: color["j"] === "clicked" ? "white" : "#171a1f",
                }}
              >
                J
              </Button>

              <Button
                onClick={(e) => {
                  handleClick(setColor, "g");
                  handleChange(e);
                }}
                sx={{
                  width: 89,
                  height: 33,
                  position: "absolute",
                  top: 418,
                  left: 10,
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "6px",
                  backgroundColor:
                    color["g"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                  ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: "Inter-Regular,Helvetica",
                  fontSize: 14,
                  color: color["g"] === "clicked" ? "white" : "#171a1f",
                }}
              >
                G
              </Button>

              <Button
                onClick={(e) => {
                  handleClick(setColor, "i");
                  handleChange(e);
                }}
                sx={{
                  width: "90px",
                  height: "33px",
                  position: "absolute",
                  top: "376px",
                  left: "198px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "6px",
                  backgroundColor:
                    color["i"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                  ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: "Inter-Regular,Helvetica",
                  fontSize: "14px",
                  color: color["i"] === "clicked" ? "white" : "#171a1f",
                }}
              >
                I
              </Button>
            </Box>

            <Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "462px",
                  left: "7px",
                  fontFamily: "Inter-Regular,Helvetica",
                  fontSize: "14px",
                  color: "#9095a0",
                  lineHeight: "22px",
                  whiteSpace: "nowrap",
                }}
              >
                CLARITY
              </Box>
              <Button
                onClick={(e) => {
                  handleClick(setColor, "fl");
                  handleChange(e);
                }}
                sx={{
                  width: "90px",
                  height: "33px",
                  position: "absolute",
                  top: "531px",
                  left: "293px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "6px",
                  backgroundColor:
                    clarity["fl"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                  ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: "Inter-Regular,Helvetica",
                  fontSize: "14px",
                  color: clarity["fl"] === "clicked" ? "white" : "#171a1f",
                }}
              >
                FL
              </Button>

              <Button
                onClick={(e) => {
                  handleClick(setColor, "vs1");
                  handleChange(e);
                }}
                sx={{
                  width: "90px",
                  height: "33px",
                  position: "absolute",
                  top: "490px",
                  left: "293px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "6px",
                  backgroundColor:
                    clarity["vs1"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                  ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: "Inter-Regular,Helvetica",
                  fontSize: "14px",
                  color: clarity["vs1"] === "clicked" ? "white" : "#171a1f",
                }}
              >
                VS1
              </Button>

              <Button
                onClick={(e) => {
                  handleClick(setColor, "if");
                  handleChange(e);
                }}
                sx={{
                  width: "90px",
                  height: "33px",
                  position: "absolute",
                  top: "531px",
                  left: "198px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "6px",
                  backgroundColor:
                    clarity["if"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                  ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: "Inter-Regular,Helvetica",
                  fontSize: "14px",
                  color: clarity["if"] === "clicked" ? "white" : "#171a1f",
                }}
              >
                IF
              </Button>

              <Button
                onClick={(e) => {
                  handleClick(setColor, "vvs2");
                  handleChange(e);
                }}
                sx={{
                  width: "90px",
                  height: "33px",
                  position: "absolute",
                  top: "531px",
                  left: "9px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "6px",
                  backgroundColor:
                    clarity["vvs2"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                  ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: "Inter-Regular,Helvetica",
                  fontSize: "14px",
                  color: clarity["vvs2"] === "clicked" ? "white" : "#171a1f",
                }}
              >
                VVS2
              </Button>

              <Button
                onClick={(e) => {
                  handleClick(setColor, "si2");
                  handleChange(e);
                }}
                sx={{
                  width: "90px",
                  height: "33px",
                  position: "absolute",
                  top: "490px",
                  left: "9px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "6px",
                  backgroundColor:
                    clarity["si2"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                  ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: "Inter-Regular,Helvetica",
                  fontSize: "14px",
                  color: clarity["si2"] === "clicked" ? "white" : "#171a1f",
                }}
              >
                SI2
              </Button>
              <Button
                onClick={(e) => {
                  handleClick(setColor, "vvs1");
                  handleChange(e);
                }}
                sx={{
                  width: "90px",
                  height: "33px",
                  position: "absolute",
                  top: "531px",
                  left: "104px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "6px",
                  backgroundColor:
                    clarity["vvs1"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                  ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: "Inter-Regular,Helvetica",
                  fontSize: "14px",
                  color: clarity["vvs1"] === "clicked" ? "white" : "#171a1f",
                }}
              >
                VVS1
              </Button>

              <Button
                onClick={(e) => {
                  handleClick(setColor, "sl1");
                  handleChange(e);
                }}
                sx={{
                  width: "90px",
                  height: "33px",
                  position: "absolute",
                  top: "490px",
                  left: "104px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "6px",
                  backgroundColor:
                    clarity["sl1"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                  ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: "Inter-Regular,Helvetica",
                  fontSize: "14px",
                  color: clarity["sl1"] === "clicked" ? "white" : "#171a1f",
                }}
              >
                SL1
              </Button>

              <Button
                onClick={(e) => {
                  handleClick(setColor, "vs2");
                  handleChange(e);
                }}
                sx={{
                  width: "89px",
                  height: "32px",
                  position: "absolute",
                  top: "490px",
                  left: "199px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "6px",
                  backgroundColor:
                    clarity["vs2"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                  ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: "Inter-Regular,Helvetica",
                  fontSize: "14px",
                  color: clarity["vs2"] === "clicked" ? "white" : "#171a1f",
                }}
              >
                VS2
              </Button>
            </Box>

            <Button
              sx={{
                all: "unset",
                width: "380px",
                height: "40px",
                position: "absolute",
                top: showMoreInputs ? 880 : 600,
                left: "6px",
                borderRadius: "4px",
                backgroundColor: "#3949AB",
                "&:hover": {
                  backgroundColor: "#3f51b5",
                },
              }}
            >
              <Typography
                sx={{
                  position: "absolute",
                  top: "8px",
                  left: "165px",
                  fontFamily: "Inter-Regular, Helvetica",
                  color: "white",
                  fontSize: "15px",
                }}
              >
                Submit
              </Typography>
            </Button>

            <Button
              onClick={() => setShowMoreInputs(!showMoreInputs)}
              sx={{
                width: "380px",
                height: "40px",
                position: "absolute",
                top: showMoreInputs ? 930 : 650,
                left: "6px",
                borderRadius: "4px",
                textAlign: "left",
              }}
            >
              {showMoreInputs ? "FEWER INPUTS" : "MORE INPUTS"}
              {showMoreInputs ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </Button>
            {showMoreInputs && (
              <>
                {/* Add your additional input fields here */}
                <Box position="absolute" top="580px" left="7px">
                  <Box
                    sx={{
                      fontFamily: "Inter-Regular,Helvetica",
                      fontSize: "14px",
                      color: "#9095a0",
                    }}
                  >
                    CUT
                  </Box>
                  <Button
                    onClick={(e) => {
                      handleClick(setColor, "cfair");
                      handleChange(e);
                    }}
                    sx={{
                      width: "90px",
                      height: "33px",
                      position: "absolute",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      borderRadius: "6px",
                      backgroundColor:
                        cut["cfair"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                      ":hover": { bgcolor: "#4F46E5", color: "white" },
                      fontFamily: "Inter-Regular,Helvetica",
                      fontSize: "14px",
                      color: cut["cfair"] === "clicked" ? "white" : "#171a1f",
                    }}
                  >
                    FAIR
                  </Button>
                  <Button
                    onClick={(e) => {
                      handleClick(setColor, "cgood");
                      handleChange(e);
                    }}
                    sx={{
                      width: "90px",
                      height: "33px",
                      position: "absolute",
                      left: "95px",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      borderRadius: "6px",
                      backgroundColor:
                        cut["cgood"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                      ":hover": { bgcolor: "#4F46E5", color: "white" },
                      fontFamily: "Inter-Regular,Helvetica",
                      fontSize: "14px",
                      color: cut["cgood"] === "clicked" ? "white" : "#171a1f",
                    }}
                  >
                    GOOD
                  </Button>
                  <Button
                    onClick={(e) => {
                      handleClick(setColor, "cvgood");
                      handleChange(e);
                    }}
                    sx={{
                      width: "90px",
                      height: "33px",
                      position: "absolute",
                      left: "190px",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      borderRadius: "6px",
                      backgroundColor:
                        cut["cvgood"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                      ":hover": { bgcolor: "#4F46E5", color: "white" },
                      fontFamily: "Inter-Regular,Helvetica",
                      fontSize: "14px",
                      color: cut["cvgood"] === "clicked" ? "white" : "#171a1f",
                    }}
                  >
                    V.GOOD
                  </Button>

                  <Button
                    onClick={(e) => {
                      handleClick(setColor, "cex");
                      handleChange(e);
                    }}
                    sx={{
                      width: "89px",
                      height: "32px",
                      position: "absolute",
                      left: "284px",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      borderRadius: "6px",
                      backgroundColor:
                        cut["cex"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                      ":hover": { bgcolor: "#4F46E5", color: "white" },
                      fontFamily: "Inter-Regular,Helvetica",
                      fontSize: "14px",
                      color: cut["cex"] === "clicked" ? "white" : "#171a1f",
                    }}
                  >
                    EX.
                  </Button>
                </Box>
                <Box position="absolute" top="650px" left="7px">
                  <Box
                    sx={{
                      fontFamily: "Inter-Regular,Helvetica",
                      fontSize: "14px",
                      color: "#9095a0",
                    }}
                  >
                    SYMMETRY
                  </Box>
                  <Button
                    onClick={(e) => {
                      handleClick(setColor, "sfair");
                      handleChange(e);
                    }}
                    sx={{
                      width: "90px",
                      height: "33px",
                      position: "absolute",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      borderRadius: "6px",
                      backgroundColor:
                        symmetry["sfair"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                      ":hover": { bgcolor: "#4F46E5", color: "white" },
                      fontFamily: "Inter-Regular,Helvetica",
                      fontSize: "14px",
                      color:
                        symmetry["sfair"] === "clicked" ? "white" : "#171a1f",
                    }}
                  >
                    FAIR
                  </Button>
                  <Button
                    onClick={(e) => {
                      handleClick(setColor, "sgood");
                      handleChange(e);
                    }}
                    sx={{
                      width: "90px",
                      height: "33px",
                      position: "absolute",
                      left: "95px",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      borderRadius: "6px",
                      backgroundColor:
                        symmetry["sgood"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                      ":hover": { bgcolor: "#4F46E5", color: "white" },
                      fontFamily: "Inter-Regular,Helvetica",
                      fontSize: "14px",
                      color:
                        symmetry["sgood"] === "clicked" ? "white" : "#171a1f",
                    }}
                  >
                    GOOD
                  </Button>
                  <Button
                    onClick={(e) => {
                      handleClick(setColor, "svgood");
                      handleChange(e);
                    }}
                    sx={{
                      width: "90px",
                      height: "33px",
                      position: "absolute",
                      left: "190px",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      borderRadius: "6px",
                      backgroundColor:
                        symmetry["svgood"] === "clicked"
                          ? "#4F46E5"
                          : "#f5f5f5",
                      ":hover": { bgcolor: "#4F46E5", color: "white" },
                      fontFamily: "Inter-Regular,Helvetica",
                      fontSize: "14px",
                      color:
                        symmetry["svgood"] === "clicked" ? "white" : "#171a1f",
                    }}
                  >
                    V.GOOD
                  </Button>

                  <Button
                    onClick={(e) => {
                      handleClick(setColor, "sex");
                      handleChange(e);
                    }}
                    sx={{
                      width: "89px",
                      height: "32px",
                      position: "absolute",
                      left: "284px",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      borderRadius: "6px",
                      backgroundColor:
                        symmetry["sex"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                      ":hover": { bgcolor: "#4F46E5", color: "white" },
                      fontFamily: "Inter-Regular,Helvetica",
                      fontSize: "14px",
                      color:
                        symmetry["sex"] === "clicked" ? "white" : "#171a1f",
                    }}
                  >
                    EX.
                  </Button>
                </Box>
                <Box position="absolute" top="720px" left="7px">
                  <Box
                    sx={{
                      fontFamily: "Inter-Regular,Helvetica",
                      fontSize: "14px",
                      color: "#9095a0",
                    }}
                  >
                    POLISH
                  </Box>
                  <Button
                    onClick={(e) => {
                      handleClick(setColor, "pfair");
                      handleChange(e);
                    }}
                    sx={{
                      width: "90px",
                      height: "33px",
                      position: "absolute",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      borderRadius: "6px",
                      backgroundColor:
                        polish["pfair"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                      ":hover": { bgcolor: "#4F46E5", color: "white" },
                      fontFamily: "Inter-Regular,Helvetica",
                      fontSize: "14px",
                      color:
                        polish["pfair"] === "clicked" ? "white" : "#171a1f",
                    }}
                  >
                    FAIR
                  </Button>
                  <Button
                    onClick={(e) => {
                      handleClick(setColor, "pgood");
                      handleChange(e);
                    }}
                    sx={{
                      width: "90px",
                      height: "33px",
                      position: "absolute",
                      left: "95px",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      borderRadius: "6px",
                      backgroundColor:
                        polish["pgood"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                      ":hover": { bgcolor: "#4F46E5", color: "white" },
                      fontFamily: "Inter-Regular,Helvetica",
                      fontSize: "14px",
                      color:
                        polish["pgood"] === "clicked" ? "white" : "#171a1f",
                    }}
                  >
                    GOOD
                  </Button>
                  <Button
                    onClick={(e) => {
                      handleClick(setColor, "pvgood");
                      handleChange(e);
                    }}
                    sx={{
                      width: "90px",
                      height: "33px",
                      position: "absolute",
                      left: "190px",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      borderRadius: "6px",
                      backgroundColor:
                        polish["pvgood"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                      ":hover": { bgcolor: "#4F46E5", color: "white" },
                      fontFamily: "Inter-Regular,Helvetica",
                      fontSize: "14px",
                      color:
                        polish["pvgood"] === "clicked" ? "white" : "#171a1f",
                    }}
                  >
                    V.GOOD
                  </Button>

                  <Button
                    onClick={(e) => {
                      handleClick(setColor, "pex");
                      handleChange(e);
                    }}
                    sx={{
                      width: "89px",
                      height: "32px",
                      position: "absolute",
                      left: "284px",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      borderRadius: "6px",
                      backgroundColor:
                        polish["pex"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                      ":hover": { bgcolor: "#4F46E5", color: "white" },
                      fontFamily: "Inter-Regular,Helvetica",
                      fontSize: "14px",
                      color: polish["pex"] === "clicked" ? "white" : "#171a1f",
                    }}
                  >
                    EX.
                  </Button>
                </Box>
                <Box position="absolute" top="790px" left="7px">
                  <Box
                    sx={{
                      fontFamily: "Inter-Regular,Helvetica",
                      fontSize: "14px",
                      color: "#9095a0",
                      lineHeight: "22px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    FLUORESCENCE
                  </Box>
                  <Button
                    onClick={(e) => {
                      handleClick(setColor, "fvstg");
                      handleChange(e);
                    }}
                    sx={{
                      width: "71px",
                      height: "33px",
                      position: "absolute",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      borderRadius: "6px",
                      backgroundColor:
                        fluorescence["fvstg"] === "clicked"
                          ? "#4F46E5"
                          : "#f5f5f5",
                      ":hover": { bgcolor: "#4F46E5", color: "white" },
                      fontFamily: "Inter-Regular,Helvetica",
                      fontSize: "14px",
                      color:
                        fluorescence["fvstg"] === "clicked"
                          ? "white"
                          : "#171a1f",
                    }}
                  >
                    VSTG
                  </Button>
                  <Button
                    onClick={() => handleClick(setFluorescence(), "fstg")}
                    sx={{
                      width: "71px",
                      height: "33px",
                      position: "absolute",
                      left: "95px",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      borderRadius: "6px",
                      backgroundColor:
                        fluorescence["fstg"] === "clicked"
                          ? "#4F46E5"
                          : "#f5f5f5",
                      ":hover": { bgcolor: "#4F46E5", color: "white" },
                      fontFamily: "Inter-Regular,Helvetica",
                      fontSize: "14px",
                      color:
                        fluorescence["fstg"] === "clicked"
                          ? "white"
                          : "#171a1f",
                    }}
                  >
                    STG
                  </Button>
                  <Button
                    onClick={() => handleClick(setFluorescence, "fmed")}
                    sx={{
                      width: "71px",
                      height: "33px",
                      position: "absolute",
                      left: "190px",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      borderRadius: "6px",
                      backgroundColor:
                        fluorescence["fmed"] === "clicked"
                          ? "#4F46E5"
                          : "#f5f5f5",
                      ":hover": { bgcolor: "#4F46E5", color: "white" },
                      fontFamily: "Inter-Regular,Helvetica",
                      fontSize: "14px",
                      color:
                        fluorescence["fmed"] === "clicked"
                          ? "white"
                          : "#171a1f",
                    }}
                  >
                    MED
                  </Button>
                  <Button
                    onClick={() => handleClick(setFluorescence, "ffnt")}
                    sx={{
                      width: "71px",
                      height: "32px",
                      position: "absolute",
                      left: "284px",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      borderRadius: "6px",
                      backgroundColor:
                        fluorescence["ffnt"] === "clicked"
                          ? "#4F46E5"
                          : "#f5f5f5",
                      ":hover": { bgcolor: "#4F46E5", color: "white" },
                      fontFamily: "Inter-Regular,Helvetica",
                      fontSize: "14px",
                      color:
                        fluorescence["ffnt"] === "clicked"
                          ? "white"
                          : "#171a1f",
                    }}
                  >
                    FNT
                  </Button>
                  <Button
                    onClick={() => handleClick(setFluorescence, "fnon")}
                    sx={{
                      width: "71px",
                      height: "32px",
                      position: "absolute",
                      left: "284px",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      borderRadius: "6px",
                      backgroundColor:
                        fluorescence["fnon"] === "clicked"
                          ? "#4F46E5"
                          : "#f5f5f5",
                      ":hover": { bgcolor: "#4F46E5", color: "white" },
                      fontFamily: "Inter-Regular,Helvetica",
                      fontSize: "14px",
                      color:
                        fluorescence["fnon"] === "clicked"
                          ? "white"
                          : "#171a1f",
                    }}
                  >
                    NON
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default CalculateInputForm;
