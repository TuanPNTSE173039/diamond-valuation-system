import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import diamond from "../../assets/images/diamond_poster.png";
import {FormControl, FormLabel, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {useState} from "react";

const AppointmentForm = () => {

    const [service, setService] = useState("Choose service"); // Create a state variable and a setter function

    const handleServiceChange = (event) => {
        setService(event.target.value); // Update the state when a service is selected
    };

    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height: "560px",
                bgcolor: "#717171",
                marginTop: '20px',
                marginBottom: '30px'
            }}
        >
            <Box
                component="img"
                src={diamond}
                alt="Diamond"
                sx={{
                    position: "absolute",
                    width: "681px",
                    height: "555px",
                    top: "5px",
                    left: "740px",
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    width: "490px",
                    height: "560px",
                    top: "0px",
                    left: "204px",
                    bgcolor: "#d8c0989e",
                    p: 3,
                }}
            >
                <Typography
                    variant="h5"
                    component="div"
                    sx={{
                        fontFamily: "'Epilogue-Bold', Helvetica",
                        fontWeight: "bold",
                        color: "#003565",
                        mb: 2,
                        ml: "22px",
                    }}
                >
                    Appointments
                </Typography>

                <form>
                    <FormControl sx={{width: "400px", ml: "22px"}}>
                        <FormLabel sx={{color: "white", margin: "2px"}}>Name*</FormLabel>
                        <TextField
                            variant="outlined"
                            required
                            placeholder="Input your name"
                            InputProps={{
                                sx: {
                                    height: "40px",
                                    backgroundColor: "white",
                                },
                            }}
                        />
                    </FormControl>
                    <FormControl sx={{width: "400px", ml: "22px"}}>
                        <FormLabel sx={{color: "white", margin: "2px"}}>
                            Identity Card*
                        </FormLabel>
                        <TextField
                            variant="outlined"
                            required
                            placeholder="Input identity card"
                            InputProps={{
                                sx: {
                                    height: "40px",
                                    backgroundColor: "white",
                                },
                            }}
                        />
                    </FormControl>

                    <FormControl sx={{width: "400px", ml: "22px"}}>
                        <FormLabel sx={{color: "white", margin: "2px"}}>Phone*</FormLabel>
                        <TextField
                            variant="outlined"
                            required
                            placeholder="Input your phone"
                            InputProps={{
                                sx: {
                                    height: "40px",
                                    backgroundColor: "white",
                                },
                            }}
                        />
                    </FormControl>

                    <FormControl sx={{width: "400px", ml: "22px"}}>
                        <FormLabel sx={{color: "white", margin: "2px"}}>
                            Address*
                        </FormLabel>
                        <TextField
                            variant="outlined"
                            required
                            placeholder="Input address"
                            InputProps={{
                                sx: {
                                    height: "40px",
                                    backgroundColor: "white",
                                },
                            }}
                        />
                    </FormControl>

                    <FormControl sx={{width: "400px", ml: "22px"}}>
                        <FormLabel sx={{color: "white", margin: "2px"}}>
                            Service*
                        </FormLabel>
                        <Select
                            variant="outlined"
                            required
                            sx={{
                                color: service === "Choose service" ? ' #a9a9a9' : 'black',
                                height: "40px",
                                backgroundColor: "white",
                                fontFamily: "'Your Font Family', sans-serif",
                            }}
                            value={service} // Use the state variable as the value
                            onChange={handleServiceChange} // Update the state when a service is selected
                        >
                            <MenuItem value="Choose service" disabled>
                                Choose service
                            </MenuItem>
                            <MenuItem value={"Diamond valuation"}>Diamond valuation</MenuItem>
                            <MenuItem value={"Service 2"}>Service 2</MenuItem>
                            <MenuItem value={"Service 3"}>Service 3</MenuItem>
                            {/* Add more MenuItem components for each service you offer */}
                        </Select>
                    </FormControl>

                    <FormControl sx={{width: "400px", ml: "22px"}}>
                        <FormLabel sx={{color: "white", margin: "2px"}}>
                            Quantity*
                        </FormLabel>
                        <TextField
                            type="number"
                            variant="outlined"
                            required
                            placeholder="Input quantity"
                            InputProps={{
                                sx: {
                                    height: "40px",
                                    backgroundColor: "white",
                                },
                            }}
                            inputProps={{
                                min: 0,
                            }}
                        />
                    </FormControl>

                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{mt: 2, width: "400px", ml: "22px"}}
                    >
                        Submit
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default AppointmentForm;
