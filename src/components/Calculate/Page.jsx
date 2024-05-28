import CalculateInputForm from "./InputForm.jsx";
import CalculateOutputForm from "./OutputForm.jsx";

function CalculatePage() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ marginRight: "50px" }}>
        <CalculateInputForm />
      </div>
      <div>
        <CalculateOutputForm />
      </div>
    </div>
  );
}

export default CalculatePage;
