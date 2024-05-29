import {Box, Button} from "@mui/material";

// eslint-disable-next-line react/prop-types
const OriginButton = ({onClick, buttonName, icon, state, children}) => {
    return (
        <Button
            onClick={onClick()}
            sx={{
                width: "45%",
                height: 37,
                position: "absolute",
                top: 85,
                backgroundColor:
                    {state}[{buttonName}] === "clicked" ? "#4F46E5" : "#f5f5f5",
                ":hover": {bgcolor: "#4F46E5", color: "white"},
                fontFamily: "Inter-Regular, Helvetica",
                color:
                    {state}[{buttonName}] === "clicked" ? "white" : "#171a1f",
                fontSize: 12,
            }}
        >
            <Box sx={{
                position: "absolute",
                width: "5%",
                height: "20%",
                top: 8,
                left: 10,
            }}>
                {icon}
            </Box>

            {children}
        </Button>
    );
}

export default OriginButton;