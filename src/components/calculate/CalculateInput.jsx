import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined.js";
import { useState } from "react";

const CalculateInput = () => {
  const [buttonColors, setButtonColors] = useState({});

  const handleClick = (buttonName) => {
    setButtonColors((prevState) => {
      // First, create a new object where all button colors are set to "default"
      const resetColors = Object.keys(prevState).reduce((acc, curr) => {
        acc[curr] = "default";
        return acc;
      }, {});

      // Then, set the clicked button's color to "blue"
      resetColors[buttonName] = "blue";

      return resetColors;
    });
  };

  return (
    <div className="w-[386px] h-[621px] left-[60px] relative">
      <div className=" w-[386px] h-[621px] top-0 left-0">
        <div className="relative w-[400px] h-[621px]">
          <div className="absolute top-0 left-0 [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[20px] leading-[30px] whitespace-nowrap">
            Calculator Input
          </div>
          <div>
            <div className="absolute top-[54px] left-[7px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#9095a0] text-[14px] leading-[22px] whitespace-nowrap">
              DIAMOND ORIGIN
            </div>
            <button
              onClick={() => handleClick("natual")}
              className={`w-[190px] h-[37px] top-[85px] left-[8px] absolute rounded-[4px] ${buttonColors["natual"] === "blue" ? "bg-indigo-600" : "bg-gray-100"} border border-solid border-[#9095a0]`}
            >
              <div
                className={`absolute top-[10px] left-[40px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonColors["natual"] === "blue" ? "text-white" : "text-[#171a1f]"} text-[12px] leading-[20px] whitespace-nowrap`}
              >
                NATURAL
              </div>
              <PublicOutlinedIcon className="absolute w-[15px] h-[15px] top-[7px] left-[8px]" />
            </button>
            <button
              onClick={() => handleClick("labGrown")}
              className={`absolute w-[184px] h-[38px] top-[84px] left-[202px] rounded-[4px] ${buttonColors["labGrown"] === "blue" ? "bg-indigo-600" : "bg-gray-100"} border border-solid border-[#9095a0] `}
            >
              <div
                className={`absolute top-[10px] left-[40px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonColors["labGrown"] === "blue" ? "text-white" : "text-[#171a1f]"} text-[12px] leading-[20px] whitespace-nowrap`}
              >
                LAB GROWN
              </div>
              <ScienceOutlinedIcon className="absolute w-[15px] h-[15px] top-[7px] left-[10px]" />
            </button>
          </div>
          <div>
            <div className="absolute top-[138px] left-[6px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#9095a0] text-[14px]leading-[22px] whitespace-nowrap">
              SHAPE
            </div>
            <button
              onClick={() => handleClick("heart")}
              className={`w-[71px] h-[33px] top-[204px] left-[312px] absolute rounded-[4px] ${buttonColors["heart"] === "blue" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[7px] left-[21px] [font-family:'Inter-Regular',Helvetica] font-normal text-[10px] text-center whitespace-nowrap ${buttonColors["heart"] === "blue" ? "text-white" : "text-[#171a1f]"}`}
              >
                HEART
              </div>
            </button>
            <button
              onClick={() => handleClick("princess")}
              className={`w-[71px] h-[33px] top-[166px] left-[312px] absolute rounded-[4px] ${buttonColors["princess"] === "blue" ? "bg-indigo-600" : "bg-gray-100"} shadow-[0px_0px_1px_#171a1f2,0px_0px_2px_#171a1f1f]`}
            >
              <div
                className={`absolute top-[7px] left-[13px] [font-family:'Inter-Regular',Helvetica] font-normal text-[10px] text-center whitespace-nowrap ${buttonColors["princess"] === "blue" ? "text-white" : "text-[#171a1f]"}`}
              >
                PRINCESS
              </div>
            </button>
            <button
              onClick={() => handleClick("asscher")}
              className={`w-[71px] h-[33px] top-[204px] left-[236px] absolute rounded-[4px] ${buttonColors["asscher"] === "blue" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[7px] left-[14px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonColors["asscher"] === "blue" ? "text-white" : "text-[#171a1f]"} text-[10px] text-center whitespace-nowrap`}
              >
                ASSCHER
              </div>
            </button>
            <button
              onClick={() => handleClick("oval")}
              className={`w-[71px] h-[33px] top-[166px] left-[236px] absolute rounded-[4px] ${buttonColors["oval"] === "blue" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[7px] left-[24px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonColors["oval"] === "blue" ? "text-white" : "text-[#171a1f]"} text-[10px] text-center whitespace-nowrap`}
              >
                OVAL
              </div>
            </button>
            <button
              onClick={() => handleClick("marquise")}
              className={`w-[71px] h-[33px] top-[204px] left-[160px] absolute rounded-[4px] ${buttonColors["marquise"] === "blue" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`left-[11px] absolute top-[7px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonColors["marquise"] === "blue" ? "text-white" : "text-[#171a1f]"} text-[10px] text-center whitespace-nowrap`}
              >
                MARQUISE
              </div>
            </button>
            <button
              onClick={() => handleClick("emerald")}
              className={`w-[71px] h-[33px] top-[166px] left-[160px] absolute rounded-[4px] ${buttonColors["emerald"] === "blue" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`left-[14px] absolute top-[7px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonColors["emerald"] === "blue" ? "text-white" : "text-[#171a1f]"} text-[10px] text-center whitespace-nowrap`}
              >
                EMERALD
              </div>
            </button>

            <button
              onClick={() => handleClick("pear")}
              className={`w-[71px] h-[33px] top-[204px] left-[9px] absolute rounded-[4px] ${buttonColors["pear"] === "blue" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[7px] left-[23px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonColors["pear"] === "blue" ? "text-white" : "text-[#171a1f]"} text-[10px] text-center whitespace-nowrap`}
              >
                PEAR
              </div>
            </button>

            <button
              onClick={() => handleClick("radiant")}
              className={`w-[71px] h-[33px] top-[204px] left-[85px] absolute rounded-[4px] ${buttonColors["radiant"] === "blue" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[7px] left-[14px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonColors["radiant"] === "blue" ? "text-white" : "text-[#171a1f]"} text-[10px] text-center whitespace-nowrap`}
              >
                RADIANT
              </div>
            </button>

            <button
              onClick={() => handleClick("cushion")}
              className={`w-[71px] h-[33px] top-[166px] left-[85px] absolute rounded-[4px] ${buttonColors["cushion"] === "blue" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[7px] left-[13px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonColors["cushion"] === "blue" ? "text-white" : "text-[#171a1f]"} text-[10px] text-center whitespace-nowrap`}
              >
                CUSHION
              </div>
            </button>

            <button
              onClick={() => handleClick("round")}
              className={`w-[70px] h-[32px] top-[166px] left-[10px] absolute rounded-[4px] ${buttonColors["round"] === "blue" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[7px] left-[17px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonColors["round"] === "blue" ? "text-white" : "text-[#171a1f]"} text-[10px] text-center whitespace-nowrap`}
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
              className={`w-[90px] h-[33px] top-[414px] left-[293px] absolute rounded-[4px] ${buttonColors["d"] === "blue" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[6px] left-[42px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonColors["d"] === "blue" ? "text-white" : "text-[#171a1f]"} text-[14px] leading-[22px] whitespace-nowrap`}
              >
                D
              </div>
            </button>

            <button
              onClick={() => handleClick("h")}
              className={`w-[90px] h-[33px] top-[376px] left-[293px] absolute rounded-[4px] ${buttonColors["h"] === "blue" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[6px] left-[42px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonColors["h"] === "blue" ? "text-white" : "text-[#171a1f]"} text-[14px] leading-[22px] whitespace-nowrap`}
              >
                H
              </div>
            </button>

            <button
              onClick={() => handleClick("e")}
              className={`w-[90px] h-[33px] top-[414px] left-[198px] absolute rounded-[4px] ${buttonColors["e"] === "blue" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[6px] left-[41px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonColors["e"] === "blue" ? "text-white" : "text-[#171a1f]"} text-[14px] leading-[22px] whitespace-nowrap`}
              >
                E
              </div>
            </button>

            <button
              onClick={() => handleClick("k")}
              className={`w-[90px] h-[33px] top-[376px] left-[9px] absolute rounded-[4px] ${buttonColors["k"] === "blue" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[6px] left-[41px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonColors["k"] === "blue" ? "text-white" : "text-[#171a1f]"} text-[14px] leading-[22px] whitespace-nowrap`}
              >
                K
              </div>
            </button>

            <button
              onClick={() => handleClick("f")}
              className={`w-[90px] h-[33px] top-[414px] left-[104px] absolute rounded-[4px] ${buttonColors["f"] === "blue" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[6px] left-[42px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonColors["f"] === "blue" ? "text-white" : "text-[#171a1f]"} text-[14px] leading-[22px] whitespace-nowrap`}
              >
                F
              </div>
            </button>

            <button
              onClick={() => handleClick("j")}
              className={`w-[90px] h-[33px] top-[376px] left-[104px] absolute rounded-[4px] ${buttonColors["j"] === "blue" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[6px] left-[41px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonColors["j"] === "blue" ? "text-white" : "text-[#171a1f]"} text-[14px] leading-[22px] whitespace-nowrap`}
              >
                J
              </div>
            </button>

            <button
              onClick={() => handleClick("g")}
              className={`w-[89px] h-[33px] top-[414px] left-[10px] absolute rounded-[4px] ${buttonColors["g"] === "blue" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[9px] left-[39px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonColors["g"] === "blue" ? "text-white" : "text-[#171a1f]"} text-[14px] leading-[14px] whitespace-nowrap`}
              >
                G
              </div>
            </button>

            <button
              onClick={() => handleClick("i")}
              className={`absolute w-[90px] h-[33px] top-[376px] left-[198px] rounded-[4px] ${buttonColors["i"] === "blue" ? "bg-indigo-600" : "bg-gray-100"}`}
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
              className={`w-[90px] h-[33px] top-[528px] left-[293px] absolute rounded-[4px] ${buttonColors["fl"] === "blue" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[5px] left-[37px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonColors["fl"] === "blue" ? "text-white" : "text-[#171a1f]"} text-[14px] leading-[22px] whitespace-nowrap`}
              >
                FL
              </div>
            </button>

            <button
              onClick={() => handleClick("vs1")}
              className={`w-[90px] h-[33px] top-[490px] left-[293px] absolute rounded-[4px] ${buttonColors["vs1"] === "blue" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[6px] left-[33px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonColors["vs1"] === "blue" ? "text-white" : "text-[#171a1f]"} text-[14px] leading-[20px] whitespace-nowrap`}
              >
                VS1
              </div>
            </button>

            <button
              onClick={() => handleClick("if")}
              className={`w-[90px] h-[33px] top-[528px] left-[198px] absolute rounded-[4px] ${buttonColors["if"] === "blue" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[5px] left-[39px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonColors["if"] === "blue" ? "text-white" : "text-[#171a1f]"} text-[14px] leading-[22px] whitespace-nowrap`}
              >
                IF
              </div>
            </button>

            <button
              onClick={() => handleClick("vvs2")}
              className={`w-[90px] h-[33px] top-[528px] left-[9px] absolute rounded-[4px] ${buttonColors["vvs2"] === "blue" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[8px] left-[28px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonColors["vvs2"] === "blue" ? "text-white" : "text-[#171a1f]"} text-[14px] text-center whitespace-nowrap`}
              >
                VVS2
              </div>
            </button>

            <button
              onClick={() => handleClick("si2")}
              className={`w-[90px] h-[33px] top-[490px] left-[9px] absolute rounded-[4px] ${buttonColors["si2"] === "blue" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[6px] left-[34px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonColors["si2"] === "blue" ? "text-white" : "text-[#171a1f]"} text-[14px] leading-[22px] whitespace-nowrap`}
              >
                SI2
              </div>
            </button>

            <button
              onClick={() => handleClick("vvs1")}
              className={`w-[90px] h-[33px] top-[528px] left-[104px] absolute rounded-[4px] ${buttonColors["vvs1"] === "blue" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[8px] left-[28px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonColors["vvs1"] === "blue" ? "text-white" : "text-[#171a1f]"} text-[14px] whitespace-nowrap`}
              >
                VVS1
              </div>
            </button>

            <button
              onClick={() => handleClick("sl1")}
              className={`w-[90px] h-[33px] top-[490px] left-[104px] absolute rounded-[4px] ${buttonColors["sl1"] === "blue" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[6px] left-[36px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonColors["sl1"] === "blue" ? "text-white" : "text-[#171a1f]"} text-[14px] leading-[22px] whitespace-nowrap`}
              >
                SL1
              </div>
            </button>

            <button
              onClick={() => handleClick("vs2")}
              className={`w-[89px] h-[32px] top-[490px] left-[199px] absolute rounded-[4px] ${buttonColors["vs2"] === "blue" ? "bg-indigo-600" : "bg-gray-100"}`}
            >
              <div
                className={`absolute top-[9px] left-[32px] [font-family:'Inter-Regular',Helvetica] font-normal ${buttonColors["vs2"] === "blue" ? "text-white" : "text-[#171a1f]"} text-[14px] leading-[14px] whitespace-nowrap`}
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
        </div>
      </div>
    </div>
  );
};

export default CalculateInput;
