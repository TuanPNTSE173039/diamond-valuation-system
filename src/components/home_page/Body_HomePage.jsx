//import {Appointment} from "./Appointment.jsx";
import diamond from "../../assets/images/diamond_poster.png";

export default function Body({ className }) {
  return (
    <div
      className={`relative w-[1440px] h-[560px] bg-[#717171] rounded-[4px] ${className}`}
    >
      <img
        className="absolute w-[681px] h-[555px] top-[5px] left-[753px]"
        alt="Image"
        src={diamond}
      />
    </div>
  );
}
