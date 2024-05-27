import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout.jsx";
import CalculatePage from "./components/calculate/CalculatePage.jsx";
import { Appointment } from "./components/appointment/Appointment.jsx";
import HomePage from "./components/home_page/HomePage.jsx";
import DiamondCheckPage from "./components/check_diamond/diamond_check/DiamondCheckPage.jsx";
import DiamondCheckResultPage from "./components/check_diamond/diamond_check_result/DiamondCheckResultPage.jsx";

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
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path: "/diamond-calculate",
        element: <CalculatePage />,
      },
      {
        path: "/diamond-check",
        element: <DiamondCheckPage />,
      },
      {
        path: "/diamond-check/:id",
        element: <DiamondCheckResultPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
