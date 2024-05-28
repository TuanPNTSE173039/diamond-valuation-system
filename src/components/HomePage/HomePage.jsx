import Poster from "./Poster.jsx";
import Supplier from "./Supplier.jsx";

function HomePage() {
  return (
    <div>
      <div style={{ margin: "50px 0" }}>
        <Poster />
      </div>
      <div style={{ margin: "50px 0" }}>
        <Supplier />
      </div>
    </div>
  );
}

export default HomePage;
