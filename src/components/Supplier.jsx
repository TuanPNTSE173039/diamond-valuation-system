import allurez from "../assets/images/allurez.png";
import rockher from "../assets/images/rockher.png";
import adiamor from "../assets/images/adiamor.png";
import friendly from "../assets/images/friendly.png";
import daniel from "../assets/images/daniel.png";
import with_clarity from "../assets/images/with_clarity.png";
import dreamstone from "../assets/images/dreamstone.png";
import whiteflash from "../assets/images/whiteflash.png";

export default function Supplier({ className }) {
  return (
    <div
      className={`w-[1440px] h-[210px] relative bg-white rounded shadow ${className}`}
    >
      <div className="left-[300px] top-[25px] absolute">
        <img className=" w-[180px] h-[70px]" src={allurez} alt="allurez" />
      </div>
      <div className="left-[300px] top-[110px] absolute ">
        <img className="w-[180px] h-[70px]" src={rockher} alt="rockher" />
      </div>
      <div className="left-[520px] top-[25px] absolute ">
        <img className="w-[180px] h-[70px]" src={adiamor} alt="adiamor" />
      </div>
      <div className=" left-[520px] top-[100px] absolute">
        <img className="w-[180px] h-[100px]" src={friendly} alt="friendly" />
      </div>
      <div className="left-[740px] top-[25px] absolute">
        <img className="w-[180px] h-[70px]" src={daniel} alt="daniel" />
      </div>
      <div className="left-[740px] top-[110px] absolute ">
        <img
          className="w-[150px] h-[60px]"
          src={with_clarity}
          alt="with_clarity"
        />
      </div>

      <div className="left-[960px] top-[25px] absolute ">
        <img className="w-[150px] h-[70px]" src={dreamstone} alt="dreamstone" />
      </div>

      <div className="left-[960px] top-[110px] absolute ">
        <img className="w-[150px] h-[50px]" src={whiteflash} alt="whiteflash" />
      </div>
    </div>
  );
}
