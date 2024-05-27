import DiamondCheckerBox from "./DiamondCheckerBox.jsx";
import check_diamond_img from "../../../assets/images/check_diamond_img.png";

const DiamondCheckPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ margin: "auto 0" }}>
        <DiamondCheckerBox />
      </div>
      <div style={{ marginRight: "200px" }}>
        <img
          src={check_diamond_img}
          alt="check_diamond_img"
          className="w-[300px] h-[560px]"
        />
      </div>
    </div>
  );
};

export default DiamondCheckPage;
