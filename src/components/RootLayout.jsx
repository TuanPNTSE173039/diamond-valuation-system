import { Outlet } from "react-router-dom";
import Header from "./UI/Header.jsx";
import Footer from "./UI/Footer.jsx";

function RootLayout() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <div style={{ margin: "50px 0" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;
