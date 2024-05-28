import DiamondCheckInputForm from "./Form.jsx";
import check_diamond_img from "../../../assets/images/check_diamond_img.png";

const DiamondCheckInputPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ margin: "auto 0" }}>
        <DiamondCheckInputForm />
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

export default DiamondCheckInputPage;
