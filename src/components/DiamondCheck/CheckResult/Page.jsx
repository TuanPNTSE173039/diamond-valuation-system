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
  const { certificateID } = useParams();
  console.log(certificateID);
  const [diamondData, setDiamondData] = useState(null);

  useEffect(() => {
    const fetchDiamondData = async () => {
      const data = await getDiamondCheckByCertificateId(certificateID);
      console.log(data); // Log the data for now, you can handle it as needed
      setDiamondData(data);
    };
    fetchDiamondData();
  }, [certificateID]);

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
            cut_score="0.9"
            visual_carat="1.0"
            //cut_score={cut_score}
            //visual_carat={visual_carat}
            shape={diamondData.shape}
            carat={diamondData.caratWeight}
            color={diamondData.color}
            clarity={diamondData.clarity}
            fluorescence={diamondData.fluorescence}
            symmetry={diamondData.symmetry}
            polish={diamondData.polish}
            lab="GIA"
            //lab={lab}
          />
        )}
      </Box>
    </Box>
  );
};

export default DiamondCheckResultPage;
