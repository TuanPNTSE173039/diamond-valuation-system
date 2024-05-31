import AppointmentForm from "../../components/Appointment/Form.jsx";
import { useQuery } from "@tanstack/react-query";
import { getServices } from "../../services/Service/api.js";
import UICircularIndeterminate from "../../components/UI/CircularIndeterminate.jsx";

const ScreenAppointmentForm = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Services"],
    queryFn: getServices,
  });
  if (isLoading) {
    return <UICircularIndeterminate />;
  }
  console.log(data);

  return <AppointmentForm services={getServices} />;
};

export default ScreenAppointmentForm;
