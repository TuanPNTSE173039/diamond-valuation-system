export const Header = ({ className }) => {
  return (
    <div
      className={`relative w-[1440px] h-[101px] bg-white rounded-[4px] ${className}`}
    >
      <div className="absolute top-[30px] left-[60px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[30px] tracking-[0] leading-[44px] whitespace-nowrap cursor-pointer">
        Logo
      </div>
      <div className="left-[418px] absolute top-[38px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3e6272] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap cursor-pointer">
        HOME
      </div>
      <div className="absolute top-[38px] left-[531px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3e6272] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap cursor-pointer">
        ABOUT
      </div>
      <div className="absolute top-[38px] left-[652px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3e6272] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap cursor-pointer">
        SERVICE
      </div>
      <button className="absolute w-[18px] h-[12px] top-[38px] left-[722px] cursor-pointer color-[#3e6272]">
        <i className="fa-solid fa-angle-down text-[#3e6272] "></i>
      </button>
      <div className="absolute top-[38px] left-[803px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3e6272] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap cursor-pointer">
        PRICES
      </div>
      <div className="left-[926px] absolute top-[38px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3e6272] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap cursor-pointer">
        POST
      </div>
      <button className="all-[unset] box-border absolute w-[123px] h-[47px] top-[26px] left-[1053px] bg-white rounded-[4px] overflow-hidden border border-solid border-[#98690c8a]">
        <div className="absolute top-[10px] left-[13px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#98690c] text-[17px] tracking-[0] leading-[26px] whitespace-nowrap">
          Appointment
        </div>
      </button>
      <div className="absolute top-[36px] left-[1190px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3e6282] text-[17px] tracking-[0] leading-[26px] whitespace-nowrap cursor-pointer">
        Register
      </div>

      <button className="w-[50px] h-[50px] left-[1267px] top-[26px] absolute rounded">
        <i className="fa-regular fa-circle-user text-3xl text-[#3e6272] "></i>
      </button>
      <button className="absolute w-[18px] h-[12px] top-[38px] left-[1315px] cursor-pointer color-[#3e6272]">
        <i className="fa-solid fa-angle-down text-[#3e6272] "></i>
      </button>
    </div>
  );
};
