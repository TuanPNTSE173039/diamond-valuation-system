import diamond_id from "../../../assets/images/diamond_id.png";
import daniel from "../../../assets/images/daniel.png";
import allurez from "../../../assets/images/allurez.png";
import DiamondCheckResultForm from "./ResultForm.jsx";
import ImageGallery from '../CheckResult/ImageForm';
import {Box} from "@mui/material";


const DiamondCheckResultPage = () => {


  const images = [
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
  const polish = "Excellent";
  const lab = "GIA";

  return (
      <Box display="flex"
           flexDirection="row"
           marginY="50px"
           marginLeft="120px"
           justifyContent="space-between"
     >
        <Box
            width= "50%">
          <ImageGallery images={images}/>
        </Box>
        <Box width= "50%" marginLeft="70px">
          <DiamondCheckResultForm
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
              polish={polish}
              lab={lab}
          />
        </Box>
      </Box>
  );
};

export default DiamondCheckResultPage;
