import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import Body from "./components/Body_HomePage.jsx";

function App() {
  //vertical center
  return (
    <div className="overflow-x-hidden">
      <Header className="mb-20" />
      <Body className="my-20" />{" "}
      {/* Add margin-top and margin-bottom to the Appointment */}
      <Footer className="mt-10" /> {/* Add margin-top to the Footer */}
    </div>
  );
}

export default App;
