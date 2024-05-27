import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined.js";
import { useState } from "react";

const CalculateInput = () => {
  const [color, setColor] = useState("default");

  const handleClick = () => {
    setColor("primary");
  };

  const handleMouseOver = () => {
    setColor("default");
  };

  return (
    <div className="w-[386px] h-[621px] left-[60px] relative">
      <div className=" w-[386px] h-[621px] top-0 left-0">
        <div className="relative w-[400px] h-[621px]">
          <div className="absolute top-0 left-0 [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
            Calculator Input
          </div>
          <div>
            <div className="absolute top-[54px] left-[7px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#9095a0] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
              DIAMOND ORIGIN
            </div>
            <button className="w-[190px] h-[37px] top-[85px] left-[8px] bg-indigo-600 absolute rounded-[4px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
              <div className="absolute top-[10px] left-[32px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[12px] tracking-[0] leading-[16px] whitespace-nowrap">
                NATURAL
              </div>
              <PublicOutlinedIcon className="absolute w-[19px] h-[19px] top-[9px] left-[8px]" />
            </button>
            <button className="absolute w-[184px] h-[38px] top-[84px] left-[202px] rounded-[4px]">
              <div className="absolute w-[184px] h-[38px] top-0 left-0 bg-gray-100 rounded-[4px] border border-solid border-[#9095a0]">
                <div className="absolute top-[10px] left-[33px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[12px] tracking-[0] leading-[20px] whitespace-nowrap">
                  LAB GROWN
                </div>
                <ScienceOutlinedIcon className="absolute w-[15px] h-[15px] top-[7px] left-[10px]" />
              </div>
            </button>
          </div>
          <div>
            <div className="absolute top-[138px] left-[6px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#9095a0] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
              SHAPE
            </div>
            <button className="w-[71px] h-[33px] top-[204px] left-[312px] bg-gray-100 absolute rounded-[4px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
              <div className="absolute top-[7px] left-[21px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[10px] text-center tracking-[0] leading-[16px] whitespace-nowrap">
                HEART
              </div>
            </button>
            <button className="w-[71px] h-[33px] top-[166px] left-[312px] bg-gray-100 absolute rounded-[4px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
              <div className="absolute top-[7px] left-[13px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[10px] text-center tracking-[0] leading-[16px] whitespace-nowrap">
                PRINCESS
              </div>
            </button>
            <button className="w-[71px] h-[33px] top-[204px] left-[236px] bg-gray-100 absolute rounded-[4px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
              <div className="absolute top-[7px] left-[14px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[10px] text-center tracking-[0] leading-[16px] whitespace-nowrap">
                ASSCHER
              </div>
            </button>
            <button className="w-[71px] h-[33px] top-[166px] left-[236px] bg-gray-100 absolute rounded-[4px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
              <div className="absolute top-[7px] left-[24px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[10px] text-center tracking-[0] leading-[16px] whitespace-nowrap">
                OVAL
              </div>
            </button>
            <button className="w-[71px] h-[33px] top-[204px] left-[160px] bg-gray-100 absolute rounded-[4px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
              <div className="left-[11px] absolute top-[7px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[10px] text-center tracking-[0] leading-[16px] whitespace-nowrap">
                MARQUISE
              </div>
            </button>
            <button className="w-[71px] h-[33px] top-[166px] left-[160px] bg-gray-100 absolute rounded-[4px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
              <div className="left-[14px] absolute top-[7px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[10px] text-center tracking-[0] leading-[16px] whitespace-nowrap">
                EMERALD
              </div>
            </button>
            <button className="w-[71px] h-[33px] top-[204px] left-[9px] bg-gray-100 absolute rounded-[4px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
              <div className="absolute top-[7px] left-[23px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[10px] text-center tracking-[0] leading-[16px] whitespace-nowrap">
                PEAR
              </div>
            </button>
            <button className="w-[71px] h-[33px] top-[204px] left-[85px] bg-gray-100 absolute rounded-[4px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
              <div className="absolute top-[7px] left-[14px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[10px] text-center tracking-[0] leading-[16px] whitespace-nowrap">
                RADIANT
              </div>
            </button>
            <button className="w-[71px] h-[33px] top-[166px] left-[85px] bg-gray-100 absolute rounded-[4px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
              <div className="absolute top-[7px] left-[13px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[10px] text-center tracking-[0] leading-[16px] whitespace-nowrap">
                CUSHION
              </div>
            </button>
            <button className="w-[70px] h-[32px] top-[166px] left-[10px] bg-indigo-600 absolute rounded-[4px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
              <div className="absolute top-[7px] left-[17px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[10px] text-center tracking-[0] leading-[16px] whitespace-nowrap">
                ROUND
              </div>
            </button>
          </div>

          <div>
            <div className="absolute top-[252px] left-[7px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#9095a0] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
              CARAT
            </div>
            <button className="all-[unset] box-border w-[61px] h-[28px] top-[277px] left-[167px] rounded-[3px] absolute bg-indigo-600 overflow-hidden">
              <div className="top-[2px] left-[16px] text-white leading-[23px] absolute [font-family:'Inter-Regular',Helvetica] font-normal text-[14px] tracking-[0] whitespace-nowrap">
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
            <div className="absolute top-[348px] left-[7px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#9095a0] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
              COLOR
            </div>
            <button className="w-[90px] h-[33px] top-[414px] left-[293px] bg-gray-100 absolute rounded-[4px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
              <div className="absolute top-[6px] left-[42px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                D
              </div>
            </button>
            <button className="w-[90px] h-[33px] top-[376px] left-[293px] bg-gray-100 absolute rounded-[4px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
              <div className="absolute top-[6px] left-[42px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                H
              </div>
            </button>
            <button className="w-[90px] h-[33px] top-[414px] left-[198px] bg-gray-100 absolute rounded-[4px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
              <div className="absolute top-[6px] left-[41px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                E
              </div>
            </button>
            <button className="w-[90px] h-[33px] top-[376px] left-[9px] bg-gray-100 absolute rounded-[4px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
              <div className="absolute top-[6px] left-[41px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                K
              </div>
            </button>
            <button className="w-[90px] h-[33px] top-[414px] left-[104px] bg-gray-100 absolute rounded-[4px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
              <div className="absolute top-[6px] left-[42px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                F
              </div>
            </button>
            <button className="w-[90px] h-[33px] top-[376px] left-[104px] bg-gray-100 absolute rounded-[4px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
              <div className="absolute top-[6px] left-[41px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                J
              </div>
            </button>
            <button className="w-[89px] h-[33px] top-[414px] left-[10px] bg-indigo-600 absolute rounded-[4px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
              <div className="absolute top-[9px] left-[39px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[14px] whitespace-nowrap">
                G
              </div>
            </button>
            <button className="absolute w-[90px] h-[33px] top-[376px] left-[198px] bg-gray-100 rounded-[4px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
              <div className="absolute top-[6px] left-[43px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                I
              </div>
            </button>
          </div>

          <div>
            <div className="absolute top-[462px] left-[7px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#9095a0] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
              CLARITY
            </div>
            <button className="w-[90px] h-[33px] top-[528px] left-[293px] bg-gray-100 absolute rounded-[4px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
              <div className="absolute top-[5px] left-[37px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                FL
              </div>
            </button>
            <button className="w-[90px] h-[33px] top-[490px] left-[293px] bg-gray-100 absolute rounded-[4px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
              <div className="absolute top-[6px] left-[33px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] tracking-[0] leading-[20px] whitespace-nowrap">
                VS1
              </div>
            </button>

            <button className="w-[90px] h-[33px] top-[528px] left-[198px] bg-gray-100 absolute rounded-[4px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
              <div className="absolute top-[5px] left-[39px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                IF
              </div>
            </button>

            <button className="w-[90px] h-[33px] top-[528px] left-[9px] bg-gray-100 absolute rounded-[4px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
              <div className="absolute top-[8px] left-[28px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] text-center tracking-[0] leading-[16px] whitespace-nowrap">
                VVS2
              </div>
            </button>
            <button className="w-[90px] h-[33px] top-[490px] left-[9px] bg-gray-100 absolute rounded-[4px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
              <div className="absolute top-[6px] left-[34px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                SI2
              </div>
            </button>

            <button className="w-[90px] h-[33px] top-[528px] left-[104px] bg-gray-100 absolute rounded-[4px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
              <div className="absolute top-[8px] left-[28px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] tracking-[0] leading-[16px] whitespace-nowrap">
                VVS1
              </div>
            </button>
            <button className="w-[90px] h-[33px] top-[490px] left-[104px] bg-gray-100 absolute rounded-[4px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
              <div className="absolute top-[6px] left-[36px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                Sl1
              </div>
            </button>

            <button className="w-[89px] h-[32px] top-[490px] left-[199px] bg-indigo-600 absolute rounded-[4px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
              <div className="absolute top-[9px] left-[32px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[14px] whitespace-nowrap">
                Vs2
              </div>
            </button>
          </div>

          <button className="all-[unset] box-border w-[380px] h-[40px] top-[581px] left-[6px] rounded-[4px] absolute bg-indigo-600 overflow-hidden">
            <div className="absolute top-[8px] left-[165px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-[23px] whitespace-nowrap">
              Submit
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalculateInput;
