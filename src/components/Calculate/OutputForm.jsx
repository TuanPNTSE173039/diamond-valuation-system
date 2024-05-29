import {Box, Typography} from "@mui/material";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import daniel from "../../assets/images/daniel.png";
import diamond_id from "../../assets/images/diamond_id.png";

export const CalculateOutputForm = () => {
    return (
        <Box sx={{position: 'relative', width: 743, height: 604, right: 60,}}>
            <Box sx={{width: 747, height: 604}}>
                <Box
                    sx={{
                        position: 'absolute',
                        fontFamily: 'Epilogue-Bold, Helvetica',
                        fontWeight: 'bold',
                        color: '#171a1f',
                        fontSize: 22,
                    }}
                >
                    Calculator Output
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        width: 740,
                        height: 310,
                        top: 32,
                        left: 3,
                    }}>
                    <Box
                        sx={{
                            width: 740,
                            height: 205,
                            position: 'absolute',
                            backgroundColor: 'white',
                            borderRadius: 1,
                            boxShadow: '0px 0px 1px #171a1f12, 0px 0px 2px #171a1f1f',
                        }}
                    >
                        <Typography
                            sx={{
                                position: 'absolute',
                                top: 63,
                                left: 283,
                                fontFamily: 'Epilogue-Bold, Helvetica',
                                fontWeight: 'bold',
                                fontSize: 57,
                                lineHeight: '74px',
                                color: '#171a1f',
                            }}
                        >
                            $5,094
                        </Typography>
                        <Typography
                            sx={{
                                position: 'absolute',
                                top: 30,
                                left: 283,
                                fontFamily: 'Epilogue-Bold, Helvetica',
                                fontWeight: 'bold',
                                fontSize: 18,
                                lineHeight: '28px',
                                color: '#171a1f',
                            }}
                        >
                            Fair Price Estimate
                        </Typography>
                        <Typography
                            sx={{
                                position: 'absolute',
                                top: 146,
                                left: 310,
                                fontFamily: 'Inter-Regular, Helvetica',
                                fontSize: 12,
                                lineHeight: '20px',
                                color: '#9095a0',

                            }}
                        >
                            Round 1 Carat G VS2
                        </Typography>
                        <Box
                            variant="contained"
                            sx={{
                                textAlign: 'center',
                                position: 'absolute',
                                width: 98,
                                height: 20,
                                top: 170,
                                left: 321,
                                backgroundColor: '#c8e6c9',
                                borderRadius: 1,
                                textTransform: 'none',
                                fontFamily: 'Inter-Regular, Helvetica',
                                fontSize: 11,
                                lineHeight: '18px',
                                color: '#00c853',
                            }}
                        >
                            Natural Diamond
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: 242,
                            height: 103,
                            position: 'absolute',
                            top: 206,
                            backgroundColor: 'gray.50',
                            borderRadius: 1,
                            boxShadow: '0px 0px 1px #171a1f12, 0px 0px 2px #171a1f1f',
                        }}
                    >
                        <Typography
                            sx={{
                                position: 'absolute',
                                top: 24,
                                left: 61,
                                fontFamily: 'Inter-Regular, Helvetica',
                                color: '#9095a0',
                                fontSize: 12,
                                lineHeight: '20px',

                            }}
                        >
                            Estimate Range
                        </Typography>
                        <Typography
                            sx={{
                                position: 'absolute',
                                top: 53,
                                left: 57,
                                fontFamily: 'Inter-Regular, Helvetica',
                                color: '#171a1f',
                                fontSize: 15,
                                lineHeight: '24px',
                                textAlign: 'center',

                            }}
                        >
                            $4,065 - $6,226
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: 254,
                            height: 103,
                            position: 'absolute',
                            top: 206,
                            left: 243,
                            backgroundColor: 'gray.50',
                            borderRadius: 1,
                            boxShadow: '0px 0px 1px #171a1f12, 0px 0px 2px #171a1f1f',
                        }}
                    >
                        <Typography
                            sx={{
                                position: 'absolute',
                                top: 23,
                                left: 75,
                                fontFamily: 'Inter-Regular, Helvetica',

                                color: '#9095a0',
                                fontSize: 12,
                                lineHeight: '20px',

                            }}
                        >
                            Last 30 Day Change
                        </Typography>
                        <Typography
                            sx={{
                                position: 'absolute',
                                top: 53,
                                left: 98,
                                fontFamily: 'Epilogue-Bold, Helvetica',
                                fontWeight: 'bold',
                                color: '#171a1f',
                                fontSize: 19,
                                lineHeight: '30px',
                            }}
                        >
                            +7.59%
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            width: 242,
                            height: 103,
                            position: 'absolute',
                            top: 206,
                            left: 498,
                            backgroundColor: 'gray.100',
                            borderRadius: 1,
                            boxShadow: '0px 0px 1px #171a1f12, 0px 0px 2px #171a1f1f',
                        }}
                    >
                        <Typography
                            sx={{
                                position: 'absolute',
                                top: 24,
                                left: 48,
                                fontFamily: 'Inter-Regular, Helvetica',

                                color: '#9095a0',
                                fontSize: 12,
                                lineHeight: '20px',
                            }}
                        >
                            Estimate Price per Carat
                        </Typography>
                        <Typography
                            sx={{
                                position: 'absolute',
                                top: 52,
                                left: 100,
                                fontFamily: 'Inter-Regular, Helvetica',

                                fontSize: 16,
                                lineHeight: '26px',
                                color: '#171a1f',

                            }}
                        >
                            $5,094
                        </Typography>
                    </Box>

                    <Typography
                        variant="body2"
                        sx={{
                            position: 'absolute',
                            top: 350,
                            left: 5,
                            fontFamily: 'Inter-Regular, Helvetica',

                            color: '#9095a0',
                            fontSize: 10,
                        }}
                    >
                        Sponsored
                    </Typography>
                    <Box
                        sx={{
                            width: 740,
                            height: 86,
                            top: 370,
                            left: 3,
                            position: 'absolute',
                            backgroundColor: 'gray.',
                            borderRadius: 1,
                            boxShadow: '0px 0px 1px #171a1f12, 0px 0px 2px #171a1f1f',
                        }}
                    >
                        <Box
                            sx={{
                                width: 70,
                                height: 58,
                                top: 10,
                                left: 7,
                                position: 'absolute',
                            }}
                        >
                            <img src={diamond_id} alt="diamond"/>
                        </Box>

                        <Box
                            sx={{
                                width: 60,
                                top: 23,
                                left: 107,
                                position: 'absolute',
                            }}
                        >
                            <Typography
                                sx={{
                                    top: 20,
                                    fontFamily: 'Inter-Regular, Helvetica',
                                    color: '#171a1f',
                                    fontSize: 9,
                                    position: 'absolute',
                                }}
                            >
                                CUT SCORE
                            </Typography>
                            <Typography
                                sx={{
                                    left: 16,
                                    fontFamily: 'Inter-Regular, Helvetica',
                                    color: '#6a63ee',
                                    fontSize: 14,
                                    position: 'absolute',
                                }}
                            >
                                8.9
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                top: 43,
                                left: 207,
                            }}>
                            <Typography
                                sx={{
                                    top: 43,
                                    left: 207,
                                    fontFamily: 'Inter-Regular, Helvetica',

                                    color: '#171a1f',
                                    fontSize: 9,
                                    lineHeight: '14px',
                                    position: 'absolute',
                                }}
                            >
                                CARAT
                            </Typography>
                            <Typography
                                sx={{
                                    top: 23,
                                    left: 208,
                                    fontFamily: 'Inter-Regular, Helvetica',

                                    color: '#171a1f',
                                    fontSize: 14,
                                    lineHeight: '20px',
                                    position: 'absolute',
                                }}
                            >
                                0.85
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                width: 39,
                                height: 35,
                                top: 23,
                                left: 275,
                                position: 'absolute',
                            }}
                        >
                            <Typography
                                sx={{
                                    top: 21,
                                    fontFamily: 'Inter-Regular, Helvetica',
                                    color: '#171a1f',
                                    fontSize: 9,
                                    lineHeight: '14px',
                                    position: 'absolute',
                                }}
                            >
                                CLARITY
                            </Typography>
                            <Typography
                                sx={{
                                    left: 7,
                                    fontFamily: 'Inter-Regular, Helvetica',
                                    color: '#171a1f',
                                    fontSize: 14,
                                    lineHeight: '22px',
                                    position: 'absolute',
                                }}
                            >
                                VS2
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                width: 28,
                                height: 32,
                                top: 25,
                                left: 352,
                                position: 'absolute',
                            }}
                        >

                            <Typography
                                sx={{
                                    top: 18,
                                    fontFamily: 'Inter-Regular, Helvetica',
                                    color: '#171a1f',
                                    fontSize: 9,
                                    lineHeight: '14px',
                                    textAlign: 'center',
                                    position: 'absolute',
                                }}
                            >
                                COLOR
                            </Typography>
                            <Typography
                                sx={{
                                    left: 11,
                                    fontFamily: 'Inter-Regular, Helvetica',
                                    color: '#171a1f',
                                    fontSize: 14,
                                    textAlign: 'center',
                                    position: 'absolute',
                                }}
                            >
                                G
                            </Typography>
                        </Box>
                        <Box

                            sx={{
                                width: 96,
                                height: 27,
                                top: 29,
                                left: 446,
                                position: 'absolute',
                            }}
                        >
                            <img src={daniel} alt="Daniel"/>
                        </Box>
                        <Typography
                            sx={{
                                top: 32,
                                left: 620,
                                fontFamily: 'Inter-Regular, Helvetica',
                                color: '#171a1f',
                                fontSize: 15,
                                position: 'absolute',
                            }}
                        >
                            $2,490
                        </Typography>
                        <NavigateNextOutlinedIcon
                            sx={{
                                position: 'absolute',
                                top: 35,
                                width: 20,
                                height: 20,
                                left: 710,

                            }}/>

                    </Box>
                </Box>

            </Box>
        </Box>
    );
};

export default CalculateOutputForm;
