import { useState } from "react";
import { Box, ImageList, ImageListItem } from "@mui/material";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems="center"
    >
      <ImageList
        sx={{
          width: { xs: "100%", md: 150 },
          height: { xs: "auto", md: 500 },
          display: "flex",
          flexDirection: { xs: "row", md: "column" },

          gap: 10,
        }}
        cols={1}
        rowHeight={100}
      >
        {images.map((item) => (
          <ImageListItem
            key={item.img}
            onClick={() => setSelectedImage(item)}
            sx={{
              cursor: "pointer",
              borderRadius: "6px",
              border:
                selectedImage.img === item.img
                  ? "2px solid transparent"
                  : "2px solid transparent",
              "&:hover": {
                border: "2px solid transparent",
              },
            }}
          >
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                borderRadius: "6px",
                height: "100px",
                width: "100px",
                objectFit: "cover",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Box sx={{ ml: { xs: 0, md: 2 }, mt: { xs: 2, md: 0 } }}>
        <img
          src={selectedImage.img}
          alt={selectedImage.title}
          style={{
            width: "600px",
            height: "500px",
            borderRadius: "6px",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
};

export default ImageGallery;
