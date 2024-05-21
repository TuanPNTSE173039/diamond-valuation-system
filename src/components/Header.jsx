export const Header = () => {
  return (
    <div className="relative w-[1440px] h-[101px] bg-white rounded-[4px]">
      <div className="absolute top-[30px] left-[28px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[29px] tracking-[0] leading-[44px] whitespace-nowrap">
        Logo
      </div>
      <div className="absolute top-[38px] left-[688px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3e6282] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
        SERVICE
      </div>
      <button className="all-[unset] box-border absolute w-[92px] h-[47px] top-[26px] left-[1323px] bg-indigo-600 rounded-[4px] overflow-hidden">
        <div className="absolute top-[9px] left-[18px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[18px] tracking-[0] leading-[27px] whitespace-nowrap">
          Sign in
        </div>
      </button>
      <div className="absolute top-[36px] left-[1246px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3e6282] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
        Register
      </div>
      <div className="absolute top-[38px] left-[820px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3e6282] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
        PRICES
      </div>
      <button className="all-[unset] box-border absolute w-[123px] h-[47px] top-[26px] left-[1109px] bg-white rounded-[4px] overflow-hidden border border-solid border-[#98690c8a]">
        <div className="absolute top-[10px] left-[13px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#98690c] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
          Appointment
        </div>
      </button>
      <img
        className="absolute w-[18px] h-[12px] top-[46px] left-[758px]"
        alt="Image"
        src="image-10.png"
      />
      <div className="left-[454px] absolute top-[38px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3e6282] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
        HOME
      </div>
      <div className="left-[942px] absolute top-[38px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3e6282] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
        POST
      </div>
      <div className="absolute top-[38px] left-[567px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3e6282] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
        ABOUT
      </div>
    </div>
  );
};
