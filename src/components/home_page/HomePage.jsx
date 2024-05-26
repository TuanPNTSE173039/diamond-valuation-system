import Body_HomePage from "./HomepageImage.jsx";
import Supplier from "./Supplier.jsx";

function RootLayout() {
  return (
    <div>
      <div style={{ margin: "50px 0" }}>
        <Body_HomePage />
      </div>
      <div style={{ margin: "50px 0" }}>
        <Supplier />
      </div>
    </div>
  );
}

export default RootLayout;
