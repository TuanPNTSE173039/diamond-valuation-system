import diamond from "../../assets/images/diamond_poster.png";

export const Appointment = () => {
  return (
    <div className="relative w-[1440px] h-[560px] bg-[#717171] rounded-[4px] ">
      <img
        className="absolute w-[681px] h-[555px] top-[5px] left-[753px]"
        alt="Image"
        src={diamond}
      />
      <div className="w-[489px] h-[547px] top-[7px] left-[204px] bg-[#d8c0989e] absolute rounded-[4px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
        <div className="absolute top-[20px] left-[54px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#003565] text-[27px] tracking-[0] leading-[34px] whitespace-nowrap">
          Appointments
        </div>

        <form className="absolute top-[63px] left-[53px]">
          <div className="mb-1">
            <label
              htmlFor="name-input"
              className="block mb-1 text-[15px] text-white"
            >
              Name*:
            </label>
            <div className="relative mb-1">
              <input
                type="text"
                id="name-input"
                className="bg-neutral-50 border border-[#9095a0] text-black text-[13px] rounded-[4px] block w-[380px] h-[32px] p-[18px]"
                placeholder="Input your name"
                required
              />
            </div>
          </div>

          <div className="mb-1">
            <label
              htmlFor="id-card-input"
              className="block mb-1 text-[15px] text-white"
            >
              Identity Card*:
            </label>
            <div className="relative mb-1">
              <input
                type="text"
                id="id-card-input"
                className="bg-neutral-50 border border-[#9095a0] text-black text-[13px] rounded-[4px] block w-[380px] h-[32px] p-[18px]"
                placeholder="Input identity card"
                required
              />
            </div>
          </div>

          <div className="mb-1">
            <label
              htmlFor="phone-input"
              className="block mb-1 text-[15px] text-white"
            >
              Phone*:
            </label>
            <div className="relative mb-1">
              <input
                type="text"
                id="phone-input"
                className="bg-neutral-50 border border-[#9095a0] text-black text-[13px] rounded-[4px] block w-[380px] h-[32px] p-[18px]"
                placeholder="Input your phone"
                required
              />
            </div>
          </div>

          <div className="mb-1">
            <label
              htmlFor="address-input"
              className="block mb-1 text-[15px] text-white"
            >
              Address*:
            </label>
            <div className="relative mb-1">
              <input
                type="text"
                id="address-input"
                className="bg-neutral-50 border border-[#9095a0] text-black text-[13px] rounded-[4px] block w-[380px] h-[32px] p-[18px]"
                placeholder="Input address"
                required
              />
            </div>
          </div>

          <div className="mb-1">
            <label
              htmlFor="service-input"
              className="block mb-1 text-[15px] text-white"
            >
              Service:
            </label>
            <div className="relative mb-1">
              <input
                type="text"
                id="service-input"
                className="bg-neutral-50 border border-[#9095a0] text-black text-[13px] rounded-[4px] block w-[380px] h-[32px] p-[18px]"
                placeholder="Diamond valuation"
                required
              />
            </div>
          </div>

          <div className="mb-1">
            <label
              htmlFor="quantity-input"
              className="block mb-1 text-[15px] text-white"
            >
              Quantity*:
            </label>
            <div className="relative mb-4">
              <input
                type="number"
                id="quantity-input"
                className="bg-neutral-50 border border-[#9095a0] text-black text-[13px] rounded-[4px] block w-[380px] h-[32px] p-[18px]"
                placeholder="Input quantity"
                required
              />
            </div>
          </div>

          <button className="w-[379px] h-[36px] bg-[#003565] text-white text-[15px] rounded-[4px]">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
