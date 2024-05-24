import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import Body from "./components/Body_HomePage.jsx";
import Supplier from "./components/Supplier.jsx";

function App() {
  //vertical center
  return (
    <div className="overflow-x-hidden">
      <Header className="mb-20" />
      <Body className="my-20" />
      <Supplier className="mb-20" />
      <Footer className="mt-10" />
    </div>
  );
}

export default App;
