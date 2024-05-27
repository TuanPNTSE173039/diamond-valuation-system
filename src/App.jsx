import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout.jsx";
import CalculateInput from "./components/Calculate/CalculateInput.jsx";
import { Appointment } from "./components/appointment/Appointment.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/diamond-calculate",
        element: <CalculateInput />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
