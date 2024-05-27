import diamond_id from "../../../assets/images/diamond_id.png";
import DiamondCheckResult from "./DiamondCheckResult";

const DiamondCheckResultPage = () => {
  // Các giá trị có thể lấy từ cơ sở dữ liệu hoặc tự điền
  const giaId = "2474506136";
  const priceEstimate = "$7,117";
  const estimateRange = "$5,489 - $8,882";
  const imageSrc = diamond_id;
  const cut_score = "9.4";
  const visual_carat = "1.01";
  const shape = "Round";
  const carat = "1.01";
  const color = "D";
  const clarity = "VS1";
  const fluorescence = "None";
  const symmetry = "Excellent";
  const Polish = "Excellent";
  const lab = "GIA";

  return (
    <div>
      <DiamondCheckResult
        giaId={giaId}
        priceEstimate={priceEstimate}
        estimateRange={estimateRange}
        imageSrc={imageSrc}
        cut_score={cut_score}
        visual_carat={visual_carat}
        shape={shape}
        carat={carat}
        color={color}
        clarity={clarity}
        fluorescence={fluorescence}
        symmetry={symmetry}
        Polish={Polish}
        lab={lab}
      />
    </div>
  );
};

export default DiamondCheckResultPage;
