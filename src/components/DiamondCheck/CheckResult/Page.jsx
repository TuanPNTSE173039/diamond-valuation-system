import diamond_id from "../../../assets/images/diamond_id.png";
import daniel from "../../../assets/images/daniel.png";
import allurez from "../../../assets/images/allurez.png";
import DiamondCheckResultForm from "./ResultForm.jsx";
import ImageGallery from "../CheckResult/ImageForm";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDiamondCheckByCertificateId } from "../../../services/api.js";

const DiamondCheckResultPage = () => {
  const { id } = useParams();
  const [diamondData, setDiamondData] = useState(null);

  useEffect(() => {
    const fetchDiamondData = async () => {
      const data = await getDiamondCheckByCertificateId(id);
      setDiamondData(data);
    };

    fetchDiamondData();
  }, [id]);

  const images = [
    {
      img: diamond_id,
      title: "Diamond ID Image", // replace with your actual title
    },

    {
      img: daniel,
      title: "Daniel Image", // replace with your actual title
    },
    {
      img: allurez,
      title: "Allurez Image", // replace with your actual title
    },
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
    <Box
      display="flex"
      flexDirection="row"
      marginY="50px"
      marginLeft="120px"
      justifyContent="space-between"
    >
      <Box width="50%">
        <ImageGallery images={images} />
      </Box>
      <Box width="50%" marginLeft="70px">
        {diamondData && (
          <DiamondCheckResultForm
            giaId={diamondData.certificateId}
            priceEstimate={`$${diamondData.fairPrice}`}
            estimateRange={`$${diamondData.minPrice} - $${diamondData.maxPrice}`}
            cut_score={cut_score}
            visual_carat={visual_carat}
            shape={diamondData.shape}
            carat={diamondData.caratWeight}
            color={diamondData.color}
            clarity={diamondData.clarity}
            fluorescence={diamondData.fluorescence}
            symmetry={diamondData.symmetry}
            polish={diamondData.polish}
            lab={lab}
          />
        )}
      </Box>
    </Box>
  );
};

export default DiamondCheckResultPage;
