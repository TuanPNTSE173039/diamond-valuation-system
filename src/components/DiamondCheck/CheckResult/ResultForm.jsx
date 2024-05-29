import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
// eslint-disable-next-line react/prop-types
const DiamondCheckResultForm = ({
  giaId,
  priceEstimate,
  estimateRange,

  cut_score,
  visual_carat,
  shape,
  carat,
  color,
  clarity,
  fluorescence,
  symmetry,
  Polish,
  lab,
}) => {
  return (

  <div>
      <div className="absolute top-[7px] left-[845px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
        GIA ID {giaId}
      </div>
      <div className="all-[unset] box-border w-[120px] h-[29px] top-[6px] left-[1017px] bg-green-50 rounded-[3px] absolute overflow-hidden">
        <div className="absolute top-[4px] left-[8px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#2aab59] text-[13px] tracking-[0] leading-[20px] whitespace-nowrap">
          Natural Diamond
        </div>
      </div>
      <div className="absolute top-[57px] left-[861px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
        Off market
      </div>
      <div className="absolute top-[56px] left-[954px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#6362a2] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
        Fair Price Estimate: {priceEstimate}
      </div>
      <p className="absolute top-[83px] left-[861px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#6a65d2] text-[12px] tracking-[0] leading-[20px] whitespace-nowrap">
        Estimate Range: {estimateRange}
      </p>
      <p className="absolute top-[109px] left-[845px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#bcc1ca] text-[12px] tracking-[0] leading-[20px] whitespace-nowrap">
        Not currently listed on StoneAIgo
      </p>
      <div className="absolute top-[109px] left-[1061px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#bcc1ca] text-[13px] tracking-[0] leading-[22px] whitespace-nowrap">
        See similar
      </div>
      <DiamondOutlinedIcon className="absolute w-[16px] h-[13px] top-[109px] left-[1132px]" />

      <div className="w-[457px] h-[63px] top-[153px] left-[844px] bg-[#fffffe] absolute rounded-[4px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
        <div className="absolute top-[10px] left-[30px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#bcc1ca] text-[11px] tracking-[0] leading-[18px] whitespace-nowrap">
          Fair Price
        </div>
        <div className="absolute top-[28px] left-[34px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#675fe8] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
          {priceEstimate}
        </div>

        <div className="absolute top-[10px] left-[145px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#bcc1ca] text-[10px] tracking-[0] leading-[16px] whitespace-nowrap">
          Cut Score
        </div>
        <div className="absolute top-[29px] left-[159px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#5f56e7] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
          {cut_score}
        </div>
        <div className="absolute top-[9px] left-[254px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#bcc1ca] text-[11px] tracking-[0] leading-[18px] whitespace-nowrap">
          Visual Carat
        </div>
        <div className="absolute top-[29px] left-[263px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#675fe8] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
          {visual_carat}
        </div>

        <div className="absolute top-[10px] left-[377px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#bcc1ca] text-[11px] tracking-[0] leading-[18px] whitespace-nowrap">
          Concerns
        </div>
        <button className="all-[unset] box-border w-[23px] h-[23px] top-[30px] left-[391px] bg-green-600 rounded-[12px] absolute overflow-hidden">
          <div className="absolute -top-px left-[7px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-[23px] whitespace-nowrap">
            0
          </div>
        </button>
      </div>

      <div className="absolute w-[459px] h-[235px] top-[237px] left-[843px] rounded-[4px]">
        <div className="w-[456px] h-[234px] top-px left-[2px] bg-white absolute rounded-[4px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
          <div className="absolute w-[39px] top-[21px] left-[46px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#bcc1ca] text-[9px] tracking-[0] leading-[14px]">
            Shape
          </div>
          <div className="absolute w-[43px] top-[42px] left-[42px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[12px] tracking-[0] leading-[18px]">
            {shape}
          </div>
          <div className="absolute top-[21px] left-[167px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#bcc1ca] text-[9px] tracking-[0] leading-[14px] whitespace-nowrap">
            Carat
          </div>
          <div className="absolute top-[43px] left-[162px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[12px] tracking-[0] leading-[16px] whitespace-nowrap">
            {carat}
          </div>
          <div className="absolute top-[20px] left-[274px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#bcc1ca] text-[9px] tracking-[0] leading-[14px] whitespace-nowrap">
            Color
          </div>
          <div className="absolute top-[40px] left-[281px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[12px] tracking-[0] leading-[22px] whitespace-nowrap">
            {color}
          </div>
          <div className="absolute top-[20px] left-[376px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#bcc1ca] text-[9px] tracking-[0] leading-[14px] whitespace-nowrap">
            Clarity
          </div>
          <div className="absolute top-[42px] left-[382px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
            {clarity}
          </div>
          <div className="absolute w-[60px] top-[88px] left-[34px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#bcc1ca] text-[9px] tracking-[0] leading-[14px]">
            Fluorescence
          </div>
          <div className="absolute w-[43px] top-[116px] left-[44px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[12px] tracking-[0] leading-[18px]">
            {fluorescence}
          </div>
          <div className="absolute top-[89px] left-[158px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#bcc1ca] text-[9px] tracking-[0] leading-[14px] whitespace-nowrap">
            Symmetry
          </div>
          <div className="absolute top-[118px] left-[156px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[12px] tracking-[0] leading-[16px] whitespace-nowrap">
            {symmetry}
          </div>
          <div className="absolute top-[88px] left-[276px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#bcc1ca] text-[9px] tracking-[0] leading-[14px] whitespace-nowrap">
            Polish
          </div>
          <div className="absolute top-[114px] left-[264px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[12px] tracking-[0] leading-[22px] whitespace-nowrap">
            {Polish}
          </div>
          <div className="absolute top-[88px] left-[376px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#bcc1ca] text-[9px] tracking-[0] leading-[14px] whitespace-nowrap">
            Cert. Lab
          </div>
          <div className="absolute top-[117px] left-[383px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
            {lab}
          </div>
        </div>
        <button className="all-[unset] box-border w-[433px] h-[49px] top-[168px] left-[13px] bg-indigo-100 rounded-[4px] absolute overflow-hidden">
          <div className="absolute top-[12px] left-[150px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#554cd0] text-[15px] tracking-[0] leading-[23px] whitespace-nowrap">
            Run another check
          </div>
        </button>
      </div>

      <p className="absolute top-[109px] left-[845px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#bcc1ca] text-[12px] tracking-[0] leading-[20px] whitespace-nowrap">
        Not currently listed on StoneAIgo
      </p>
    </div>
  );
};

export default DiamondCheckResultForm;
