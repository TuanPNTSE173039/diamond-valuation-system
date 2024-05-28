import { useState } from "react";
import { Box, Button } from "@mui/material";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";

const CalculateInputForm = () => {
  const [buttonClick, setButtonClick] = useState({});

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
              onClick={() => handleClick("natual")}
              sx={{
                width: 190,
                height: 37,
                position: "absolute",
                top: 85,
                left: 8,
                backgroundColor:
                  buttonClick["natual"] === "clicked" ? "#4F46E5" : "#f5f5f5",
               ":hover": { bgcolor: "#4F46E5", color: "white" },
                fontFamily: "Inter-Regular, Helvetica",
                color:
                    buttonClick["natual"] === "clicked" ? "white" : "#171a1f",
                fontSize: 12,
              }}
            >

                NATURAL

              <PublicOutlinedIcon
                sx={{
                  position: "absolute",
                  width: 20,
                  height: 20,
                  top: 8,
                  left: 10,
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
               ":hover": { bgcolor: "#4F46E5", color: "white" },
                fontFamily: "Inter-Regular, Helvetica",
                color:
                    buttonClick["labGrown"] === "clicked" ? "white" : "#171a1f",
                fontSize: 12,
              }}
            >

                LAB GROWN
              
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
          <Box>
            <Box sx={{
              position: 'absolute',
              top: 138,
              left: 6,
              fontFamily: 'Inter-Regular,Helvetica',
              color: '#9095a0',
              fontSize: 14,
              lineHeight: '22px',
              whiteSpace: 'nowrap' }}>
              SHAPE
            </Box>
            <Button
                onClick={() => handleClick("heart")}
                sx={{
                  width: 71,
                  height: 33,
                  position: 'absolute',
                  top: 204, left: 312,
                  
                  backgroundColor: buttonClick["heart"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                 ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: 'Inter-Regular,Helvetica',
                  fontSize: 10,
                  color: buttonClick["pear"] === "clicked" ? "white" : "#171a1f",
                }}
            >

                HEART

            </Button>
            <Button
                onClick={() => handleClick("princess")}
                sx={{
                  width: 71,
                  height: 33,
                  position: 'absolute',
                  top: 166,
                  left: 312,
                  backgroundColor: buttonClick["princess"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                 ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: 'Inter-Regular,Helvetica',
                  fontSize: 10,
                  color: buttonClick["pear"] === "clicked" ? "white" : "#171a1f",
                }}
            >

                PRINCESS

            </Button>
            <Button
                onClick={() => handleClick("asscher")}
                sx={{
                  width: 71,
                  height: 33,
                  position: 'absolute',
                  top: 204,
                  left: 236,
                  backgroundColor: buttonClick["asscher"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                  
                 ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: 'Inter-Regular,Helvetica',
                  fontSize: 10,
                  color: buttonClick["pear"] === "clicked" ? "white" : "#171a1f",
                }}
            >

                ASSCHER

            </Button>
            <Button
                onClick={() => handleClick("oval")}
                sx={{
                  width: 71,
                  height: 33,
                  position: 'absolute',
                  top: 166,
                  left: 236,
                  backgroundColor: buttonClick["oval"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                  
                 ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: 'Inter-Regular,Helvetica',
                  fontSize: 10,
                  color: buttonClick["pear"] === "clicked" ? "white" : "#171a1f",
                }}
            >

                OVAL

            </Button>

            <Button
                onClick={() => handleClick("marquise")}
                sx={{
                  width: 71,
                  height: 33,
                  position: 'absolute',
                  top: 204,
                  left: 160,
                  backgroundColor: buttonClick["marquise"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                  
                 ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: 'Inter-Regular,Helvetica',
                  fontSize: 10,
                  color: buttonClick["pear"] === "clicked" ? "white" : "#171a1f",
                }}
            >

                MARQUISE
            </Button>

            <Button
                onClick={() => handleClick("emerald")}
                sx={{
                  width: 71,
                  height: 33,
                  position: 'absolute',
                  top: 166,
                  left: 160,
                  backgroundColor: buttonClick["emerald"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                  
                 ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: 'Inter-Regular,Helvetica',
                  fontSize: 10,
                  color: buttonClick["pear"] === "clicked" ? "white" : "#171a1f",
                }}
            >

                EMERALD

            </Button>


            <Button
                onClick={() => handleClick("pear")}
                sx={{
                  width: 71,
                  height: 33,
                  position: 'absolute',
                  top: 204,
                  left: 9,
                  backgroundColor: buttonClick["pear"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                  
                 ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: 'Inter-Regular,Helvetica',
                  fontSize: 10,
                  color: buttonClick["pear"] === "clicked" ? "white" : "#171a1f",
                }}
            >

                PEAR

            </Button>
            <Button
                onClick={() => handleClick("radiant")}
                sx={{
                  width: 71,
                  height: 33,
                  position: 'absolute',
                  top: 204,
                  left: 85,
                  backgroundColor: buttonClick["radiant"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                  
                 ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: 'Inter-Regular,Helvetica',
                  fontSize: 10,
                  color: buttonClick["round"] === "clicked" ? "white" : "#171a1f",
                }}
            >

                RADIANT
            </Button>
            <Button
                onClick={() => handleClick("cushion")}
                sx={{
                  width: 71,
                  height: 33,
                  position: 'absolute',
                  top: 166,
                  left: 85,
                  backgroundColor: buttonClick["cushion"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                  
                 ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: 'Inter-Regular,Helvetica',
                  fontSize: 10,
                  color: buttonClick["round"] === "clicked" ? "white" : "#171a1f",
                }}
            >

                CUSHION
            </Button>
            <Button
                onClick={() => handleClick("round")}
                sx={{
                  width: 70,
                  height: 32,
                  position: 'absolute',
                  top: 166,
                  left: 10,
                  backgroundColor: buttonClick["round"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                 ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: 'Inter-Regular,Helvetica',
                  fontSize: 10,
                    color: buttonClick["round"] === "clicked" ? "white" : "#171a1f",
                }}
            >

                ROUND

            </Button>

          </Box>

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

          <Box>
            <Box sx={{ position: 'absolute', top: 348, left: 7, fontFamily: 'Inter-Regular,Helvetica', fontSize: 14, color: '#9095a0', whiteSpace: 'nowrap' }}>
              COLOR
            </Box>
            <Button
                onClick={() => handleClick("d")}
                sx={{
                  width: 90,
                  height: 33,
                  position: 'absolute',
                  top: 414,
                  left: 293,
                  
                  backgroundColor: buttonClick["d"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                 ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: 'Inter-Regular,Helvetica',
                  fontSize: 14,
                  color: buttonClick["k"] === "clicked" ? "white" : "#171a1f",
                }}
            >
              D
            </Button>

            <Button
                onClick={() => handleClick("h")}
                sx={{
                  width: 90,
                  height: 33,
                  position: 'absolute',
                  top: 376,
                  left: 293,
                  
                  backgroundColor: buttonClick["h"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                 ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: 'Inter-Regular,Helvetica',
                  fontSize: 14,
                  color: buttonClick["k"] === "clicked" ? "white" : "#171a1f",
                }}
            >
              H
            </Button>


            <Button
                onClick={() => handleClick("e")}
                sx={{
                  width: 90,
                  height: 33,
                  position: 'absolute',
                  top: 414,
                  left: 198,
                  
                  backgroundColor: buttonClick["e"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                 ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: 'Inter-Regular,Helvetica',
                  fontSize: 14,
                  color: buttonClick["k"] === "clicked" ? "white" : "#171a1f",
                }}
            >
              E
            </Button>
            <Button
                onClick={() => handleClick("k")}
                sx={{
                  width: 90,
                  height: 33,
                  position: 'absolute',
                  top: 376,
                  left: 9,
                  
                  backgroundColor: buttonClick["k"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                 ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: 'Inter-Regular,Helvetica',
                  fontSize: 14,
                  color: buttonClick["k"] === "clicked" ? "white" : "#171a1f",
                }}
            >

                K

            </Button>

            <Button
                onClick={() => handleClick("f")}
                sx={{
                  width: 90,
                  height: 33,
                  position: 'absolute',
                  top: 414,
                  left: 104,
                  
                  backgroundColor: buttonClick["f"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                 ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: 'Inter-Regular,Helvetica',
                  fontSize: 14,
                  color: buttonClick["f"] === "clicked" ? "white" : "#171a1f",
                }}
            >

                F
            </Button>


            <Button
                onClick={() => handleClick("j")}
                sx={{
                  width: 90,
                  height: 33,
                  position: 'absolute',
                  top: 376,
                  left: 104,
                  
                  backgroundColor: buttonClick["j"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                 ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: 'Inter-Regular,Helvetica',
                  fontSize: 14,
                  color: buttonClick["j"] === "clicked" ? "white" : "#171a1f",
                }}
>
                J
            </Button>


            <Button
                onClick={() => handleClick("g")}
                sx={{
                  width: 89,
                  height: 33,
                  position: 'absolute',
                  top: 414,
                  left: 10,
                  backgroundColor: buttonClick["g"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                 ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: 'Inter-Regular,Helvetica',
                  fontSize: 14,
                  color: buttonClick["g"] === "clicked" ? "white" : "#171a1f",
                }}
            >
                G
            </Button>

            <Button
                onClick={() => handleClick("i")}
                sx={{
                  width: "90px",
                  height: "33px",
                  position: 'absolute',
                  top: "376px",
                  left: "198px",
                  backgroundColor: buttonClick["i"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                 ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: 'Inter-Regular,Helvetica',
                  fontSize: "14px",
                  color: buttonClick["i"] === "clicked" ? "white" : "#171a1f",
                }}
            >
              I
            </Button>
          </Box>

          <Box>
            <Box
                sx={{
                  position: 'absolute',
                  top: '462px',
                  left: '7px',
                  fontFamily: 'Inter-Regular,Helvetica',
                  fontSize: '14px',
                  color: '#9095a0',
                  lineHeight: '22px',
                  whiteSpace: 'nowrap',
                }}
            >
              CLARITY
            </Box>
            <Button
                onClick={() => handleClick("fl")}
                sx={{
                  width: '90px',
                  height: '33px',
                  position: 'absolute',
                  top: '528px',
                  left: '293px',
                  backgroundColor: buttonClick["fl"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                 ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: 'Inter-Regular,Helvetica',
                  fontSize: '14px',
                  color: buttonClick["fl"] === "clicked" ? "white" : "#171a1f",
                }}
            >
              FL
            </Button>

            <Button
                onClick={() => handleClick("vs1")}
                sx={{
                  width: '90px',
                  height: '33px',
                  position: 'absolute',
                  top: '490px',
                  left: '293px',
                  backgroundColor: buttonClick["vs1"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                 ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: 'Inter-Regular,Helvetica',
                  fontSize: '14px',
                  color: buttonClick["vs1"] === "clicked" ? "white" : "#171a1f",
                }}
            >
              VS1
            </Button>

            <Button
                onClick={() => handleClick("if")}
                sx={{
                  width: '90px',
                  height: '33px',
                  position: 'absolute',
                  top: '528px',
                  left: '198px',
                  backgroundColor: buttonClick["if"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                 ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: 'Inter-Regular,Helvetica',
                  fontSize: '14px',
                  color: buttonClick["if"] === "clicked" ? "white" : "#171a1f",
                }}
            >
              IF
            </Button>

            <Button
                onClick={() => handleClick("vvs2")}
                sx={{
                  width: '90px',
                  height: '33px',
                  position: 'absolute',
                  top: '528px',
                  left: '9px',
                  backgroundColor: buttonClick["vvs2"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                 ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: 'Inter-Regular,Helvetica',
                  fontSize: '14px',
                  color: buttonClick["vvs2"] === "clicked" ? "white" : "#171a1f",
                }}
            >
              VVS2
            </Button>

            <Button
                onClick={() => handleClick("si2")}
                sx={{
                  width: '90px',
                  height: '33px',
                  position: 'absolute',
                  top: '490px',
                  left: '9px',
                  backgroundColor: buttonClick["si2"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                 ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: 'Inter-Regular,Helvetica',
                  fontSize: '14px',
                  color: buttonClick["si2"] === "clicked" ? "white" : "#171a1f",
                }}
            >
              SI2
            </Button>


            <Button
                onClick={() => handleClick("vvs1")}
                sx={{
                  width: '90px',
                  height: '33px',
                  position: 'absolute',
                  top: '528px',
                  left: '104px',
                  backgroundColor: buttonClick["vvs1"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                 ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: 'Inter-Regular,Helvetica',
                  fontSize: '14px',
                  color: buttonClick["vvs1"] === "clicked" ? "white" : "#171a1f",
                }}
            >
              VVS1
            </Button>


            <Button
                onClick={() => handleClick("sl1")}
                sx={{
                  width: '90px',
                  height: '33px',
                  position: 'absolute',
                  top: '490px',
                  left: '104px',
                  backgroundColor: buttonClick["sl1"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                 ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: 'Inter-Regular,Helvetica',
                  fontSize: '14px',
                  color: buttonClick["sl1"] === "clicked" ? "white" : "#171a1f",
                }}
            >
              SL1
            </Button>


            <Button
                onClick={() => handleClick("vs2")}
                sx={{
                  width: '89px',
                  height: '32px',
                  position: 'absolute',
                  top: '490px',
                  left: '199px',
                  backgroundColor: buttonClick["vs2"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                 ":hover": { bgcolor: "#4F46E5", color: "white" },
                  fontFamily: 'Inter-Regular,Helvetica',
                  fontSize: '14px',
                  color: buttonClick["vs2"] === "clicked" ? "white" : "#171a1f",
                }}
            >
              VS2
            </Button>

          </Box>

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
