import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout.jsx";
import CalculatePage from "./components/calculate/CalculatePage.jsx";
import { Appointment } from "./components/appointment/Appointment.jsx";
import HomePage from "./components/home_page/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/diamond-calculate",
        element: <CalculatePage />,
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
