import {Box, Typography, Button} from '@mui/material';

const DiamondCheckResultForm = ({
                                  giaId,
                                  priceEstimate,
                                  estimateRange,
                                  cut_score,
                                  visual_carat,
                                  shape,
                                  carat,
                                  color,
                                  clarity,
                                  fluorescence,
                                  symmetry,
                                  polish,
                                  lab,
                                }) => {
  return (
      <Box position="relative">
        <Typography
            sx={{
              position: 'absolute',
              top: '7px',
              fontFamily: 'Inter-Regular, Helvetica',
              fontSize: '14px',

              color: '#171a1f',
            }}
        >
          GIA ID {giaId}
        </Typography>
        <Box
            variant="contained"
            sx={{
              textAlign: 'center',
              position: 'absolute',
              width: 98,
              height: 20,
              top: 8,
              left: 150,
              backgroundColor: '#c8e6c9',
              borderRadius: 1,
              textTransform: 'none',
              fontFamily: 'Inter-Regular, Helvetica',
              fontSize: 12,

              color: '#00c853',
            }}
        >
          Natural Diamond
        </Box>
        <Typography
            sx={{
              position: 'absolute',
              top: '50px',
              left: '10px',
              fontFamily: 'Inter-Regular, Helvetica',
              fontSize: '14px',

              color: '#171a1f',
            }}
        >
          Off market
        </Typography>
        <Typography
            sx={{
              position: 'absolute',
              top: '50px',
              left: '100px',
              fontFamily: 'Inter-Regular, Helvetica',
              fontSize: '14px',

              color: '#6362a2',
            }}
        >
          Fair Price Estimate: {priceEstimate}
        </Typography>
        <Typography
            sx={{
              position: 'absolute',
              top: '75px',
              left: '10px',
              fontFamily: 'Inter-Regular, Helvetica',
              fontSize: '12px',

              color: '#6a65d2',
            }}
        >
          Estimate Range: {estimateRange}
        </Typography>
        <Typography
            sx={{
              position: 'absolute',
              top: '109px',
              fontFamily: 'Inter-Regular, Helvetica',
              fontSize: '12px',

              color: '#bcc1ca',
            }}
        >
          Not currently listed on HnTDiamond
        </Typography>


        <Box
            sx={{
              position: 'absolute',
              top: '153px',
              width: '457px',
              height: '63px',
              backgroundColor: '#fffffe',
              borderRadius: '4px',
              boxShadow: '0px 0px 1px #171a1f12, 0px 0px 2px #171a1f1f',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: '10px 0',
            }}
        >
          <Box textAlign="center">
            <Typography
                sx={{
                  fontFamily: 'Inter-Regular, Helvetica',
                  fontSize: '11px',

                  color: '#bcc1ca',
                }}
            >
              Fair Price
            </Typography>
            <Typography
                sx={{
                  fontFamily: 'Inter-Regular, Helvetica',
                  fontSize: '14px',

                  color: '#675fe8',
                }}
            >
              {priceEstimate}
            </Typography>
          </Box>
          <Box textAlign="center">
            <Typography
                sx={{
                  fontFamily: 'Inter-Regular, Helvetica',
                  fontSize: '10px',

                  color: '#bcc1ca',
                }}
            >
              Cut Score
            </Typography>
            <Typography
                sx={{
                  fontFamily: 'Inter-Regular, Helvetica',
                  fontSize: '14px',

                  color: '#5f56e7',
                }}
            >
              {cut_score}
            </Typography>
          </Box>
          <Box textAlign="center">
            <Typography
                sx={{
                  fontFamily: 'Inter-Regular, Helvetica',
                  fontSize: '11px',

                  color: '#bcc1ca',
                }}
            >
              Visual Carat
            </Typography>
            <Typography
                sx={{
                  fontFamily: 'Inter-Regular, Helvetica',
                  fontSize: '14px',
                  color: '#675fe8',
                }}
            >
              {visual_carat}
            </Typography>
          </Box>
        </Box>

        <Box
            sx={{
              position: 'absolute',
              top: '237px',
              width: '459px',
              height: '235px',
              borderRadius: '4px',
              boxShadow: '0px 0px 1px #171a1f12, 0px 0px 2px #171a1f1f',

            }}
        >
          <Box
              sx={{
                backgroundColor: 'white',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
          >
            <Box display="flex" justifyContent="space-between" padding='10px'>
              <Box>
                <Typography
                    sx={{
                      fontFamily: 'Inter-Regular, Helvetica',
                      fontSize: '11px',
                      textAlign: 'center',
                      color: '#bcc1ca',
                    }}
                >
                  Shape
                </Typography>
                <Typography
                    sx={{
                      fontFamily: 'Inter-Regular, Helvetica',
                      fontSize: '13px',
                      textAlign: 'center',
                      color: '#171a1f',
                    }}
                >
                  {shape}
                </Typography>
              </Box>
              <Box>
                <Typography
                    sx={{
                      fontFamily: 'Inter-Regular, Helvetica',
                      fontSize: '11px',
                      textAlign: 'center',
                      color: '#bcc1ca',
                    }}
                >
                  Carat
                </Typography>
                <Typography
                    sx={{
                      fontFamily: 'Inter-Regular, Helvetica',
                      fontSize: '13px',
                      textAlign: 'center',
                      color: '#171a1f',
                    }}
                >
                  {carat}
                </Typography>
              </Box>
              <Box>
                <Typography
                    sx={{
                      fontFamily: 'Inter-Regular, Helvetica',
                      fontSize: '11px',
                      textAlign: 'center',
                      color: '#bcc1ca',
                    }}
                >
                  Color
                </Typography>
                <Typography
                    sx={{
                      fontFamily: 'Inter-Regular, Helvetica',
                      fontSize: '13px',
                      textAlign: 'center',
                      color: '#171a1f',
                    }}
                >
                  {color}
                </Typography>
              </Box>
              <Box>
                <Typography
                    sx={{
                      fontFamily: 'Inter-Regular, Helvetica',
                      fontSize: '11px',
                      color: '#bcc1ca',
                      textAlign: 'center',

                    }}
                >
                  Clarity
                </Typography>
                <Typography
                    sx={{
                      fontFamily: 'Inter-Regular, Helvetica',
                      fontSize: '13px',
                      color: '#171a1f',
                      textAlign: 'center',

                    }}
                >
                  {clarity}
                </Typography>
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" padding='10px'>
              <Box>
                <Typography
                    sx={{
                      fontFamily: 'Inter-Regular, Helvetica',
                      fontSize: '11px',
                      textAlign: 'center',
                      color: '#bcc1ca',
                    }}
                >
                  Fluorescence
                </Typography>
                <Typography
                    sx={{
                      fontFamily: 'Inter-Regular, Helvetica',
                      fontSize: '13px',
                      textAlign: 'center',
                      color: '#171a1f',
                    }}
                >
                  {fluorescence}
                </Typography>
              </Box>
              <Box>
                <Typography
                    sx={{
                      fontFamily: 'Inter-Regular, Helvetica',
                      textAlign: 'center',
                      fontSize: '11px',
                      color: '#bcc1ca',
                    }}
                >
                  Symmetry
                </Typography>
                <Typography
                    sx={{
                      fontFamily: 'Inter-Regular, Helvetica',
                      fontSize: '13px',
                      textAlign: 'center',
                      color: '#171a1f',
                    }}
                >
                  {symmetry}
                </Typography>
              </Box>
              <Box>
                <Typography
                    sx={{
                      fontFamily: 'Inter-Regular, Helvetica',
                      fontSize: '11px',
                      textAlign: 'center',
                      color: '#bcc1ca',
                    }}
                >
                  Polish
                </Typography>
                <Typography
                    sx={{
                      fontFamily: 'Inter-Regular, Helvetica',
                      fontSize: '13px',
                      color: '#171a1f',
                      textAlign: 'center',

                    }}
                >
                  {polish}
                </Typography>
              </Box>
              <Box>
                <Typography
                    sx={{
                      fontFamily: 'Inter-Regular, Helvetica',
                      fontSize: '11px',
                      color: '#bcc1ca',
                      textAlign: 'center',

                    }}
                >
                  Cert. Lab
                </Typography>
                <Typography
                    sx={{
                      fontFamily: 'Inter-Regular, Helvetica',
                      fontSize: '13px',
                      textAlign: 'center',
                      color: '#171a1f',
                    }}
                >
                  {lab}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Button
              sx={{
                position: 'absolute',
                top: '168px',
                left: '13px',
                width: '433px',
                height: '49px',
                backgroundColor: '#bbdefb',
                borderRadius: '4px',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#554cd0',
                '&hover': {
                  backgroundColor: '#bbdefb',
                },

              }}
          >
            Run another check
          </Button>
        </Box>
      </Box>
  );
};

export default DiamondCheckResultForm;