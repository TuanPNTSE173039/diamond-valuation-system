import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import diamond from "../../assets/images/diamond_poster.png";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import {
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  DialogTitle,
} from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { addValuationRequest } from "../../services/ValuationRequest/api.js";

const AppointmentForm = ({ services, customer }) => {
  const [service, setService] = useState(""); // Service selection state
  const [diamondQuantity, setDiamondQuantity] = useState(0); // Quantity state
  const [appointmentTime, setAppointmentTime] = useState("");
  const [valuationRequestId, setValuationRequestId] = useState(null);
  const [open, setOpen] = useState(false);

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (body) => {
      return addValuationRequest(body); // Call the addValuationRequest function with the body
    },
    onSuccess: (data) => {
      console.log("Mutation successful");
      setValuationRequestId(data.data.id);
      toast.success("Appointment created successfully");
      setOpen(true);
    },
    onError: (error) => {
      console.log(error);
      toast.error("Failed to create appointment");
    },
  });

  const handleServiceChange = (event) => {
    setService(event.target.value);
  };
  const handleDiamondQuantityChange = (event) => {
    setDiamondQuantity(event.target.value);
  };

  const handleSubmit = () => {
    const body = {
      diamondAmount: diamondQuantity,
      service: {
        id: services.find((s) => s.name === service).id,
      },
      customerID: customer.id,
    };
    console.log(body);
    mutate(body);

    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const appointmentTime = `${now.toLocaleTimeString(undefined, options)}`;

    setAppointmentTime(appointmentTime);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "560px",
        bgcolor: "#717171",
        marginTop: "20px",
        marginBottom: "30px",
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
          <FormControl sx={{ width: "400px", ml: "22px" }}>
            <FormLabel sx={{ color: "white", margin: "2px" }}>Name*</FormLabel>
            <TextField
              variant="outlined"
              required
              placeholder="Input your name"
              value={customer.lastName + " " + customer.firstName}
              disabled
              InputProps={{
                sx: {
                  height: "40px",
                  backgroundColor: "white",
                  color: "black",
                },
              }}
            />
          </FormControl>
          <FormControl sx={{ width: "400px", ml: "22px" }}>
            <FormLabel sx={{ color: "white", margin: "2px" }}>
              Identity Card*
            </FormLabel>
            <TextField
              variant="outlined"
              required
              placeholder="Input identity card"
              value={customer.identityDocument}
              disabled
              InputProps={{
                sx: {
                  height: "40px",
                  backgroundColor: "white",
                },
              }}
            />
          </FormControl>

          <FormControl sx={{ width: "400px", ml: "22px" }}>
            <FormLabel sx={{ color: "white", margin: "2px" }}>Phone*</FormLabel>
            <TextField
              variant="outlined"
              required
              placeholder="Input your phone"
              value={customer.phone}
              disabled
              InputProps={{
                sx: {
                  height: "40px",
                  backgroundColor: "white",
                },
              }}
            />
          </FormControl>

          <FormControl sx={{ width: "400px", ml: "22px" }}>
            <FormLabel sx={{ color: "white", margin: "2px" }}>
              Address*
            </FormLabel>
            <TextField
              variant="outlined"
              required
              placeholder="Input address"
              value={customer.address}
              disabled
              InputProps={{
                sx: {
                  height: "40px",
                  backgroundColor: "white",
                },
              }}
            />
          </FormControl>

          <FormControl sx={{ width: "400px", ml: "22px" }}>
            <FormLabel sx={{ color: "white", margin: "2px" }}>
              Service*
            </FormLabel>
            <Select
              variant="outlined"
              required
              sx={{
                color: service === "Choose service" ? " #a9a9a9" : "black",
                height: "40px",
                backgroundColor: "white",
                fontFamily: "'Your Font Family', sans-serif",
              }}
              value={service}
              onChange={handleServiceChange}
            >
              <MenuItem value="Choose service" disabled>
                Choose service
              </MenuItem>
              {services.map((service, index) => (
                <MenuItem key={index} value={service.name}>
                  {service.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ width: "400px", ml: "22px" }}>
            <FormLabel sx={{ color: "white", margin: "2px" }}>
              Quantity*
            </FormLabel>
            <TextField
              type="number"
              variant="outlined"
              required
              placeholder="Input quantity"
              value={diamondQuantity || ""}
              onChange={handleDiamondQuantityChange}
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
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, width: "400px", ml: "22px" }}
          >
            Submit
          </Button>
        </form>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <Box display="flex" justifyContent="center" alignItems="center">
              <CheckCircleOutlineIcon
                color="success"
                style={{ fontSize: 70 }}
              />
            </Box>
            <Typography
              align="center"
              style={{
                fontWeight: "bold",
                color: "green",
                fontSize: 20,
              }}
            >
              {"Successful Appointment"}
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Box id="alert-dialog-description">
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                align="center"
                marginBottom="10px"
              >
                <Typography> Appointment details:</Typography>
                <Typography style={{ fontWeight: "bold", color: "#AE9A7F" }}>
                  Code: #{valuationRequestId}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Box display="flex" flexDirection="column">
                  <span style={{ marginBottom: "10px", color: "#999999" }}>
                    Customer Name:
                  </span>
                  <span style={{ marginBottom: "10px", color: "#999999" }}>
                    Phone:
                  </span>
                  <span style={{ marginBottom: "10px", color: "#999999" }}>
                    Appointment Time:
                  </span>
                  <span style={{ marginBottom: "10px", color: "#999999" }}>
                    Service:
                  </span>
                  <span style={{ marginBottom: "10px", color: "#999999" }}>
                    Diamond Quantity:
                  </span>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                  ml={2}
                >
                  <span style={{ marginBottom: "10px" }}>
                    {customer.lastName + " " + customer.firstName}
                  </span>
                  <span style={{ marginBottom: "10px" }}>{customer.phone}</span>
                  <Typography
                    style={{ fontWeight: "bold", marginBottom: "10px" }}
                  >
                    {appointmentTime}
                  </Typography>
                  <span style={{ marginBottom: "10px" }}>{service}</span>
                  <span style={{ marginBottom: "10px" }}>
                    {diamondQuantity}
                  </span>
                </Box>
              </Box>
            </Box>
          </DialogContent>
          <DialogActions>
            <Box display="flex" justifyContent="center" width="100%">
              <Button onClick={() => setOpen(false)} color="primary" autoFocus>
                Close
              </Button>
            </Box>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default AppointmentForm;
