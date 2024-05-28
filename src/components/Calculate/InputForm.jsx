import { useState } from "react";
import { Box, Button } from "@mui/material";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  noHover: {
    backgroundColor: "#4F46E5", // This is the original color of the button
    "&:hover": {
      backgroundColor: "#4F46E5", // This is the original color of the button
    },
  },
});

const CalculateInputForm = () => {
  const [buttonClick, setButtonClick] = useState({});

  const classes = useStyles();

  const handleClick = (buttonName) => {
    setButtonClick((prevState) => {
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
    <Box sx={{ width: 386, height: 621, position: "relative" }}>
      <Box
        sx={{
          width: 386,
          height: 621,
          position: "absolute",
          left: "110px",
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
          <Box>
            <Box
              sx={{
                position: "absolute",
                top: 54,
                left: 7,
                fontFamily: "Inter-Regular, Helvetica",
                color: "#9095a0",
                fontSize: 14,
              }}
            >
              DIAMOND ORIGIN
            </Box>
            <Button
              //className={classes.noHover}
              onClick={() => handleClick("natual")}
              sx={{
                width: 190,
                height: 37,
                position: "absolute",
                top: 85,
                left: 8,
                backgroundColor:
                  buttonClick["natual"] === "clicked" ? "#4F46E5" : "#f5f5f5",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 10,
                  left: 40,
                  fontFamily: "Inter-Regular, Helvetica",
                  fontWeight: "normal",
                  color:
                    buttonClick["natual"] === "clicked" ? "white" : "#171a1f",
                  fontSize: 12,
                }}
              >
                NATURAL
              </Box>
              <PublicOutlinedIcon
                sx={{
                  position: "absolute",
                  width: 20,
                  height: 20,
                  top: 8,
                  left: 8,
                }}
              />
            </Button>
            <Button
              onClick={() => handleClick("labGrown")}
              sx={{
                width: 184,
                height: 38,
                position: "absolute",
                top: 84,
                left: 202,
                backgroundColor:
                  buttonClick["labGrown"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                ":hover": { bgcolor: "#4F46E5" },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 10,
                  left: 40,
                  fontFamily: "Inter-Regular, Helvetica",
                  fontWeight: "normal",
                  color:
                    buttonClick["labGrown"] === "clicked" ? "white" : "#171a1f",
                  fontSize: 12,
                  lineHeight: "20px",
                  whiteSpace: "nowrap",
                }}
              >
                LAB GROWN
              </Box>
              <ScienceOutlinedIcon
                sx={{
                  position: "absolute",
                  width: 20,
                  height: 20,
                  top: 8,
                  left: 10,
                }}
              />
            </Button>
          </Box>
          <div>
            <div className="absolute top-[138px] left-[6px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#9095a0] text-[14px]leading-[22px] whitespace-nowrap">
              SHAPE
            </div>
            <button
              onClick={() => handleClick("heart")}
              className={`w-[71px] h-[33px] top-[204px] left-[312px] absolute rounded-[4px] ${buttonClick["heart"] === "clicked" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[7px] left-[21px] [font-family:'Inter-Regular',Helvetica] font-normal text-[10px] text-center whitespace-nowrap ${buttonClick["heart"] === "clicked" ? "text-white" : "text-[#171a1f]"}`}
              >
                HEART
              </div>
            </button>
            <button
              onClick={() => handleClick("princess")}
              className={`w-[71px] h-[33px] top-[166px] left-[312px] absolute rounded-[4px] ${buttonClick["princess"] === "clicked" ? "bg-indigo-600" : "bg-gray-100"} shadow-[0px_0px_1px_#171a1f2,0px_0px_2px_#171a1f1f]`}
            >
              <div
                className={`absolute top-[7px] left-[13px] [font-family:'Inter-Regular',Helvetica] font-normal text-[10px] text-center whitespace-nowrap ${buttonClick["princess"] === "clicked" ? "text-white" : "text-[#171a1f]"}`}
              >
                PRINCESS
              </div>
            </button>
            <button
              onClick={() => handleClick("asscher")}
              className={`w-[71px] h-[33px] top-[204px] left-[236px] absolute rounded-[4px] ${buttonClick["asscher"] === "clicked" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[7px] left-[14px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonClick["asscher"] === "clicked" ? "text-white" : "text-[#171a1f]"} text-[10px] text-center whitespace-nowrap`}
              >
                ASSCHER
              </div>
            </button>
            <button
              onClick={() => handleClick("oval")}
              className={`w-[71px] h-[33px] top-[166px] left-[236px] absolute rounded-[4px] ${buttonClick["oval"] === "clicked" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[7px] left-[24px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonClick["oval"] === "clicked" ? "text-white" : "text-[#171a1f]"} text-[10px] text-center whitespace-nowrap`}
              >
                OVAL
              </div>
            </button>
            <button
              onClick={() => handleClick("marquise")}
              className={`w-[71px] h-[33px] top-[204px] left-[160px] absolute rounded-[4px] ${buttonClick["marquise"] === "clicked" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`left-[11px] absolute top-[7px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonClick["marquise"] === "clicked" ? "text-white" : "text-[#171a1f]"} text-[10px] text-center whitespace-nowrap`}
              >
                MARQUISE
              </div>
            </button>
            <button
              onClick={() => handleClick("emerald")}
              className={`w-[71px] h-[33px] top-[166px] left-[160px] absolute rounded-[4px] ${buttonClick["emerald"] === "clicked" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`left-[14px] absolute top-[7px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonClick["emerald"] === "clicked" ? "text-white" : "text-[#171a1f]"} text-[10px] text-center whitespace-nowrap`}
              >
                EMERALD
              </div>
            </button>

            <button
              onClick={() => handleClick("pear")}
              className={`w-[71px] h-[33px] top-[204px] left-[9px] absolute rounded-[4px] ${buttonClick["pear"] === "clicked" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[7px] left-[23px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonClick["pear"] === "clicked" ? "text-white" : "text-[#171a1f]"} text-[10px] text-center whitespace-nowrap`}
              >
                PEAR
              </div>
            </button>

            <button
              onClick={() => handleClick("radiant")}
              className={`w-[71px] h-[33px] top-[204px] left-[85px] absolute rounded-[4px] ${buttonClick["radiant"] === "clicked" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[7px] left-[14px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonClick["radiant"] === "clicked" ? "text-white" : "text-[#171a1f]"} text-[10px] text-center whitespace-nowrap`}
              >
                RADIANT
              </div>
            </button>

            <button
              onClick={() => handleClick("cushion")}
              className={`w-[71px] h-[33px] top-[166px] left-[85px] absolute rounded-[4px] ${buttonClick["cushion"] === "clicked" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[7px] left-[13px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonClick["cushion"] === "clicked" ? "text-white" : "text-[#171a1f]"} text-[10px] text-center whitespace-nowrap`}
              >
                CUSHION
              </div>
            </button>

            <button
              onClick={() => handleClick("round")}
              className={`w-[70px] h-[32px] top-[166px] left-[10px] absolute rounded-[4px] ${buttonClick["round"] === "clicked" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[7px] left-[17px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonClick["round"] === "clicked" ? "text-white" : "text-[#171a1f]"} text-[10px] text-center whitespace-nowrap`}
              >
                ROUND
              </div>
            </button>
          </div>

          <div>
            <div className="absolute top-[252px] left-[7px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#9095a0] text-[14px] leading-[22px] whitespace-nowrap">
              CARAT
            </div>
            <button className="all-[unset] box-border w-[61px] h-[28px] top-[277px] left-[167px] rounded-[3px] absolute bg-indigo-600 overflow-hidden">
              <div className="top-[2px] left-[16px] text-white leading-[23px] absolute [font-family:'Inter-Regular',Helvetica] font-normal text-[14px] whitespace-nowrap">
                1,00
              </div>
            </button>
            <div className="absolute w-[373px] h-[22px] top-[313px] left-[10px]">
              <div className="relative h-[22px]">
                <div className="absolute w-[373px] h-[6px] top-[8px] left-0 bg-[#a6f5ff] rounded-[3px] overflow-hidden">
                  <div className="w-[141px] h-[6px] bg-[#00bdd6]" />
                </div>
                <div className="absolute w-[22px] h-[22px] top-0 left-[130px] bg-white rounded-[11px] border border-solid border-[#00bdd6] shadow-[0px_0px_1px_#00bdd612,0px_0px_2px_#00bdd61f]" />
              </div>
            </div>
          </div>

          <div>
            <div className="absolute top-[348px] left-[7px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#9095a0] text-[14px] leading-[22px] whitespace-nowrap">
              COLOR
            </div>
            <button
              onClick={() => handleClick("d")}
              className={`w-[90px] h-[33px] top-[414px] left-[293px] absolute rounded-[4px] ${buttonClick["d"] === "clicked" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[6px] left-[42px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonClick["d"] === "clicked" ? "text-white" : "text-[#171a1f]"} text-[14px] leading-[22px] whitespace-nowrap`}
              >
                D
              </div>
            </button>

            <button
              onClick={() => handleClick("h")}
              className={`w-[90px] h-[33px] top-[376px] left-[293px] absolute rounded-[4px] ${buttonClick["h"] === "clicked" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[6px] left-[42px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonClick["h"] === "clicked" ? "text-white" : "text-[#171a1f]"} text-[14px] leading-[22px] whitespace-nowrap`}
              >
                H
              </div>
            </button>

            <button
              onClick={() => handleClick("e")}
              className={`w-[90px] h-[33px] top-[414px] left-[198px] absolute rounded-[4px] ${buttonClick["e"] === "clicked" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[6px] left-[41px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonClick["e"] === "clicked" ? "text-white" : "text-[#171a1f]"} text-[14px] leading-[22px] whitespace-nowrap`}
              >
                E
              </div>
            </button>

            <button
              onClick={() => handleClick("k")}
              className={`w-[90px] h-[33px] top-[376px] left-[9px] absolute rounded-[4px] ${buttonClick["k"] === "clicked" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[6px] left-[41px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonClick["k"] === "clicked" ? "text-white" : "text-[#171a1f]"} text-[14px] leading-[22px] whitespace-nowrap`}
              >
                K
              </div>
            </button>

            <button
              onClick={() => handleClick("f")}
              className={`w-[90px] h-[33px] top-[414px] left-[104px] absolute rounded-[4px] ${buttonClick["f"] === "clicked" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[6px] left-[42px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonClick["f"] === "clicked" ? "text-white" : "text-[#171a1f]"} text-[14px] leading-[22px] whitespace-nowrap`}
              >
                F
              </div>
            </button>

            <button
              onClick={() => handleClick("j")}
              className={`w-[90px] h-[33px] top-[376px] left-[104px] absolute rounded-[4px] ${buttonClick["j"] === "clicked" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[6px] left-[41px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonClick["j"] === "clicked" ? "text-white" : "text-[#171a1f]"} text-[14px] leading-[22px] whitespace-nowrap`}
              >
                J
              </div>
            </button>

            <button
              onClick={() => handleClick("g")}
              className={`w-[89px] h-[33px] top-[414px] left-[10px] absolute rounded-[4px] ${buttonClick["g"] === "clicked" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[9px] left-[39px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonClick["g"] === "clicked" ? "text-white" : "text-[#171a1f]"} text-[14px] leading-[14px] whitespace-nowrap`}
              >
                G
              </div>
            </button>

            <button
              onClick={() => handleClick("i")}
              className={`absolute w-[90px] h-[33px] top-[376px] left-[198px] rounded-[4px] ${buttonClick["i"] === "clicked" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div className="absolute top-[6px] left-[43px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] leading-[22px] whitespace-nowrap">
                I
              </div>
            </button>
          </div>

          <div>
            <div className="absolute top-[462px] left-[7px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#9095a0] text-[14px] leading-[22px] whitespace-nowrap">
              CLARITY
            </div>
            <button
              onClick={() => handleClick("fl")}
              className={`w-[90px] h-[33px] top-[528px] left-[293px] absolute rounded-[4px] ${buttonClick["fl"] === "clicked" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[5px] left-[37px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonClick["fl"] === "clicked" ? "text-white" : "text-[#171a1f]"} text-[14px] leading-[22px] whitespace-nowrap`}
              >
                FL
              </div>
            </button>

            <button
              onClick={() => handleClick("vs1")}
              className={`w-[90px] h-[33px] top-[490px] left-[293px] absolute rounded-[4px] ${buttonClick["vs1"] === "clicked" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[6px] left-[33px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonClick["vs1"] === "clicked" ? "text-white" : "text-[#171a1f]"} text-[14px] leading-[20px] whitespace-nowrap`}
              >
                VS1
              </div>
            </button>

            <button
              onClick={() => handleClick("if")}
              className={`w-[90px] h-[33px] top-[528px] left-[198px] absolute rounded-[4px] ${buttonClick["if"] === "clicked" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[5px] left-[39px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonClick["if"] === "clicked" ? "text-white" : "text-[#171a1f]"} text-[14px] leading-[22px] whitespace-nowrap`}
              >
                IF
              </div>
            </button>

            <button
              onClick={() => handleClick("vvs2")}
              className={`w-[90px] h-[33px] top-[528px] left-[9px] absolute rounded-[4px] ${buttonClick["vvs2"] === "clicked" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[8px] left-[28px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonClick["vvs2"] === "clicked" ? "text-white" : "text-[#171a1f]"} text-[14px] text-center whitespace-nowrap`}
              >
                VVS2
              </div>
            </button>

            <button
              onClick={() => handleClick("si2")}
              className={`w-[90px] h-[33px] top-[490px] left-[9px] absolute rounded-[4px] ${buttonClick["si2"] === "clicked" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[6px] left-[34px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonClick["si2"] === "clicked" ? "text-white" : "text-[#171a1f]"} text-[14px] leading-[22px] whitespace-nowrap`}
              >
                SI2
              </div>
            </button>

            <button
              onClick={() => handleClick("vvs1")}
              className={`w-[90px] h-[33px] top-[528px] left-[104px] absolute rounded-[4px] ${buttonClick["vvs1"] === "clicked" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[8px] left-[28px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonClick["vvs1"] === "clicked" ? "text-white" : "text-[#171a1f]"} text-[14px] whitespace-nowrap`}
              >
                VVS1
              </div>
            </button>

            <button
              onClick={() => handleClick("sl1")}
              className={`w-[90px] h-[33px] top-[490px] left-[104px] absolute rounded-[4px] ${buttonClick["sl1"] === "clicked" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[6px] left-[36px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonClick["sl1"] === "clicked" ? "text-white" : "text-[#171a1f]"} text-[14px] leading-[22px] whitespace-nowrap`}
              >
                SL1
              </div>
            </button>

            <button
              onClick={() => handleClick("vs2")}
              className={`w-[89px] h-[32px] top-[490px] left-[199px] absolute rounded-[4px] ${buttonClick["vs2"] === "clicked" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[9px] left-[32px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonClick["vs2"] === "clicked" ? "text-white" : "text-[#171a1f]"} text-[14px] leading-[14px] whitespace-nowrap`}
              >
                VS2
              </div>
            </button>
          </div>

          <button className="all-[unset] box-border w-[380px] h-[40px] top-[581px] left-[6px] rounded-[4px] absolute bg-indigo-600 overflow-hidden">
            <div className="absolute top-[8px] left-[165px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[15px] leading-[23px] whitespace-nowrap">
              Submit
            </div>
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default CalculateInputForm;
