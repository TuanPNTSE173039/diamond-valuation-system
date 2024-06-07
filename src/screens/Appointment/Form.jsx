import AppointmentForm from "../../components/Appointment/Form.jsx";
import { useQuery } from "@tanstack/react-query";
import UICircularIndeterminate from "../../components/UI/CircularIndeterminate.jsx";
import { getCustomer } from "../../services/api.js";
import { getServices } from "../../services/api.js";

const ScreenAppointmentForm = () => {
  const {
    data: services,
    isLoading: isServiceLoading,
    error: serviceError,
  } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });

  const {
    data: customer,
    isLoading: isCustomerLoading,
    error: customerError,
  } = useQuery({
    queryKey: ["customer"],
    queryFn: () => getCustomer(2),
  });

  if (isServiceLoading || isCustomerLoading) {
    return <UICircularIndeterminate />;
  }

  console.log("Services: ", services);
  console.log("Customer: ", customer);

  return <AppointmentForm services={services} customer={customer} />;
};

export default ScreenAppointmentForm;
