import CalculateInput from "./CalculateInput.jsx";
import { CalculateOutput } from "./CalculateOutput.jsx";

function CalculatePage() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ marginRight: "50px" }}>
        <CalculateInput />
      </div>
      <div>
        <CalculateOutput />
      </div>
    </div>
  );
}

export default CalculatePage;
