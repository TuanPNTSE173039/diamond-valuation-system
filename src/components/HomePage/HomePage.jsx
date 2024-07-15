import Poster from "./Poster.jsx";
import Supplier from "./Supplier.jsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllServices, getSupplier } from "../../services/api.js";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import UICircularIndeterminate from "../UI/CircularIndeterminate.jsx";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1000 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function HomePage() {
  const navigate = useNavigate();

  const handleServiceClick = (serviceID) => {
    navigate(`/price?serviceID=${serviceID}`);
  };

  const { data: services, isLoading: isServicesLoading } = useQuery({
    queryKey: ["services"],
    queryFn: () => getAllServices(),
  });

  const { data: suppliers, isLoading: isSupplierLoading } = useQuery({
    queryKey: ["supplier"],
    queryFn: () => getSupplier(),
  });

  if (isServicesLoading || isSupplierLoading) {
    return <UICircularIndeterminate />;
  }

  return (
    <div>
      <div>
        <Poster />
      </div>
      <Box sx={{ paddingX: "50px" }}>
        <Typography
          sx={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#003565",
            margin: "20px 50px",
          }}
        >
          Our Services
        </Typography>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={2000}
          infinite={true}
          keyBoardControl={true}
        >
          {services?.map((service) => (
            <Box
              key={service.id}
              sx={{
                backgroundColor: "white",
                height: "200px",
                width: "400px",
                padding: "20px",
                cursor: "pointer",
                marginLeft: "20px",
              }}
              onClick={() => handleServiceClick(service.id)}
            >
              <Typography
                sx={{
                  fontSize: 21,
                  fontWeight: "bold",
                  color: "#003565",
                  textAlign: "center",
                }}
              >
                {service.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: 16,
                  color: "#4f6484",
                  textAlign: "center",
                }}
              >
                {service.description}
              </Typography>
            </Box>
          ))}
        </Carousel>
      </Box>
      <div style={{ margin: "50px 0" }}>
        <Supplier />
      </div>
    </div>
  );
}

export default HomePage;
