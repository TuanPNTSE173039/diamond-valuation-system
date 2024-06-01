import AppointmentForm from "../../components/Appointment/Form.jsx";
import { useQuery } from "@tanstack/react-query";
import { getServices } from "../../services/Service/api.js";
import UICircularIndeterminate from "../../components/UI/CircularIndeterminate.jsx";
import { getCustomer, getCustomers } from "../../services/Customers/api.js";
import { getCustomerByID } from "../../services/Customers/utils.js";

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
    queryFn: () => getCustomer(1),
  });

  if (isServiceLoading || isCustomerLoading) {
    return <UICircularIndeterminate />;
  }

  // const customer = getCustomerByID(customers, 1);

  console.log("Services: ", services);
  console.log("Customer: ", customer);

  return <AppointmentForm services={services} customer={customer} />;
};

export default ScreenAppointmentForm;
