//import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DiamondCheckInputForm = () => {
  //const [certificateId, setCertificateId] = useState("");
  const navigate = useNavigate();

  const handleCheck = () => {
    // if (certificateId.trim()) {
    //   //navigate(`/diamond-check/${certificateId}`);
    // }
    navigate("/diamond-check/:id");
  };

  return (
    <div className="relative left-[130px]">
      <div className="w-[674px] h-[302px] ">
        <div className="absolute w-[590px] h-[123px] left-[5px]">
          <div className="absolute w-[590px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[50px] ">
            Check any diamond&#39;s
          </div>
          <div className="absolute w-[500px] top-[45px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#828df6] text-[45px] ">
            price &amp; quality
          </div>
        </div>
        <p className="absolute w-[663px] top-[130px] left-[5px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[17px] tracking-[0] leading-[26px]">
          Transact with confidence -- get fair price, cut score, visual carat
          and more for free
        </p>
        <div className="absolute w-[462px] h-[50px] top-[195px] -left-px bg-white rounded-[4px] border border-solid border-[#9095a0]">
          <input
            className="absolute top-[11px] left-[20px] w-[422px] h-[28px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[26px] outline-none bg-transparent"
            // value={certificateId}
            // onChange={(e) => setCertificateId(e.target.value)}
            type="text"
            placeholder="Enter Certificate ID"
          />
        </div>
        <button
          onClick={handleCheck}
          className="all-[unset] box-border absolute w-[151px] h-[50px] top-[195px] left-[471px] bg-[#6366f2] rounded-[4px] overflow-hidden"
        >
          <div className="absolute top-[11px] left-[18px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
            Run free check
          </div>
        </button>
      </div>
    </div>
  );
};

export default DiamondCheckInputForm;
