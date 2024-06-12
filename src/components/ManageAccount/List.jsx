import Table from "../UI/Table";
import Drawer from "../UI/Drawer.jsx";

const ValuationRequestList = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "calc(100vh - 350px)",
        marginBottom: "50px",
      }}
    >
      <div style={{ marginRight: "20px" }}>
        <Drawer />
      </div>
      <Table />
    </div>
  );
};

export default ValuationRequestList;
