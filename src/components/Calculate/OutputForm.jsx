import { Box, Typography } from "@mui/material";
import daniel from "../../assets/images/daniel.png";
import diamond1 from "../../assets/images/diamond1.png";
import UICircularIndeterminate from "../UI/CircularIndeterminate.jsx";
import { useState } from "react";

export const CalculateOutputForm = ({
  diamondData,
  isDiamondLoading,
  diamondError,
  marketData,
  isMarketLoading,
  marketError,
}) => {
  if (isDiamondLoading || isMarketLoading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // This assumes you want to center it in the whole viewport. Adjust as needed.
        }}
      >
        <UICircularIndeterminate />
      </Box>
    );

  if (diamondError || marketError) {
    // Display error message if there's an error fetching data
    return (
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6" color="error">
          Error: Unable to fetch data.
        </Typography>
      </Box>
    );
  }

  const [visibleCount, setVisibleCount] = useState(5);

  return (
    <Box
      sx={{
        position: "relative",
        width: 743,
        left: 160,
        height: 850,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          fontFamily: "Epilogue-Bold, Helvetica",
          fontWeight: "bold",
          color: "#171a1f",
          fontSize: 22,
        }}
      >
        Calculator Output
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: 740,
          height: 310,
          top: 32,
          left: 3,
          boxShadow: "0px 0px 1px #171a1f12, 0px 0px 2px #171a1f1f",
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            width: 740,
            height: 205,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            backgroundColor: "white",
            borderRadius: 1,
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              top: 30,
              fontFamily: "Epilogue-Bold, Helvetica",
              fontWeight: "bold",
              fontSize: 18,
              color: "#171a1f",
            }}
          >
            Fair Price Estimate
          </Typography>
          <Typography
            sx={{
              position: "absolute",
              top: 63,
              fontFamily: "Epilogue-Bold, Helvetica",
              fontWeight: "bold",
              fontSize: 57,
              lineHeight: "74px",
              color: "#171a1f",
            }}
          >
            {`$${diamondData.fairPrice}`}
          </Typography>

          <Typography
            sx={{
              position: "absolute",
              top: 146,
              fontFamily: "Inter-Regular, Helvetica",
              fontSize: 12,
              lineHeight: "20px",
              color: "#9095a0",
            }}
          >
            {`${diamondData.shape} ${diamondData.caratWeight} Carat ${diamondData.color} ${diamondData.clarity}`}
          </Typography>
          <Box
            variant="contained"
            sx={{
              textAlign: "center",
              position: "absolute",
              width: 98,
              height: 20,
              top: 170,
              backgroundColor: "#c8e6c9",
              borderRadius: 1,
              textTransform: "none",
              fontFamily: "Inter-Regular, Helvetica",
              fontSize: 11,
              lineHeight: "18px",
              color: "#00c853",
            }}
          >
            Natural Diamond
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            height: 103,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 206,
            backgroundColor: "#f5f5f5",
            boxShadow: "0px 0px 1px #171a1f12, 0px 0px 2px #171a1f1f",
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              top: 24,
              fontFamily: "Inter-Regular, Helvetica",
              color: "#9095a0",
              fontSize: 12,
              lineHeight: "20px",
            }}
          >
            Estimate Range
          </Typography>
          <Typography
            sx={{
              position: "absolute",
              top: 53,
              fontFamily: "Inter-Regular, Helvetica",
              color: "#171a1f",
              fontSize: 15,
              lineHeight: "24px",
              textAlign: "center",
            }}
          >
            {`$${diamondData.minPrice} - $${diamondData.maxPrice}`}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "50%",
            height: 103,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 206,
            left: 370,
            backgroundColor: "#f5f5f5",
            boxShadow: "0px 0px 1px #171a1f12, 0px 0px 2px #171a1f1f",
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              top: 24,
              fontFamily: "Inter-Regular, Helvetica",

              color: "#9095a0",
              fontSize: 12,
              lineHeight: "20px",
            }}
          >
            Estimate Price per Carat
          </Typography>
          <Typography
            sx={{
              position: "absolute",
              top: 52,
              fontFamily: "Inter-Regular, Helvetica",

              fontSize: 16,
              lineHeight: "26px",
              color: "#171a1f",
            }}
          >
            {`$${diamondData.pricePerCarat}`}
          </Typography>
        </Box>

        <Typography
          variant="body2"
          sx={{
            position: "absolute",
            top: 320,
            left: 5,
            fontFamily: "Inter-Regular, Helvetica",
            color: "#9095a0",
            fontSize: 10,
          }}
        >
          Sponsored
        </Typography>
        <Box
          sx={{
            top: 340,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            backgroundColor: "white",
            paddingTop: "10px",
            marginBottom: "100px",
          }}
        >
          {marketData &&
            marketData.slice(0, visibleCount).map((diamond, index) => (
              <Box
                sx={{
                  width: "98%",
                  height: 86,
                  borderRadius: 1,
                  boxShadow: "0px 0px 1px #171a1f12, 0px 0px 2px #171a1f1f",
                  border: "1px solid black",
                  marginBottom: "10px",
                  display: "flex", // Add this line
                  flexDirection: "row", // Add this line
                  justifyContent: "space-between", // Add this line
                  alignItems: "center", // Add this line
                  padding: "0px 10px", // Add this line
                }}
                key={index}
              >
                <Box
                  sx={{
                    width: 70,
                    height: 58,
                    top: 10,
                    left: 7,
                  }}
                >
                  <img src={diamond1} alt="diamond" />
                </Box>

                <Box
                  sx={{
                    width: 60,
                    top: 23,
                    left: 107,
                  }}
                >
                  <Typography
                    sx={{
                      top: 20,
                      fontFamily: "Inter-Regular, Helvetica",
                      color: "#171a1f",
                      fontSize: 9,
                    }}
                  >
                    CUT SCORE
                  </Typography>
                  <Typography
                    sx={{
                      left: 16,
                      fontFamily: "Inter-Regular, Helvetica",
                      color: "#6a63ee",
                      fontSize: 14,
                    }}
                  >
                    {diamond.cutScore}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    top: 43,
                    left: 207,
                  }}
                >
                  <Typography
                    sx={{
                      top: 43,
                      left: 207,
                      fontFamily: "Inter-Regular, Helvetica",
                      color: "#171a1f",
                      fontSize: 9,
                      lineHeight: "14px",
                    }}
                  >
                    CARAT
                  </Typography>
                  <Typography
                    sx={{
                      top: 23,
                      left: 208,
                      fontFamily: "Inter-Regular, Helvetica",
                      color: "#171a1f",
                      fontSize: 14,
                      lineHeight: "20px",
                    }}
                  >
                    {diamond.caratWeight}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: 39,
                    height: 35,
                    top: 23,
                    left: 275,
                  }}
                >
                  <Typography
                    sx={{
                      top: 21,
                      fontFamily: "Inter-Regular, Helvetica",
                      color: "#171a1f",
                      fontSize: 9,
                      lineHeight: "14px",
                    }}
                  >
                    CLARITY
                  </Typography>
                  <Typography
                    sx={{
                      left: 7,
                      fontFamily: "Inter-Regular, Helvetica",
                      color: "#171a1f",
                      fontSize: 14,
                      lineHeight: "22px",
                    }}
                  >
                    {diamond.clarity}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: 28,
                    height: 32,
                    top: 25,
                    left: 352,
                  }}
                >
                  <Typography
                    sx={{
                      top: 18,
                      fontFamily: "Inter-Regular, Helvetica",
                      color: "#171a1f",
                      fontSize: 9,
                      lineHeight: "14px",
                      textAlign: "center",
                    }}
                  >
                    COLOR
                  </Typography>
                  <Typography
                    sx={{
                      left: 11,
                      fontFamily: "Inter-Regular, Helvetica",
                      color: "#171a1f",
                      fontSize: 14,
                      textAlign: "center",
                    }}
                  >
                    {diamond.color}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: 96,
                    height: 27,
                    top: 29,
                    left: 446,
                  }}
                >
                  <img src={daniel} alt="Daniel" />
                </Box>
                <Typography
                  sx={{
                    top: 32,
                    left: 620,
                    fontFamily: "Inter-Regular, Helvetica",
                    color: "#171a1f",
                    fontSize: 15,
                  }}
                >
                  {`$${diamond.price}`}
                </Typography>
              </Box>
            ))}
          {/*{visibleCount < marketData.length && (*/}
          {/*  <button onClick={() => setVisibleCount(marketData.length)}>*/}
          {/*    Show More*/}
          {/*  </button>*/}
          {/*)}*/}
        </Box>
      </Box>
    </Box>
  );
};

export default CalculateOutputForm;
