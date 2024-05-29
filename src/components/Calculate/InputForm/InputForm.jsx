import {useState} from "react";
import {Box, Button, Grid} from "@mui/material";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import OriginButton from "./Button/Origin.jsx";

const CalculateInputForm = () => {
    const [diamondOrigin, setDiamondOrigin] = useState({});
    const [shape, setShape] = useState({});
    const [color, setColor] = useState({});
    const [clarity, setClarity] = useState({});

    const handleClick = (setState, buttonName) => {
        setState((prevState) => {
            // First, create a new object where all button colors are set to "default"
            const resetColors = Object.keys(prevState).reduce((acc, curr) => {
                acc[curr] = "default";
                return acc;
            }, {});

            // Then, set the clicked button's color to "clicked"
            resetColors[buttonName] = "clicked";

            return resetColors;
        });
    };

    return (
        <Box sx={{width: 386, height: 621, position: "relative"}}>
            <Box
                sx={{
                    width: 386,
                    height: 621,
                    position: "absolute",
                    left: "110px",
                }}
            >
                <Box sx={{width: 400, height: 621, position: "relative"}}>
                    <Box
                        sx={{
                            position: "absolute",
                            fontFamily: "Epilogue-Bold, Helvetica",
                            fontWeight: "bold",
                            color: "#171a1f",
                            fontSize: 22,
                        }}
                    >
                        Calculator Input
                    </Box>
                    <Box>
                        <Box
                            sx={{
                                position: "absolute",
                                top: 54,
                                left: 7,
                                fontFamily: "Inter-Regular, Helvetica",
                                color: "#9095a0",
                                fontSize: 14,
                            }}
                        >
                            DIAMOND ORIGIN
                        </Box>

                        <Grid container spacing={2}>
                            <Grid item xs={5.5}>
                                <OriginButton
                                    buttonName={"natural"}
                                    onClick={handleClick}
                                    state={diamondOrigin}
                                    setState={setDiamondOrigin}
                                    icon={<PublicOutlinedIcon />}
                                >
                                    NATURAL
                                </OriginButton>
                            </Grid>
                            <Grid item xs={5.5}>
                                <OriginButton
                                    buttonName={"labGrown"}
                                    onClick={handleClick}
                                    state={diamondOrigin}
                                    setState={setDiamondOrigin}
                                    icon={<ScienceOutlinedIcon />}
                                >
                                    LAB GROWN
                                </OriginButton>
                            </Grid>
                        </Grid>

                    </Box>
                    <Box>
                        <Box sx={{
                            position: 'absolute',
                            top: 138,
                            left: 6,
                            fontFamily: 'Inter-Regular,Helvetica',
                            color: '#9095a0',
                            fontSize: 14,
                            lineHeight: '22px',
                            whiteSpace: 'nowrap'
                        }}>
                            SHAPE
                        </Box>
                        <Button
                            onClick={() => handleClick(setShape, "heart")}
                            sx={{
                                width: 71,
                                height: 33,
                                position: 'absolute',
                                top: 204, left: 312,

                                backgroundColor: shape["heart"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                                ":hover": {bgcolor: "#4F46E5", color: "white"},
                                fontFamily: 'Inter-Regular,Helvetica',
                                fontSize: 10,
                                color: shape["heart"] === "clicked" ? "white" : "#171a1f",
                            }}
                        >

                            HEART

                        </Button>
                        <Button
                            onClick={() => handleClick(setShape, "princess")}
                            sx={{
                                width: 71,
                                height: 33,
                                position: 'absolute',
                                top: 166,
                                left: 312,
                                backgroundColor: shape["princess"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                                ":hover": {bgcolor: "#4F46E5", color: "white"},
                                fontFamily: 'Inter-Regular,Helvetica',
                                fontSize: 10,
                                color: shape["princess"] === "clicked" ? "white" : "#171a1f",
                            }}
                        >

                            PRINCESS

                        </Button>
                        <Button
                            onClick={() => handleClick(setShape, "asscher")}
                            sx={{
                                width: 71,
                                height: 33,
                                position: 'absolute',
                                top: 204,
                                left: 236,
                                backgroundColor: shape["asscher"] === "clicked" ? "#4F46E5" : "#f5f5f5",

                                ":hover": {bgcolor: "#4F46E5", color: "white"},
                                fontFamily: 'Inter-Regular,Helvetica',
                                fontSize: 10,
                                color: shape["asscher"] === "clicked" ? "white" : "#171a1f",
                            }}
                        >

                            ASSCHER

                        </Button>
                        <Button
                            onClick={() => handleClick(setShape, "oval")}
                            sx={{
                                width: 71,
                                height: 33,
                                position: 'absolute',
                                top: 166,
                                left: 236,
                                backgroundColor: shape["oval"] === "clicked" ? "#4F46E5" : "#f5f5f5",

                                ":hover": {bgcolor: "#4F46E5", color: "white"},
                                fontFamily: 'Inter-Regular,Helvetica',
                                fontSize: 10,
                                color: shape["oval"] === "clicked" ? "white" : "#171a1f",
                            }}
                        >

                            OVAL

                        </Button>

                        <Button
                            onClick={() => handleClick(setShape, "marquise")}
                            sx={{
                                width: 71,
                                height: 33,
                                position: 'absolute',
                                top: 204,
                                left: 160,
                                backgroundColor: shape["marquise"] === "clicked" ? "#4F46E5" : "#f5f5f5",

                                ":hover": {bgcolor: "#4F46E5", color: "white"},
                                fontFamily: 'Inter-Regular,Helvetica',
                                fontSize: 10,
                                color: shape["marquise"] === "clicked" ? "white" : "#171a1f",
                            }}
                        >

                            MARQUISE
                        </Button>

                        <Button
                            onClick={() => handleClick(setShape, "emerald")}
                            sx={{
                                width: 71,
                                height: 33,
                                position: 'absolute',
                                top: 166,
                                left: 160,
                                backgroundColor: shape["emerald"] === "clicked" ? "#4F46E5" : "#f5f5f5",

                                ":hover": {bgcolor: "#4F46E5", color: "white"},
                                fontFamily: 'Inter-Regular,Helvetica',
                                fontSize: 10,
                                color: shape["emerald"] === "clicked" ? "white" : "#171a1f",
                            }}
                        >

                            EMERALD

                        </Button>


                        <Button
                            onClick={() => handleClick(setShape, "pear")}
                            sx={{
                                width: 71,
                                height: 33,
                                position: 'absolute',
                                top: 204,
                                left: 9,
                                backgroundColor: shape["pear"] === "clicked" ? "#4F46E5" : "#f5f5f5",

                                ":hover": {bgcolor: "#4F46E5", color: "white"},
                                fontFamily: 'Inter-Regular,Helvetica',
                                fontSize: 10,
                                color: shape["pear"] === "clicked" ? "white" : "#171a1f",
                            }}
                        >

                            PEAR

                        </Button>
                        <Button
                            onClick={() => handleClick(setShape, "radiant")}
                            sx={{
                                width: 71,
                                height: 33,
                                position: 'absolute',
                                top: 204,
                                left: 85,
                                backgroundColor: shape["radiant"] === "clicked" ? "#4F46E5" : "#f5f5f5",

                                ":hover": {bgcolor: "#4F46E5", color: "white"},
                                fontFamily: 'Inter-Regular,Helvetica',
                                fontSize: 10,
                                color: shape["radiant"] === "clicked" ? "white" : "#171a1f",
                            }}
                        >

                            RADIANT
                        </Button>
                        <Button
                            onClick={() => handleClick(setShape, "cushion")}
                            sx={{
                                width: 71,
                                height: 33,
                                position: 'absolute',
                                top: 166,
                                left: 85,
                                backgroundColor: shape["cushion"] === "clicked" ? "#4F46E5" : "#f5f5f5",

                                ":hover": {bgcolor: "#4F46E5", color: "white"},
                                fontFamily: 'Inter-Regular,Helvetica',
                                fontSize: 10,
                                color: shape["cushion"] === "clicked" ? "white" : "#171a1f",
                            }}
                        >

                            CUSHION
                        </Button>
                        <Button
                            onClick={() => handleClick(setShape, "round")}
                            sx={{
                                width: 70,
                                height: 32,
                                position: 'absolute',
                                top: 166,
                                left: 10,
                                backgroundColor: shape["round"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                                ":hover": {bgcolor: "#4F46E5", color: "white"},
                                fontFamily: 'Inter-Regular,Helvetica',
                                fontSize: 10,
                                color: shape["round"] === "clicked" ? "white" : "#171a1f",
                            }}
                        >

                            ROUND

                        </Button>

                    </Box>

                    <div>
                        <div
                            className="absolute top-[252px] left-[7px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#9095a0] text-[14px] leading-[22px] whitespace-nowrap">
                            CARAT
                        </div>
                        <button
                            className="all-[unset] box-border w-[61px] h-[28px] top-[277px] left-[167px] rounded-[3px] absolute bg-indigo-600 overflow-hidden">
                            <div
                                className="top-[2px] left-[16px] text-white leading-[23px] absolute [font-family:'Inter-Regular',Helvetica] font-normal text-[14px] whitespace-nowrap">
                                1,00
                            </div>
                        </button>
                        <div className="absolute w-[373px] h-[22px] top-[313px] left-[10px]">
                            <div className="relative h-[22px]">
                                <div
                                    className="absolute w-[373px] h-[6px] top-[8px] left-0 bg-[#a6f5ff] rounded-[3px] overflow-hidden">
                                    <div className="w-[141px] h-[6px] bg-[#00bdd6]"/>
                                </div>
                                <div
                                    className="absolute w-[22px] h-[22px] top-0 left-[130px] bg-white rounded-[11px] border border-solid border-[#00bdd6] shadow-[0px_0px_1px_#00bdd612,0px_0px_2px_#00bdd61f]"/>
                            </div>
                        </div>
                    </div>

                    <Box>
                        <Box sx={{
                            position: 'absolute',
                            top: 348,
                            left: 7,
                            fontFamily: 'Inter-Regular,Helvetica',
                            fontSize: 14,
                            color: '#9095a0',
                            whiteSpace: 'nowrap'
                        }}>
                            COLOR
                        </Box>
                        <Button
                            onClick={() => handleClick(setColor, "d")}
                            sx={{
                                width: 90,
                                height: 33,
                                position: 'absolute',
                                top: 414,
                                left: 293,

                                backgroundColor: color["d"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                                ":hover": {bgcolor: "#4F46E5", color: "white"},
                                fontFamily: 'Inter-Regular,Helvetica',
                                fontSize: 14,
                                color: color["d"] === "clicked" ? "white" : "#171a1f",
                            }}
                        >
                            D
                        </Button>

                        <Button
                            onClick={() => handleClick(setColor, "h")}
                            sx={{
                                width: 90,
                                height: 33,
                                position: 'absolute',
                                top: 376,
                                left: 293,

                                backgroundColor: color["h"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                                ":hover": {bgcolor: "#4F46E5", color: "white"},
                                fontFamily: 'Inter-Regular,Helvetica',
                                fontSize: 14,
                                color: color["h"] === "clicked" ? "white" : "#171a1f",
                            }}
                        >
                            H
                        </Button>


                        <Button
                            onClick={() => handleClick(setColor, "e")}
                            sx={{
                                width: 90,
                                height: 33,
                                position: 'absolute',
                                top: 414,
                                left: 198,

                                backgroundColor: color["e"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                                ":hover": {bgcolor: "#4F46E5", color: "white"},
                                fontFamily: 'Inter-Regular,Helvetica',
                                fontSize: 14,
                                color: color["e"] === "clicked" ? "white" : "#171a1f",
                            }}
                        >
                            E
                        </Button>
                        <Button
                            onClick={() => handleClick(setColor, "k")}
                            sx={{
                                width: 90,
                                height: 33,
                                position: 'absolute',
                                top: 376,
                                left: 9,

                                backgroundColor: color["k"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                                ":hover": {bgcolor: "#4F46E5", color: "white"},
                                fontFamily: 'Inter-Regular,Helvetica',
                                fontSize: 14,
                                color: color["k"] === "clicked" ? "white" : "#171a1f",
                            }}
                        >

                            K

                        </Button>

                        <Button
                            onClick={() => handleClick(setColor, "f")}
                            sx={{
                                width: 90,
                                height: 33,
                                position: 'absolute',
                                top: 414,
                                left: 104,

                                backgroundColor: color["f"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                                ":hover": {bgcolor: "#4F46E5", color: "white"},
                                fontFamily: 'Inter-Regular,Helvetica',
                                fontSize: 14,
                                color: color["f"] === "clicked" ? "white" : "#171a1f",
                            }}
                        >

                            F
                        </Button>


                        <Button
                            onClick={() => handleClick(setColor, "j")}
                            sx={{
                                width: 90,
                                height: 33,
                                position: 'absolute',
                                top: 376,
                                left: 104,

                                backgroundColor: color["j"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                                ":hover": {bgcolor: "#4F46E5", color: "white"},
                                fontFamily: 'Inter-Regular,Helvetica',
                                fontSize: 14,
                                color: color["j"] === "clicked" ? "white" : "#171a1f",
                            }}
                        >
                            J
                        </Button>


                        <Button
                            onClick={() => handleClick(setColor, "g")}
                            sx={{
                                width: 89,
                                height: 33,
                                position: 'absolute',
                                top: 414,
                                left: 10,
                                backgroundColor: color["g"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                                ":hover": {bgcolor: "#4F46E5", color: "white"},
                                fontFamily: 'Inter-Regular,Helvetica',
                                fontSize: 14,
                                color: color["g"] === "clicked" ? "white" : "#171a1f",
                            }}
                        >
                            G
                        </Button>

                        <Button
                            onClick={() => handleClick(setColor, "i")}
                            sx={{
                                width: "90px",
                                height: "33px",
                                position: 'absolute',
                                top: "376px",
                                left: "198px",
                                backgroundColor: color["i"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                                ":hover": {bgcolor: "#4F46E5", color: "white"},
                                fontFamily: 'Inter-Regular,Helvetica',
                                fontSize: "14px",
                                color: color["i"] === "clicked" ? "white" : "#171a1f",
                            }}
                        >
                            I
                        </Button>
                    </Box>

                    <Box>
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '462px',
                                left: '7px',
                                fontFamily: 'Inter-Regular,Helvetica',
                                fontSize: '14px',
                                color: '#9095a0',
                                lineHeight: '22px',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            CLARITY
                        </Box>
                        <Button
                            onClick={() => handleClick(setClarity, "fl")}
                            sx={{
                                width: '90px',
                                height: '33px',
                                position: 'absolute',
                                top: '528px',
                                left: '293px',
                                backgroundColor: clarity["fl"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                                ":hover": {bgcolor: "#4F46E5", color: "white"},
                                fontFamily: 'Inter-Regular,Helvetica',
                                fontSize: '14px',
                                color: clarity["fl"] === "clicked" ? "white" : "#171a1f",
                            }}
                        >
                            FL
                        </Button>

                        <Button
                            onClick={() => handleClick(setClarity, "vs1")}
                            sx={{
                                width: '90px',
                                height: '33px',
                                position: 'absolute',
                                top: '490px',
                                left: '293px',
                                backgroundColor: clarity["vs1"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                                ":hover": {bgcolor: "#4F46E5", color: "white"},
                                fontFamily: 'Inter-Regular,Helvetica',
                                fontSize: '14px',
                                color: clarity["vs1"] === "clicked" ? "white" : "#171a1f",
                            }}
                        >
                            VS1
                        </Button>

                        <Button
                            onClick={() => handleClick(setClarity, "if")}
                            sx={{
                                width: '90px',
                                height: '33px',
                                position: 'absolute',
                                top: '528px',
                                left: '198px',
                                backgroundColor: clarity["if"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                                ":hover": {bgcolor: "#4F46E5", color: "white"},
                                fontFamily: 'Inter-Regular,Helvetica',
                                fontSize: '14px',
                                color: clarity["if"] === "clicked" ? "white" : "#171a1f",
                            }}
                        >
                            IF
                        </Button>

                        <Button
                            onClick={() => handleClick(setClarity, "vvs2")}
                            sx={{
                                width: '90px',
                                height: '33px',
                                position: 'absolute',
                                top: '528px',
                                left: '9px',
                                backgroundColor: clarity["vvs2"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                                ":hover": {bgcolor: "#4F46E5", color: "white"},
                                fontFamily: 'Inter-Regular,Helvetica',
                                fontSize: '14px',
                                color: clarity["vvs2"] === "clicked" ? "white" : "#171a1f",
                            }}
                        >
                            VVS2
                        </Button>

                        <Button
                            onClick={() => handleClick(setClarity, "si2")}
                            sx={{
                                width: '90px',
                                height: '33px',
                                position: 'absolute',
                                top: '490px',
                                left: '9px',
                                backgroundColor: clarity["si2"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                                ":hover": {bgcolor: "#4F46E5", color: "white"},
                                fontFamily: 'Inter-Regular,Helvetica',
                                fontSize: '14px',
                                color: clarity["si2"] === "clicked" ? "white" : "#171a1f",
                            }}
                        >
                            SI2
                        </Button>


                        <Button
                            onClick={() => handleClick(setClarity, "vvs1")}
                            sx={{
                                width: '90px',
                                height: '33px',
                                position: 'absolute',
                                top: '528px',
                                left: '104px',
                                backgroundColor: clarity["vvs1"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                                ":hover": {bgcolor: "#4F46E5", color: "white"},
                                fontFamily: 'Inter-Regular,Helvetica',
                                fontSize: '14px',
                                color: clarity["vvs1"] === "clicked" ? "white" : "#171a1f",
                            }}
                        >
                            VVS1
                        </Button>

                        <Button
                            onClick={() => handleClick(setClarity, "sl1")}
                            sx={{
                                width: '90px',
                                height: '33px',
                                position: 'absolute',
                                top: '490px',
                                left: '104px',
                                backgroundColor: clarity["sl1"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                                ":hover": {bgcolor: "#4F46E5", color: "white"},
                                fontFamily: 'Inter-Regular,Helvetica',
                                fontSize: '14px',
                                color: clarity["sl1"] === "clicked" ? "white" : "#171a1f",
                            }}
                        >
                            SL1
                        </Button>

                        <Button
                            onClick={() => handleClick(setClarity, "vs2")}
                            sx={{
                                width: '89px',
                                height: '32px',
                                position: 'absolute',
                                top: '490px',
                                left: '199px',
                                backgroundColor: clarity["vs2"] === "clicked" ? "#4F46E5" : "#f5f5f5",
                                ":hover": {bgcolor: "#4F46E5", color: "white"},
                                fontFamily: 'Inter-Regular,Helvetica',
                                fontSize: '14px',
                                color: clarity["vs2"] === "clicked" ? "white" : "#171a1f",
                            }}
                        >
                            VS2
                        </Button>

                    </Box>

                    <button
                        className="all-[unset] box-border w-[380px] h-[40px] top-[581px] left-[6px] rounded-[4px] absolute bg-indigo-600 overflow-hidden">
                        <div
                            className="absolute top-[8px] left-[165px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[15px] leading-[23px] whitespace-nowrap">
                            Submit
                        </div>
                    </button>
                </Box>
            </Box>
        </Box>
    );
};

export default CalculateInputForm;
