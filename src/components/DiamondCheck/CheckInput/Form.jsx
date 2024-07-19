import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import checkImage from "../../../assets/images/check.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getDiamondCheckByCertificateId,
  getValuationRequestDetails,
} from "../../../services/api.js";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { string } from "yup";

const DiamondCheckInputForm = () => {
  const [checkType, setCheckType] = useState("certificateId");
  const navigate = useNavigate();

  const initialValues = {
    inputValue: "",
    checkType: "certificateId",
  };

  const validationSchema = Yup.object({
    inputValue: Yup.string().when("checkType", {
      is: "certificateId",
      then: () =>
        string()
          .required("Certificate ID is required")
          .matches(/^[0-9]+$/, "Certificate ID must be numeric")
          .length(10, "Certificate ID must be 10 characters."),
      otherwise: Yup.string().matches(
        /^[0-9]+$/,
        "Valuation Code must be numeric",
      ),
    }),
  });

  const handleCheck = async (values) => {
    try {
      let response;
      if (checkType === "certificateId") {
        response = await getDiamondCheckByCertificateId(values.inputValue);
        if (!response.data) {
          throw new Error("Certificate ID not found!");
        }
        navigate(`/check/certificate/${values.inputValue}`);
      } else if (checkType === "valuationCode") {
        response = await getValuationRequestDetails(values.inputValue);
        if (!response.data) {
          throw new Error("Valuation Code not found!");
        }
        navigate(`/check/valuation/${values.inputValue}`);
      }
    } catch (error) {
      console.error("Error during form submission:", error); // Log the error
      if (error.response && error.response.status === 404) {
        toast.info("Certificate ID or Valuation Code not found!");
      } else {
        toast.error(error.message || "An unexpected error occurred.");
      }
    }
  };
  const CustomErrorMessage = ({ children }) => (
    <div
      style={{
        color: "red",
        fontSize: "0.75rem",
        paddingLeft: "20px",
        marginTop: "12px",
      }}
    >
      {children}
    </div>
  );

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
      mt={3}
      height="calc(100vh - 243px)"
    >
      <ToastContainer />
      <Box
        width="100vw"
        height="calc(100vh - 245px)"
        sx={{
          backgroundImage: `url(${checkImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <Box
          position="relative"
          width="100%"
          maxWidth={720}
          height="auto"
          p={12}
        >
          <Box position="relative" width="100%" height="auto">
            <Typography
              fontFamily="'Epilogue-Bold', Helvetica"
              fontWeight="bold"
              color="#171a1f"
              fontSize={{ xs: 30, sm: 40, md: 50 }}
            >
              Check any diamond's
            </Typography>
            <Typography
              width="100%"
              position="relative"
              top={-20}
              fontFamily="'Epilogue-Bold', Helvetica"
              fontWeight="bold"
              color="#171a1f"
              fontSize={{ xs: 25, sm: 35, md: 45 }}
            >
              price &amp; quality
            </Typography>
          </Box>
          <Typography
            position="relative"
            width="100%"
            top={10}
            fontFamily="'Inter-Regular', Helvetica"
            color="#171a1f"
            fontSize={{ xs: 14, sm: 16, md: 17 }}
          >
            Transact with confidence -- get fair price, cut score, visual carat
            and more for free
          </Typography>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleCheck}
          >
            {({ values, handleChange, handleSubmit, isValid }) => (
              <Form onSubmit={handleSubmit}>
                <RadioGroup
                  row
                  value={checkType}
                  onChange={(e) => {
                    setCheckType(e.target.value);
                    handleChange(e); // Update Formik value
                  }}
                  sx={{ position: "relative", top: 20 }}
                >
                  <FormControlLabel
                    value="certificateId"
                    control={<Radio />}
                    label="Check by Certificate ID"
                  />
                  <FormControlLabel
                    value="valuationCode"
                    control={<Radio />}
                    label="Check by Valuation Code"
                  />
                </RadioGroup>

                <Box
                  position="relative"
                  width="100%"
                  height={50}
                  top={30}
                  left={0}
                  bgcolor="white"
                  borderRadius={1}
                  border="1px solid #9095a0"
                >
                  <Field
                    as={TextField}
                    name="inputValue"
                    variant="standard"
                    placeholder={
                      checkType === "certificateId"
                        ? "Enter Certificate ID"
                        : "Enter Valuation Code"
                    }
                    fullWidth
                    InputProps={{
                      disableUnderline: true,
                      style: {
                        paddingLeft: 20,
                        paddingTop: 8,
                        color: "black",
                        fontSize: 16,
                      },
                    }}
                  />
                  <ErrorMessage
                    name="inputValue"
                    component={CustomErrorMessage}
                  />
                </Box>

                <Button
                  type="submit"
                  disabled={!isValid}
                  sx={{
                    position: "relative",
                    width: 151,
                    height: 50,
                    top: 50,
                    left: "calc(50% - 75.5px)",
                    backgroundColor: "#6366f2",
                    borderRadius: 1,
                    textTransform: "none",
                    ":hover": { backgroundColor: "#6366f2" },
                  }}
                >
                  <Typography color="white" fontSize={16} lineHeight="26px">
                    Run free check
                  </Typography>
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};

export default DiamondCheckInputForm;
