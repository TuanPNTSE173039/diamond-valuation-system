import diamond_id from "../../../assets/images/diamond_id.png";
import daniel from "../../../assets/images/daniel.png";
import allurez from "../../../assets/images/allurez.png";
import Form from "./ResultForm.jsx";
import ImageGallery from '../CheckResult/ImageForm';
import {Box} from "@mui/material";


const DiamondCheckResultPage = () => {


  const images = [
    {
      img: diamond_id,
      title: 'Diamond ID Image' // replace with your actual title
    },
    {
      img: diamond_id,
      title: 'Diamond ID Image' // replace with your actual title
    },
    {
      img: diamond_id,
      title: 'Diamond ID Image' // replace with your actual title
    },
    {
      img: daniel,
      title: 'Daniel Image' // replace with your actual title
    },
    {
      img: allurez,
      title: 'Allurez Image' // replace with your actual title
    }
  ];
  const giaId = "2474506136";
  const priceEstimate = "$7,117";
  const estimateRange = "$5,489 - $8,882";
  //const imageSrc = diamond_id;
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
      <div className="relative w-[1440px] h-[626px] bg-white rounded-[4px] flex ">
        <Box
          width= "50%"
          marginLeft="120px"
        >
          <ImageGallery images={images}/>
        </Box>
        <div style={{width: '50%'}}>
          <Form
              giaId={giaId}
              priceEstimate={priceEstimate}
              estimateRange={estimateRange}
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
      </div>
  );
};

export default DiamondCheckResultPage;
