import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";
import Body_HomePage from "./components/home_page/HomepageImage.jsx";
import Supplier from "./components/home_page/Supplier.jsx";

function RootLayout() {
  return (
    <div>
      <Header />
      <div style={{ margin: "50px 0" }}>
        <Body_HomePage />
      </div>
      <div style={{ margin: "50px 0" }}>
        <Supplier />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;
