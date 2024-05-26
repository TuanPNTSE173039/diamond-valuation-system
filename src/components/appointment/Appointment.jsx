import { Button, Paper, TextField } from "@mui/material";

export const Appointment = () => {
  return (
    <Paper className="w-[489px] h-[547px] top-[7px] left-[204px] bg-[#d8c0989e] absolute rounded-[4px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
      <div className="absolute top-[20px] left-[54px] font-bold text-[#003565] text-[27px] tracking-[0] leading-[34px] whitespace-nowrap">
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
            <TextField
              type="text"
              id="name-input"
              variant="outlined"
              placeholder="Input your name"
              required
              fullWidth
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
            <TextField
              type="text"
              id="id-card-input"
              variant="outlined"
              placeholder="Input identity card"
              required
              fullWidth
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
            <TextField
              type="text"
              id="phone-input"
              variant="outlined"
              placeholder="Input your phone"
              required
              fullWidth
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
            <TextField
              type="text"
              id="address-input"
              variant="outlined"
              placeholder="Input address"
              required
              fullWidth
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
            <TextField
              type="text"
              id="service-input"
              variant="outlined"
              placeholder="Diamond valuation"
              fullWidth
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
            <TextField
              type="number"
              id="quantity-input"
              variant="outlined"
              placeholder="Input quantity"
              required
              fullWidth
            />
          </div>
        </div>

        <Button
          variant="contained"
          color="primary"
          className="w-[379px] h-[36px] rounded-[4px]"
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};
